---
id: LLM Locally
title: LLM Locally
sidebar_label: LLM Locally
---

To put an LLM locally (which works similar to ChatGPT) we need two components - Ollama and Open WebUI. In this process we need to use both Ollama and Open WebUI, that is why I made a separate file for detailing the process of making LLM work locally.

> Ollama manages the downloading, loading/unloading, deleting, making new models and more of LLMs gracefully.

> Open WebUI is the user interface similar to ChatGPT but with much more features hidden inside. 




---


## Change Ollama Models Directory in Ubuntu Linux

### 1.1. Copy installed ollama models from one disk to another

```bash
cp -r <curret/path/to/models> <destination/to/store/model/files>
```

* Example command: ```cp -r /mnt/INTERNAL/Ollama/.ollama /home/appuser/Ollama/.ollama```

<br />

### 1.2. Get it from any other system (Linux) in your network

[See Secure Copy (SCP)](./Secure_Copy_SCP.md)

<br />

### 2. Stop Ollama Service (optional but recommended)

```bash
sudo systemctl stop ollama
```

<br />

### 3. Get user and group owner names of your destination folder

Go to the folder where you're going to keep ollama files

```bash
cd /home/appuser/Ollama/.ollama (Example)
```

Check details of all files

```bash
ls -lk -a
```

<br />

### 4. Create and Override Ollama service using config file

```bash
sudo mkdir -p /etc/systemd/system/ollama.service.d; sudo nano /etc/systemd/system/ollama.service.d/override.conf
```

Add the `path`, `user`, and `group` of new location in the file

Example

```bash
[Service]
Environment="OLLAMA_MODELS=/home/appuser/ollama/.ollama/models" # change this path to your path
User=appuser # change this path to your User
Group=appuser # change this path to your Group
```

<br />

### 5. Restart System Daemon (this is not a system reboot) and Ollama

```bash
sudo systemctl daemon-reload

sudo systemctl restart ollama
```

<br />

### 6. Check the working

```bash
ollama list
```

<br />

### 7. Try downloading a model and check if it is saving to the new location

```bash
ollama run <model_name>
```

* Get new model name from `ollama.com/models`

<br />

---

## Optionals

### Check details of all directories

```bash
ls -ld -a
```

### Status of Ollama

To see status of ollama (whether it is running, stopped, exited, error)

```bash
sudo systemctl status ollama
```

### Error logs of Ollama

To see the error logs of ollama (limiting to the latest 50 lines)

```bash
journalctl -u ollama -n 50
```

## Ollama and Open WebUI from separate computers

hidden