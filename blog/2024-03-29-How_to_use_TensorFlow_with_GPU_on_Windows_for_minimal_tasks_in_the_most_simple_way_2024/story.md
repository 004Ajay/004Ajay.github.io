---
slug: tf-minimal
title: "How to use TensorFlow with GPU on Windows for minimal tasks— in the most simple way(2024)"
authors: [ajay]
tags: [tensorflow, gpu]
---

Read on [Medium](https://medium.com/@ajaytshaju/how-to-use-gpu-with-tensorflow-on-windows-b1726a28ab3d)

Accelerating machine learning code using your system’s GPU will make the code run much faster and save a lot of time. In this blog we are going to do a quick setup to make TensorFlow access our PC/Laptop’s GPU, just like installing 3–4 libraries in python using pip.

<!-- truncate -->

Be informed:

* The latest TensorFlow version is 2.16 (As of March 2024), but TensorFlow can access GPU only if its version is `<= 2.10` in Windows. So if your code is written in the latest version you might need to fix the syntax and function calls.
* Some commands given in this tutorial may install big libraries which are gigabytes in size so be careful about your internet.

## TensorFlow GPU access steps overview:

* Install Python 3.10.11

* Update CUDA Driver to the latest version

* Install TensorFlow-CPU 2.10

* Install tensorflow-directml-plugin

* Run a sample code

---

Good to know:

You can install Python libraries for the user(may result in package version conflicts, if you have multiple projects) or in a virtual environment(more recommended). I recommend you first try the installation on a virtual environment(venv) and if it works, then you can activate and use that venv interpreter whenever you need to run a code on GPU.

---

_I am explaining the installation procedure using venv_

## Things to do before the real installation

* Make a virtual environment and activate it ([see this tutorial](https://medium.com/@ajaytshaju/how-to-make-a-virtual-environment-in-python-windows-17a30b67d3bc)).

* Open your command prompt, type `nvidia-smi` and hit enter (will need this later). If you get an error, then make sure you have a dedicated GPU and your device can find that device (checking — Start → device manager → display adapters → name of your graphics card)

![nvidia-smi command output](nvidia-smi%20command%20output.webp)

nvidia-smi command output

* Install PyTorch(for getting necessary CUDA & cuDNN libraries easily):

    * Search `PyTorch Start Locally`
    
    * Give details like PyTorch Build, Your OS, Package(pip, conda), Language, Compute Platform(select CUDA as seen on nvidia-smi), Run the resultant command on your command prompt (see the image below).

![PyTorch Start Locally](PyTorch%20Start%20Locally.webp)

PyTorch Start Locally

## Real change-makers

* Install Python 3.10.11

This is because to install tensorflow-cpu and DirectML the maximum supported version of python is 3.10

Check your python version by typing `python --version` on your command prompt, if you have other version of python then type `pip list` in the same cmd to list your installed python packages for the user, copy them to notepad to install necessary libraries later. Now uninstall the unsupported python version and install python 3.10, [direct-link](https://www.python.org/downloads/release/python-31011/)

![Python website (for 64bit windows)](Python%20website%20(for%2064bit%20windows).webp)
Python website (for 64bit windows)

* Update CUDA Drivers

* Go to the NVIDIA GeForce Experience App and check for driver updates, if there is any new update then install it.

* * If you don’t have the GeForce Experience App then go to this site fill in all details, download the resultant driver, and install it with/without the GeForce Application.

![NVIDIA GeForce — check for driver updates](NVIDIA%20GeForce%20—%20check%20for%20driver%20updates.webp)
NVIDIA GeForce — check for driver updates

* Install base TensorFlow library:

    `pip install tensorflow-cpu==2.10`

* Install tf-directml plugin

    `pip install tensorflow-directml-plugin`

* Check if TensorFlow can find your GPU

```python
import tensorflow as tf
tf.config.list_physical_devices('GPU')
# sample output -- [PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU'),
#                  PhysicalDevice(name='/physical_device:GPU:1', device_type='GPU')]
```

If you are getting a similar output as above, you try running a small code that utilizes GPU. Don’t forget to put `with tf.device('/GPU:0')` on the main function.

If you have a doubt about which GPU number to use, then try running with the 0 or 1 and check your task manager(ctrl+shift+esc → performance → GPU0 and GPU1) which GPU is getting utilized and use the number accordingly.