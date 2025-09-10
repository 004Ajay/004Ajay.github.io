---
id: Nginx Reverse Proxy
title: Nginx Reverse Proxy
sidebar_label: Nginx Reverse Proxy
---

## NGINX Reverse Proxy on Port 80 with llm.com

_**Note:** This will work only on your current system under your network, but this can save you from typing `192....230:8080` for accessing your locally hosted app._

### 1. Stop and Disable any apps working on Port 80 (this port is normally used for web communication)

For my case, Apache2 was running on Port 80

```bash
sudo systemctl stop apache2
sudo systemctl disable apache2
```

### 2. Install Nginx (if not already installed)

```bash
sudo apt update
sudo apt install nginx -y
```

### 3. Configure `/etc/hosts` for Local Domain Resolution

This tells your system to resolve `llm.com` locally.

```bash
sudo nano /etc/hosts
```

Add the line `127.0.0.1 llm.com`

If you're on a different machine than the one running Nginx, use the Nginx server's IP instead.

### 4. Create a Reverse Proxy Config for `llm.com`

Create a new config file:

```bash
sudo nano /etc/nginx/sites-available/llm.com
```

Paste this config:

```bash
server {
    listen 80;
    server_name llm.com;

    location / {
        proxy_pass http://192.168.1.230:8080;  # replace with your app's actual IP and port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 5. Enable the Config

Link it into `sites-enabled`:

```bash
sudo ln -s /etc/nginx/sites-available/llm.com /etc/nginx/sites-enabled/
```

**Optional:**

**Remove the default site to avoid conflicts:**

```bash
sudo rm /etc/nginx/sites-enabled/default
```


### 6. Test Nginx Config and Restart

Check for syntax errors:

```bash
sudo nginx -t
```

If it says syntax is ok and test is successful, then restart Nginx:

```bash
sudo systemctl restart nginx
```

### 7. Visit Your App

Open your browser and go to `http://llm.com`

It should show the app running on `192.168.1.230:8080`, now proxied cleanly by Nginx!

### 8. Add More Apps

Add More Domains Easily by repeating steps 4–7 with new configs, example:

```
dbui.com → 192.168.1.231:3000

adminportal.com → 192.168.1.232:5000
```
Each with their own file in `/etc/nginx/sites-available/` and an entry in `/etc/hosts`

---

<br />

<details>
  <summary>Every Commands in one Bash Script</summary>

```bash
#!/usr/bin/env bash

# ========== 1. Ask user for required input ==========
echo
echo "Nginx Reverse Proxy Setup Script (No strict validations)"
echo
read -rp "Enter the local domain you want to use (e.g. llm.com): " LOCAL_DOMAIN
read -rp "Enter the application host IP (e.g. 192.168.1.230): " APP_HOST
read -rp "Enter the application port (e.g. 8080): " APP_PORT

sleep 2

# ========== 2. Display what's going to happen ==========
echo
echo "This script will perform the following steps:"
echo "--------------------------------------------------"
echo
echo "1. Stop and disable Apache2 (if running) to free up port 80"
echo
echo "2. Install Nginx if it's not already installed"
echo
echo "3. Add the following entry to /etc/hosts:"
echo "     127.0.0.1 ${LOCAL_DOMAIN}"
echo
echo "4. Create an Nginx reverse proxy configuration:"
echo "     - ${LOCAL_DOMAIN} => http://${APP_HOST}:${APP_PORT}"
echo
echo "5. Enable the new Nginx site and disable the default"
echo
echo "6. Restart Nginx to apply the changes"
echo "--------------------------------------------------"
echo

read -rp "Do you want to continue and enter sudo shell? (y/n): " CONFIRM
if [[ "$CONFIRM" != "y" ]]; then
  echo "Aborted by user."
  exit 1
fi

echo "Entered sudo shell..."
echo

# ========== 3. Enter sudo shell and run all tasks ==========
sudo env LOCAL_DOMAIN="$LOCAL_DOMAIN" APP_HOST="$APP_HOST" APP_PORT="$APP_PORT" bash -c "$(cat <<'EOF'

set -euo pipefail

# Variables
NGINX_SITES_AVAILABLE="/etc/nginx/sites-available"
NGINX_SITES_ENABLED="/etc/nginx/sites-enabled"
CONFIG_PATH="${NGINX_SITES_AVAILABLE}/${LOCAL_DOMAIN}"
HOSTS_LINE="127.0.0.1 ${LOCAL_DOMAIN}"

# Step 1: Stop Apache
if systemctl is-active --quiet apache2; then
  systemctl stop apache2
  systemctl disable apache2
  echo "Stopped and disabled Apache2."
else
  echo "Apache2 not running."
fi

# Step 2: Install Nginx
if ! command -v nginx >/dev/null; then
  apt update
  apt install -y nginx
  echo "Nginx installed."
else
  echo "Nginx already installed."
fi

# Step 3: Update /etc/hosts
if ! grep -Fxq "${HOSTS_LINE}" /etc/hosts; then
  echo "${HOSTS_LINE}" >> /etc/hosts
  echo "Added ${HOSTS_LINE} to /etc/hosts."
else
  echo "Entry already exists in /etc/hosts."
fi

# Step 4: Create Nginx config
cat > "${CONFIG_PATH}" <<NGINX_CONF
server {
    listen 80;
    server_name ${LOCAL_DOMAIN};

    location / {
        proxy_pass http://${APP_HOST}:${APP_PORT};
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGINX_CONF


echo "Created Nginx config at ${CONFIG_PATH}"

# Step 5: Enable config
if [ ! -L "${NGINX_SITES_ENABLED}/${LOCAL_DOMAIN}" ]; then
  ln -s "${CONFIG_PATH}" "${NGINX_SITES_ENABLED}/${LOCAL_DOMAIN}"
  echo "Enabled site: ${LOCAL_DOMAIN}"
fi

# Remove default site if exists
if [ -e "${NGINX_SITES_ENABLED}/default" ] || [ -L "${NGINX_SITES_ENABLED}/default" ]; then
  rm -f "${NGINX_SITES_ENABLED}/default"
  echo "Removed default site."
fi

# Step 6: Test and restart Nginx
nginx -t
systemctl restart nginx
echo "Nginx restarted."

echo "Setup complete! You can now visit: http://${LOCAL_DOMAIN}"
EOF
)"
```

</details>