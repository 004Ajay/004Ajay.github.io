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