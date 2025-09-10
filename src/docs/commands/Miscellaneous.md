---
id: Miscellaneous
title: Miscellaneous
sidebar_label: Miscellaneous
---

### Move multiple files using `mv` command

Move multiple files from a folder to another folder in Linux using 'mv' command

```bash
mv -t DESTINATION file1 file2 file3
```

Example: `mv -t ./Other final_doc1.odt filenames.txt new_wall.jpg`

---

### Get full path of a file in terminal

Use `realpath` command

Example: `realpath auto.sh`

         output: `/home/appuser/Desktop/scripts/auto.sh`

---

### Search a term in any files on a folder

Use `grep -Ri "search_term"`

* `R` - recursive
* `i` - ignore case

Example: `grep -Ri "ssh"`

output:

```
Miscellaneous.md:Example: `grep -R "ssh"`

Problem_Fixing.md:_through Secure Socket Shell(SSH)**_

Fish_Abbreviations.md:### SSH Commands

Fish_Abbreviations.md:* sr - `ssh appuser@192.168.1.230`

Fish_Abbreviations.md:* sl - `ssh appuser@192.168.1.228`
```

### Check size of files in a directory 

```bash
ls -lh
```
Sample Output:

```
total 3.2G
-rw-rw-r-- 1 appuser appuser 125K Feb  6 11:27 biology.jpeg
drwxrwxr-x 6 appuser appuser 4.0K Jun 20 10:10 ImageResize
-rw-rw-r-- 1 appuser appuser   58 May 21 10:55 path.txt
-rw-r--r-- 1 appuser appuser 3.2G Jun 25 09:52 data.zip
-rw-rw-r-- 1 appuser appuser 145K Jun  2 14:54 screenshot.png
```

---

### Check Port details

```bash
ss -tuln | grep port_number
```

- **`ss`**:  Utility to dump socket statistics (replaces the older `netstat`).

- **Flags: `-tuln`**
  - `-t`: Show **TCP** sockets  
  - `-u`: Show **UDP** sockets  
  - `-l`: Show **listening** sockets only  
  - `-n`: Show **numerical** addresses (don’t resolve hostnames/services)

- **`| grep port_number`**: Filters the output to lines containing the specified **port_number**
