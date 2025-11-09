---
id: install_py_pkgs_offline
title: Install Python Packages Offline (Windows)
sidebar_label: Install Python Packages Offline (Windows)
---

> This assumes you have installed the Python (eg, 3.11.11) in the destination Offline computer. Also the python version has to be same in both the computers (where you dowload the packages and where you install them).

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
<details>
    <summary><b> See a possible error </b></summary>
    
    Make sure to have same Python version and OS in your downloading env and you destination env. Otherwise you will have error like downloading Python 3.9 packages in Linux for Python 3.11.11 Windows destination 

    ```
    ERROR: Could not find a version that satisfies the requirement pillow==10.4.0 (from versions: none) 1.540

    ERROR: No matching distribution found for pillow==10.4.0
    ```
    When we check the downloaded packages we have 'pillow-10.4.0-cp39-cp39-manylinux_2_28_x86_64.whl' but see the 'cp39' and 'manylinux', it is for Python 3.9 in Linux and not Python 3.11.11 in Windows.

</details>

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

---

## For building Docker Images

Copy locally downloaded dependencies, this `offline_packages` is the same folder where we downloaded the files

```bash
COPY offline_packages /app/offline_packages
```

Copy requirements file

```bash
COPY requirements.txt /app/requirements.txt
```

Run the same `pip install` command above 

```bash
RUN pip install --no-cache-dir --no-index --find-links=offline_packages -r requirements.txt && rm -rf offline_packages
```

* If your workdir is different, you can do `/app/offline_packages`, `/app/requirements.txt`

* If pip happens to cache something, with `--no-cache-dir` it will not

<br />

**So with this method**

1. You can speed up the docker creation process

2. You don't need to do (CA Certificate copying to docker image)

```bash
COPY ca_cert.pem /usr/local/share/ca-certificates/ca_cert.crt
RUN update-ca-certificates

ENV REQUESTS_CA_BUNDLE=/etc/ssl/certs/ca_cert.crt
ENV SSL_CERT_FILE=/etc/ssl/certs/ca_cert.crt
```