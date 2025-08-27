---
id: Trust new CA Cerificate
title: Trust new CA Cerificate
sidebar_label: Trust new CA Cerificate
---

It is common in corporates to use endpoint protection and tracking tools like `Fortinet` to manage the system as well as access to different sites in the internet. They may issue new certificates that need to be installed in the linux systems separately. To do that, follow

## Copy the certificate from issuer

It can be copied to any folder such as Downloads or Documents

This is done to make a local copy of the certificate, if you're copying it from a network folder.

If you don't want a copy, directly copy the file from source to destination using next step.

## Put the CA file in `ca-certificates` folder

```bash
cp CA_Certificate.cer /usr/local/share/ca-certificates/CA_Certificate.crt
```

## Update the ca-certificates

This will make the new CA file visible to the system.

```bash
sudo update-ca-certificates --verbose
```

* `--verbose` is added to get details of ca-certificate updation

After this updation, a `.pem` file will be added to `/etc/ssl/certs/`, you can `ls` and verify it.

## Check if CA-Certificate is working

This is the step that breaks everything.

```
python -c "import requests; print(requests.get('https://pypi.org').status_code)"
```

Change the `python` with `python3` if command shows python error.

You added the CA file, update the CA Certificate store but still things are not working.

A common cause of this - current user (eg: appuser) cannot read that certificate file.

## Check if CA file is readable by the current user

If this works then your current user can read the CA file. And you have to follow some other helps to debug the issue, following this article won't help. 

```bash
cat /etc/ssl/certs/CA_Certificate.pem
```
If this works then your super-user (sudo / admin / root) user can only read the CA file. We need to change it.

```bash
sudo cat /etc/ssl/certs/CA_Certificate.pem
```

## Check the CA file permissions

Use `ls -l` to see it, the `-l` option stands for "long format" which will display all the details such as File type, Permissions, Hard link count, Owner, Group, Size, Modification time, and File or Directory name 

```bash
ls -l /etc/ssl/certs/CA_Certificate.pem
```

If this is not giving output as `lrwxrwxrwx 1 root root 52 Aug 26 15:18 /etc/ssl/certs/CA_Certificate.pem -> /usr/local/share/ca-certificates/CA_Certificate.crt`

Focus on the `lrwxrwxrwx`, as it shows whether the file can be read by the current user. If not change the mode.

### Change the mode

This mode change enables the current user to read the `crt` file.

```bash
sudo chmod 644 /usr/local/share/ca-certificates/CA_Certificate.crt
```

After this check the permission of the file again → `ls -l /etc/ssl/certs/CA_Certificate.pem`


## Check if it CA-Certificate is working

```
python -c "import requests; print(requests.get('https://pypi.org').status_code)"
```

If its working then you're good to go. Follow below steps to make it persistent.

## Add Shell Variables 

Bash 

```bash
export REQUESTS_CA_BUNDLE=/etc/ssl/certs/CA_Certificate.pem
export SSL_CERT_FILE=/etc/ssl/certs/CA_Certificate.pem
```

Fish Shell

* Open the config file

```
nano ~/.config/fish/config.fish
```

* Add the rules

```bash
set -x REQUESTS_CA_BUNDLE /etc/ssl/certs/CA_Certificate.pem
set -x SSL_CERT_FILE /etc/ssl/certs/CA_Certificate.pem
```

* Open a new terminal and check 

```
echo $REQUESTS_CA_BUNDLE
echo $SSL_CERT_FILE
```

## Sample Usecase - Docker Image building

Docker will recreates everything similar to a virtual machine while building an image

* Go to the location of your `dockerfile`

* Copy the CA Certificate to that folder

```
cp /etc/ssl/certs/CA_Certificate.pem ./CA_Certificate.pem
```

* Inside the dockerfile add the line 

```
# Copy the cert into the container
COPY CA_Certificate.pem /usr/local/share/ca-certificates/CA_Certificate.crt
```

* Build the docker image 

```docker
docker build -t image_name .
```