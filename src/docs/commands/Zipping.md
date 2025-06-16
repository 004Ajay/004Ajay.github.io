---
id: Zipping
title: Zipping
sidebar_label: Zipping
---

## Make Archive File (Zipping) in a lightning fast way

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

<br />

---

## Zip a folder quickly

```bash
zip -R9v <zip_filename>.zip <output_filename>
```

Example: ```zip -R9v Ajay_Archived.zip Ajay_Data```

* `R` => Recursive: zip will go through all child directories in the main directory to zip them all

* `9` => Compress Better: zip will compress the file to reduce filesize without losing file integrity

* `v` => Verbose: print details of zipping like progress, filename etc...