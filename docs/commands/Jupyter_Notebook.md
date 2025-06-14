---
id: Jupyter_Notebook
title: Jupyter Notebook
sidebar_label: Jupyter Notebook
---

### 1. Make Jupyter Notebook available in the network

```bash
jupyter notebook --ip <ip for current computer> --port <port_num> --no-browser
```
* Activate from the computer on which you have the files to work on and to store new files. 
* That is why `--no-browser` flag is set

Example: ```jupyter notebook --ip 192.168.1.229 --port 8889 --no-browser```