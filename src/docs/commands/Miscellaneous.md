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

Example: `grep -R "ssh"`

output:

```
Miscellaneous.md:Example: `grep -R "ssh"`

Problem_Fixing.md:_through Secure Socket Shell(SSH)**_

Fish_Abbreviations.md:### SSH Commands

Fish_Abbreviations.md:* sr - `ssh appuser@192.168.1.230`

Fish_Abbreviations.md:* sl - `ssh appuser@192.168.1.228`
```