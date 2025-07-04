---
id: Fish Shell
title: Fish Shell
sidebar_label: Fish Shell
---

## Intro

Fish is a terminal similar to Bash (Bourne Again SHell) and Zsh (Z Shell)

Some of the best features of Fish shell are Autosuggestions, Syntax Highlighting, Maths/Calculator, Search Functionality, and Abbreviations. Some of the Abbreviations I use are given below

## Abbreviations

It can be added at `/home/username/.config/fish/config.fish` (This is created as separate file for me)

### General Commands

* s - `sudo`

* c - `clear`

* e - `exit`

* upd - `sudo apt-get update`

* upg - `sudo apt-get upgrade`

---

### Conda Commands

* ca - `conda activate`

* cde - `conda deactivate`

* cenv - `conda env list`

* ccr - `conda create -n <env_name> python=3.11 -y`

* cexp - `conda env export --name <env_name> > <filename>.yml`

* crm - `conda remove -n <env_name> --all -y`

---

### SSH Commands

* sr - `ssh appuser@192.168.1.230`

* sl - `ssh appuser@192.168.1.228`

---

### Docker Commands

* dps - `sudo docker ps`

* di - `sudo docker images`

* dex - `sudo docker exec -it`

* ds - `sudo docker stop`

* dr - `sudo docker rm`

* dri - `sudo docker rmi`

---

### Python Commands

* pyt - `python`

* p3 - `python3`

* pi - `pip install`

* pu - `pip uninstall`


---

### NVIDIA Commands

* ns - `nvidia-smi`

* wns - `watch nvidia-smi`

* nvc - `nvcc --version`

---

### Jupyter Commands
* jn - `jupyter notebook`

* jns - `jupyter notebook --ip 192.168.1.229 --port 8887 --no-browser`

---

### Ollama Commands

* os - `ollama show`

* orun - `ollama run`

* ol - `ollama list`

* ops - `ollama ps`

* orm - `ollama rm (remove)`

---

### Other Commands

* c. - `code .`

* fi - `find ./<filename> -type f > <filename>.txt`

* pcopy - `time cat <filename>.txt | parallel -j 10 -X -n 1 rsync -av --inplace {} ./<dest_dir_name>`