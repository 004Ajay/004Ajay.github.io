---
id: SSH
title: Secure Socket Shell (SSH)
sidebar_label: SSH
---

### Connect to other systems

Use `ssh user@ip-address`

Example: `ssh appuser@192.168.1.230`

### Use GUI through SSH

Use `ssh -X user@ip-address` 

-> start graphical application programs

Make a new file that runs on GUI based apps `touch file.odt`

Open the file on app `libreoffice file.odt`