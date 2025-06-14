---
id: Lightning Fast
title: Lightning Fast
sidebar_label: Lightning Fast
---

### Zipping Files

#### Make Archive File (Zipping) in a lightning fast way

```bash
tar -I pigz -cvf archive_name.tar.gz ./folder/or/file/to/be/archived
```

Example command: ```tar -I pigz -cvf V_archive.tar.gz ./Our_Backup```
	
* `tar` => standard archiving utility that bundles files into one file (usually with a .tar extension).
	
* `-I pigz` => tells tar to use pigz as the compression program instead of gzip.
	* `pigz` stands for "parallel implementation of gzip" — it's much faster because it uses multiple CPU cores.

* `-c` => create a new archive.

* `-v` => verbose — show the progress (list the files as they are archived).

* `-f` => specifies the output filename of the archive you're creating, here it is `V_archive.tar.gz`

---

### dd command to copy files

#### Copy Files Faster using `dd` command in a lightning fast way

***This command is risky, use when you need to move big files***

```bash
dd if=<path_of_current_file_to_be_copied> of=<path_of_destination> bs=64M iflag=direct oflag=direct status=progress
```

Example: ```dd if=./archive.tar.gz of=/user/Ajay/Backups bs=64M iflag=direct oflag=direct status=progress```
		
Output:	

	369574572157 bytes (370 GB, 344 GiB) copied, 28118 s, 13.1 MB/s
	5507+1 records in
	5507+1 records out
	369574572157 bytes (370 GB, 344 GiB) copied, 28118.3 s, 13.1 MB/s

---

### Move anything in the current directory

#### Move anything in the current directory in a lightning fast way

```bash
find . -maxdepth 1 -mindepth 1 -name <filename_of_file_to_be_moved> -print0 | parallel -0 mv -v {} <destination_to_move_the_file>
```

Example: `find . -maxdepth 1 -mindepth 1 -name new_BkUp.tar.gz -print0 | parallel -0 mv -v {} ./Backups/`

Output:
		
	renamed './new_BkUp.tar.gz' -> './Backups/new_BkUp.tar.gz'
		
* Basically it searches the current directory for the file `new_BkUp.tar.gz` and then uses Parallel utility to move files using multiple cores to `Backups` folder 

---

### Total number of items in a directory

#### Get total number of items in a lightning fast way
	
In a directory
	
```bash
ls | wc -l
```

In a file
	
```bash
ls | wc <filename>.<file extension> -l
```

Example command: `ls | wc all_id_paths.txt -l`
	
		Output:

		3876693 all_id_paths.txt

---

### Moving random files

#### Move random files from one folder to another in a lightning fast way

```bash
find sup_all_csv_copy/ -type f -print0 | shuf -zn 100 | parallel -0 -j 80 cp "{}" new
```

---

### Cut and paste n number of lines from a file

```bash
head -n num_of_files input.txt > output.txt
```

Example: `head -n 200 prop.txt > prop_copy.txt`