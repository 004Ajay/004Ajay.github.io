---
id: Secure Copy
title: Secure Copy (SCP)
sidebar_label: Secure Copy (SCP)
---

### 1. Send a file

From your local computer to a remote machine

```bash
scp [options/flags] path/to/your/local/file/or/folder remote_machine_current_user@remote_machine_ip_address:/path/to/store/your/file
```

* You can find your
	* remote_machine_current_user using `whoami` command
	* remote_machine_ip_address using `hostname -I`

Example: `scp -r ./models appuser@192.168.1.229:/usr/share/ollama/.ollama/models`