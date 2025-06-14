---
slug: venv-python
title: "How to make a Virtual Environment in Python (Windows)"
authors: [ajay]
tags: [windows, venv, python]
---

Read on [Medium](https://medium.com/@ajaytshaju/how-to-make-a-virtual-environment-in-python-windows-17a30b67d3bc)

Python’s Virtual Environment(venv) is a self-contained directory tree that contains a Python installation for a particular version of Python, with several additional packages.

<!-- truncate -->

It’s uses:

* Manage dependencies for different projects by creating isolated spaces.
* Maintain different versions of Python libraries and Python itself.
* Separate requirements (python version and library versions) of each project, without conflicts.

> _Be informed:_ You can either use pip(command line) or data science packages like Anaconda to run Python in your system, here I am using pip.

## Overview of making a venv

1. Find a location
2. Open the Terminal of that folder
3. Typing the venv creation command
4. Activate the environment

---

### 1. Find the location

Go to a suitable location on your computer. In this tutorial, I am making the venv in the Local Disk D.

### 2. Open the Terminal of that folder

You can open the terminal either by right click — Open In Terminal or by clicking the folder path top of the folder window and typing `cmd`

![Right Click — Open in Terminal](Right%20Click%20—%20Open%20in%20Terminal.webp)

Right Click — Open in Terminal

![Opening command prompt using folder path tab](Opening%20command%20prompt%20using%20folder%20path%20tab.webp)

Opening command prompt using folder path tab

### 3. Type this command

On the terminal, type `python -m venv tf_gpu` to make a venv with the name `tf_gpu`, you can use any name of your choice the syntax is `python -m venv <your_env_name>`

A short explanation of the command:

* `python`: The Python interpreter. You’re telling your system to do something using Python. You can make venv with a specific version of Python by adding the version number, ex: `python3.10.11` but you need to have the specified version of Python installed on your system.

* `-m`: Flag that tells Python to run a library module as a script.

* `venv`: The module you’re asking it to run. The venv module is a built-in module used for creating virtual environments in Python.

* `tf_gpu`: This is the name of the new virtual environment you’re creating.

### 4. Activating the environment

On the same terminal, type

`tf_gpu\Scripts\activate`

This will activate your venv, indicated by the venv name in brackets on the left side of the terminal command typing area.

## Exploring the venv

Type `pip list` to see the list of installed packages. Then if you have time, update pip using the green command given. Install all required libraries and enjoy working with Python venv.

![Complete Process](Complete%20Process.webp)
Complete Process