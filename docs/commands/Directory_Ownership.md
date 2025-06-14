---
id: Directory Ownership
title: Directory Ownership
sidebar_label: Directory Ownership
---

## Change ownership of a directory

1. Open the terminal and go to the directory

```bash
cd <path/to/dir>
```

Check permission, access and ownerships

```bash
ls -ld ./
```

Output: `drwxrwxrwx +4 appuser appuser 4096 Feb 6 10:24 ./`

* d = directory; r = read; w = write; x = execute

* 1st `rwx` is for User, 2nd is for Group and 3rd is for Others

<br />

2. Change ownership to something else, eg: app

```bash
sudo chown <new owner>:<new owner> ./path/to/a/file/or/dir>
```

Example:

```bash
sudo chown app:app ./
```
* Now user and group is app

<br />

3. Check ownership again

```bash
ls -lk -a 
```