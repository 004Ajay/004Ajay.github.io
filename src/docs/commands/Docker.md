---
id: Docker
title: Docker
sidebar_label: Docker
---

![Docker Process](Images/Docker%20Process.jpg)

Docker Process (from _https://www.youtube.com/watch?v=oGPjzCBZGzg_)

Good videos to understand docker: [Monis Yousuf](https://www.youtube.com/playlist?list=PLlrv2-wV8WA1eFpbPSIcLLYqJxZSPrISZ)

---


## Dockerfile

A YAML (.yml) file for building a Docker Image. It can installs dependencies, copy your code, expose ports, and run the app

A sample dockerfile

```yaml
version: "3.9" # Docker Compose file format version

services:
  ollama: # "ollama" LLM Backend API Server
    image: ollama/ollama  # Official Ollama image
    container_name: ollama
    ports:
      - "11400:11434"  # Ollama API port; Map port 11400 of the host to port 11434 of the container
    volumes:
      - ollama_data:/root/.ollama # Persistent storage for downloaded models
	  			  # '/root/.ollama' is the model storage location inside the container.
    restart: unless-stopped # Automatically restart the container unless it is explicitly stopped by the user.
    			    # This is useful for ensuring Ollama is always running after reboots or crashes.

  openwebui: # "openwebui" Web-based Frontend for LLM
    image: ghcr.io/open-webui/open-webui:main  # Official OpenWebUI image
    container_name: openwebui
    ports:
      - "3000:8080"  # Host port 3000 maps to OpenWebUI's internal port 8080
    environment:
      - OLLAMA_API_BASE_URL=http://ollama:11434  # Connect OpenWebUI to Ollama backend
    depends_on:
      - ollama  # Ensure Ollama starts before OpenWebUI
    restart: unless-stopped

volumes:
  ollama_data:  # Persistent volume for Ollama models
```

<br />

---

## Docker Image

A read-only blueprint for making Docker Container. Think of it as a food recipe

### List all docker images

```bash
docker images
```

Sample Output:

```bash
REPOSITORY                      TAG       IMAGE ID       CREATED         SIZE
ghcr.io/open-webui/open-webui   main      21bb7e0892cf   2 weeks ago     4.78GB
ollama/ollama                   latest    2b23bc85a2d2   5 weeks ago     2.27GB
```

<br />

### Docker image hardware usage

```bash
docker stats
```

Sample Output:

```bash
CONTAINER ID   NAME         CPU %    MEM USAGE / LIMIT       MEM %   NET I/O           BLOCK I/O      PIDS
21bb7e0892cf   open-webui   0.12%    12.34MiB  /  1.953GiB   0.62%   1.23kB / 4.56kB   7.89MB / 0B    5
```

<br />

### Remove a docker image

```bash
sudo docker rmi -f <image_id>
```
Example: ```sudo docker rmi -f ffc5b597096e```

* If an image is not removable due to some errors like
	
> Error response from daemon: conflict: unable to delete image_id (cannot be forced) - image has dependent child images

Then use the image name with tag in the format `image_name:tag`

> Always check what the error is saying and see if it is conveying something important.

Example: `sudo docker rmi -f anaconda/conda:cpu`

<br />

### Recreate new image after making changes to exisitng image

Let's say you have a container 'bd91ca3ca3c8' running, and you want to create a new image after you made changes in the container. Generating another image will allow you to preserve your changes.

In that case you can run:

```bash
docker commit -p -a "author_here" -m "your_message" bd91ca3ca3c8 name_of_new_image
```

Example: `docker commit -p -a "Ajay" -m "edit in frontend" bd91ca3ca3c8 OWUI_new`

* `-p` pauses the container while commit command is building the new image.

* `-a` supply author information of the new image.

* `-m` add a comment just as in the Git.

<br />

### Zipping docker image 

```bash
docker save -o <tar_filename.tar> <image_name:tag>
```
    
Example `docker save -o ollama.tar ollama/ollama:latest`

<br />

### Load an image from Zipped file

```bash
docker load -i <name_of_archive_file_with_extension>
```

Example `docker load -i ollama.tar`

<br />

---

## Docker Container

A running instance of an image. Think of it is a food made using a recipe

### List all docker containers (with their status)

```bash
docker ps -a
```

Sample Output:

```bash
CONTAINER ID   IMAGE                                COMMAND           CREATED       STATUS                 PORTS                                         NAMES
a839cf0e8ee9   ghcr.io/open-webui/open-webui:main   "bash start.sh"   3 hours ago   Up 3 hours (healthy)   0.0.0.0:3000->8080/tcp, [::]:3000->8080/tcp   open-webui
```

<br />

### Enter into the shell of a docker container

```bash
sudo docker exec -it <container_id> /bin/bash
```

Example: ```sudo docker exec -it ffc5b597096e /bin/bash```

Note: There won't be any packages (like nano, vim) installed inside the shell of a docker container

<br />

### Remove a docker container

```bash
docker rm -f <container_id>
```

Example: ```sudo docker rmi -f c22e695dfda2```

<br />

### Display container logs

```bash
docker logs -f $(docker ps -q -f name=<container_name>)

OR

docker logs <container_name>
```

Example: `docker logs -f $(docker ps -q -f name=open-webui)` or `docker logs open-webui`

<br />

---

## Docker Compose

A tool for defining and running multi-container Docker applications using a YAML file (usually docker-compose.yml, not strict, it can be ajay-compose.yml or any name [[see this](https://youtu.be/BTXfR76WmCw?si=1NPzu-JUAZEEo64j&t=309)])

Think like you have a dockerfile like the [one above](/docs/commands/Docker#dockerfile); If you make two separate dockerfiles for the Ollama and Open WebUI, you need to maintain them separately. But with docker compose, you can define them in a single file and run with a single command like `docker compose up`

### `--build` option in docker compose

A command like `docker compose up --build` will rebuild new images whenever you run this command. Without the `--build`, the docker will reuse the old image, where your new changes are not reflected.