---
id: Docker
title: Docker
sidebar_label: Docker
---

![Docker Process](Images/Docker%20Process.jpg)

Docker Process (from _https://www.youtube.com/watch?v=oGPjzCBZGzg_)

### 1. List all docker containers (with their status)

```bash
docker ps -a
```

<br />

### 2. List all docker images

```bash
docker images
```

<br />

### 3. See hardware usage of running docker images

```bash
docker stats
```

<br />

### 4. Remove a docker container

```bash
docker rm -f <container_id>
```

Example: ```sudo docker rmi -f c22e695dfda2```

<br />

### 5. Remove a docker image

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

### 6. Enter into the shell of a docker container

```bash
sudo docker exec -it <container_id> /bin/bash
```

Example: ```sudo docker exec -it ffc5b597096e /bin/bash```

<br />

### 7. Save a docker image as zipped file
```bash
docker save -o <tar_filename.tar> <image_name:tag>
```
    
Example
	`docker save -o ollama.tar ollama/ollama:latest`