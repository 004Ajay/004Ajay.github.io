---
id: Problem Fixing
title: Problem Fixing
sidebar_label: Problem Fixing
---

**1. Unknown Jupyter Running - How I stopped it.**

OS: Linux

```bash
jupyter notebook --ip 192.168.1.xxx --port 888y --no-browser
```
Basically I use the above command to put jupyter notebook to local network from a system.

> A Jupyter client was turning on in other systems in the network even though it is not invoked in the mother system.

> **Scenario:** `"http://192.168.1.xxx:888y/"` this was used to connect to jupyter of system '192.168.1.xxx' to other systems connected in the network. But to my surprise, no terminal in the mother system invoked/started jupyter by specifiying the IP and Port Number.

I checked all the terminals of mother system, no jupyter was invoked, but still Jupyter was working, giving connection, loading notebook etc..but how? is it running as a background process, cron, system services, or even a malicious code running in the system?

> Debugging -> open terminal and type `sudo ss -tulpn | grep 888y` checking for network connection thru port 888y
		   
Output:
		   
`tcp LISTEN 0 128 0.0.0.0:8889 0.0.0.0:* users:(("jupyter-noteboo",pid=69xyz,fd=6))`
		   
Next straight forward step is to kill the process `69xyz` using `sudo kill 69xyz`
		   
But we need to check something else using commands

```bash
sudo lsof -i :888y

ps aux | grep jupyter

sudo systemctl | grep jupyter

sudo crontab -l
```

if you see something fishy, go on and disable, comment, or delete it.
		   
I just went on to do `sudo kill 69xyz` and it solved my problem, reload the `http://192.168.1.xxx:888y/`, it shouldn't connect. In my case it didn't connected.

> In my case may be my friends or someone might have started the jupytet using `nohup`, which send the running of that process to background. So even if we close the terminal or logout it will be still running.

<br />

---

**2. Desktop was not seen in the File Explorer**

OS: Linux

> After a Linux update or something, my Desktop folder gone missing. I have my `Gnome Desktop` running smoothly, but the folder dedicated and used by system named `Desktop` was not in the system. Now path to my `home` folder has been taken as desktop folder.

When I open a terminal and type 

* `cd` - it goes to home location
    
    * On typing `pwd` we will get that home location, in my case it was `/home/appuser`

    * And this `/home/appuser` was acting as my desktop (problem 1) and all the folders and files in that location is in the Gnome Desktop.

**Solution**

* Opened a Terminal and went to home location (/home/appuser)

* Made a folder named `Desktop` using `mkdir -p Desktop` (-p creates folder only if that folder doesn't exist in the given location)

* Then Opened `.config/user-dirs.dirs` file using nano in sudo mode (`sudo nano .config/user-dirs.dirs`)

    * That file has some contents like 

            XDG_DESKTOP_DIR="$HOME"
            XDG_DOWNLOAD_DIR="$HOME/Downloads"
            XDG_TEMPLATES_DIR="$HOME/"
            XDG_PUBLICSHARE_DIR="$HOME/"
            XDG_DOCUMENTS_DIR="$HOME/Documents"
            XDG_MUSIC_DIR="$HOME/"
            XDG_PICTURES_DIR="$HOME/"
            XDG_VIDEOS_DIR="$HOME/"

    * See `XDG_DESKTOP_DIR="$HOME"` pointing to `$HOME` not `$HOME/Desktop`

    * Changed path `$HOME` to `$HOME/Desktop` of `XDG_DESKTOP_DIR`

    * Saved and Exited nano

* Restarted Gnome Shell
    
    * Press `Alt+F2`
    
    * Type `r` in the dialog box
    
    * Enter

* Now going to Gnome Desktop, no folders will be visible there, we changed the path of Desktop.

* Even though I got the Desktop Folder back, `I am still searching for a way to get Desktop listed on quick access list` (a list in the left side of screen when you open a folder).

<br />

---

**3. Ollama was not using GPU after server restart**

OS: Linux

I just wanted to refresh my computer with a restart, so I did a restart.

But after the restart, ollama was not using the gpu when invoked in another computer in the network using Open WebUI. It was not the problem with Open WebUI as it is just an interface to use these AI models hosted with Ollama.

---

So my mind-map for troubleshooting is

1. Check if `torch` in any conda environment can access GPU

    1.1. If False, then move to step 2

    1.2. If True, then move to step 3

2. Check `nvcc -V` to check CUDA compilers installation and version. Check `nvidia-smi` to verify visibility of GPU to the device. If there is any problem in the installation or anything, just re-build everything from scratch (or follow the nvidia doc to patch the issue).

3. Run a model with ollama (eg: `ollama run llama3.2:`) and check if it is generating text slowly using CPU (make sure using `htop`)

    3.1. If so, then update/reinstall ollama using `curl -fsSL https://ollama.com/install.sh | sh`

---

**Starting troubleshooting:**

I activated a conda env (named 'llm') using `conda activate llm` and opened Python3 IDLE using `python3` command on the same terminal and used the code given [here](./Pytorch.md). And it was working, given True, which means torch can access gpu.

Next I moved to run a model with ollama and it was generating text very slowly, like 1 word per second and in `htop` ollama was using all 32 cores of the system as well.

So I updated ollama, waited for 10 minutes for it to get finished. Checked again and ollama was using GPU this time, verified it in Open WebUI also. So problem is solved.

_I run the Ollama and Open WebUI in another computer (as it has more GPU VRAM). **And I done all the above troubleshooting steps without leaving my primary computer, through Secure Socket Shell(SSH)**_