---
id: Rsync
title: Rsync
sidebar_label: Rsync
---

## Rsync and Parallel to copy files 

#### Lightning fast (two steps/commands)

### 1. Make a text file having path of files to be copied

```bash
find ./<folder_having_all_the_files_to_be_copied> -type f > <location_with_name_of_text_file>.txt 
```

Example command: ```find ./downloaded_files/items_to_move -type f > to_copy.txt```

<br />

### 2. Rsync with parallel processing to copy

```bash
time cat <previously_made_text_file>.txt | parallel -j <num_of_cores_to_use> -X -n 1 rsync -av --inplace {} ./<destination_folder_to_copy_the_files>
```

Example command: ```time cat to_copy.txt | parallel -j 10 -X -n 1 rsync -av --inplace {} ./Receiver/```

So you will be doing 

```bash
find ./downloaded_files/items_to_move -type f > to_copy.txt 

time cat to_copy.txt | parallel -j 90 -X -n 1 rsync -av --inplace {} ./Receiver/
```
to copy a small/huge number of files (from 1 to more than 1 Million files)

<br />

### 3. To keep the folder structure while copying (files inside different folders)

* Add `--relative` flag with the `cat` command

** `--relative` tells rsync to recreate the directory structure based on the file path

```bash
time cat to_copy.txt | parallel -j 10 -X -n 1 rsync -av --inplace --relative {} ./Receiver/
```

Command breakdown:

* `time` is used to record wall clock time, system time etc...

* `cat` reads the contents of the text file and prints it to the terminal

* `|` (Pipe symbol) takes the output of the command on the left (`cat to_copy.txt`) and feeds it as the input to the command on the right. Essentially, it’s creating a chain of commands where the output of one becomes the input of the next.

* `rsync` is the utility for synchronizing files and directories.

* `-av` is the "archive" and "verbose" option.
    * Archive maintain integrity like permissions, timestamps, and other attributes.
    
    * Verbose shows progress, which files are being transferred and any changes that are being made.

* `--inplace` tells `rsync` to modify the original file directly, rather than creating a new copy.

* `--relative` tells `rsync` to keep the directory structure as such.

* `{}` is a placeholder to substitute the name of the file being processed by `rsync`