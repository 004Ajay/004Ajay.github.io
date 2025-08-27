---
id: delete files
title: Deleting Files
sidebar_label: Deleting Files
---

## Delete huge number of files in minutes/hours

```bash
find /path/to/folder/having/all/files -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rvf
```

Example: `find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rvf`

Command Explanation:

* `find ./seq/` => combining the find command with GNU Parallel to run rm (remove) in parallel on each immediate subfolder or file inside `./seq`

* `-mindepth 1` => skip the top-level directory (here, `./seq/`), and only return things inside it. So, if `./seq/` contains folder1, folder2, etc., those are the targets.

* `-maxdepth 1` => only look at immediate children (1 level deep), not recursively. So you get only (`./seq/folder1`, `./seq/folder2`, `./seq/file1.txt`)… not files inside those folders.

* `-print0` => outputs each result terminated with a null character (`\0`) instead of a newline. Because filenames can contain spaces, newlines, or other weird characters. Using `-print0` makes sure they're passed safely to the next command.

* `| parallel -0` => puts the null-separated results to GNU parallel (which uses multiple CPU cores). The `-0` tells parallel to expect input to be null-separated (to match `-print0`). This avoids filename issues, same as above.

* `rm -rvf` => this is the command parallel runs on each item it receives.

    * `rm`: remove files/directories.

    * `-r`: recursive – delete folders and everything inside.

    * `-v`: verbose – print what’s being deleted (this slows down the command a little bit).

    * `-f`: force – ignore errors, don't prompt for confirmation.

So for each item, parallel runs something like:

```bash
rm -rvf ./seq/folder1
rm -rvf ./seq/file2
```
…simultaneously across multiple CPU cores.

<br />

### Even More Speed

* Drop the -v flag:

```bash
find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rf
```

* Use `--jobs N` to control how many processes run at once (Example, use 8 cores):

```bash
... | parallel -0 -j 8 rm -rf
```

<br />

#### Make parallel to utilize all the available cores/thread for max speed

* GNU parallel is smart enough to auto-detect the number of CPU cores

```bash
find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 rm -rf
```

* Use as many jobs as your system can handle (nproc cores, by default).
	
* Avoid output clutter (no -v).
	
* Delete in blazing-fast parallel, safely.

* Use total number of CPU in your system directly

> use `nproc` command to find total number of CPU in your system

<br />

### Squeeze every ounce of Speed

```bash
find ./seq/ -mindepth 1 -maxdepth 1 -print0 | parallel -0 -j "$(nproc)" rm -rf
```

#### Or hardcode after executing `nproc` in terminal:

```bash
... | parallel -0 -j 96 rm -rf
```
