---
id: Open WebUI
title: Open WebUI
sidebar_label: Open WebUI
---

## Making Open-WebUI accessible across the network

### 1. Download Docker

Download and Install docker for your OS from [Get Started | Docker](https://www.docker.com/get-started/) or [Install | Docker Docs](https://docs.docker.com/engine/install/) 

If you want help with docker commands, see [this](https://004ajay.github.io/docs/commands/Docker) 

### 2. Run Open-WebUI using docker to make it accessible across the network

*This uses **CUDA** for GPU Accelerated performance for LLMs*

```bash
sudo docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui-main --restart always ghcr.io/open-webui/open-webui:cuda
```

---

<br />


## Update Open-WebUI

### 1. List all running Docker Containers

```bash
sudo docker ps -a
```

<br />

### 2. Stop running Open-WebUI Docker Container

```bash
sudo docker stop <container_id/name>
```

Example: ```sudo docker stop 13800bf6b9a1```

<br />

### 3. Remove that container (don't worry it won't remove the data/volume of Open-WebUI)

```bash
sudo docker rm -f <container_id/name_with_tag>
```

Example: ```sudo docker rm -f open-webui:cuda```

<br />

### 4. Pull the latest image from Open-WebUI GitHub/Website

_*Note*: This will take some time_

```bash
sudo docker pull ghcr.io/open-webui/open-webui:cuda
```

<br />

### 5. Start the docker container of Open-WebUI again

```bash
sudo docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:cuda
```

* If it is causing some errors like 
    ```
    docker: Error response from daemon: Conflict. The container name "/open-webui" is already in use by container "6a5b7aaf852410d4c6eccb27bf91c32ec25252e84eb81cab1c2d5cb89cc49bb0". You have to remove (or rename) that container to be able to reuse that name.
    See 'docker run --help'.
    ```

* List the running docker containers using `sudo docker ps -a` 

* Then remove the container with name conflict, example `sudo docker rm -f open-webui`

* Rerun the `sudo docker run ... open-webui:cuda` again

<br />

### 6. Check whether Open-WebUI is accessible in the browser

```bash
http://<mother_computer_ip>:<port_number>
```

Example: `http://192.168.1.230:8080`