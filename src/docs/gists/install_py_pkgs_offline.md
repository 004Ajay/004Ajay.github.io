---
id: install_py_pkgs_offline
title: Install Python Packages Offline (Windows)
sidebar_label: Install Python Packages Offline (Windows)
---

> This assumes you have installed the Python in the destination Offline computer. Also the python version has to be same in both the computers (where you dowload the packages and where you install them).

## Prerequisites / To Do

_This need to be done on a `Windows machine` itself, similar to your offline computer, but with open internet_

1. Make a list of required packages in a file, eg [requirements.txt](https://github.com/004Ajay/Personal-Works/blob/main/Python/Works/QR_Code_Streamlit_App/requirements.txt)

2. Make a dedicated folder for this work.

    * Make one virtual env (`python -m venv offline_pkgs_env`) and activate it.

    * Make a folder for storing the packages, eg: `offline_packages`

---

## Install Packages

In the activated venv, do

```bash
pip download -r requirements.txt -d offline_packages
```

In the offline_packages folder you can view the downloaded `.whl / wheel` files of all libs you listed in requirements.txt

---

## Transferring offline packages

The downloaded package files (offline_packages folder) can be transferred to offline computer / destination using a USB or Shared Drive.

---

## Installing packages offline

1. Copy the `downloaded packages folder (offline_packages)` to the destination computer.

2. Copy the `requirements.txt` file to the destination computer.

3. Make a venv in the destination computer to make place to install the offline packages. 

```bash
python -m venv app_env
```

Then install the packages offline using

```bash
pip install --no-index --find-links=offline_packages -r requirements.txt
```

here `offline_packages` is the folder name where the downloaded files of libs exists.