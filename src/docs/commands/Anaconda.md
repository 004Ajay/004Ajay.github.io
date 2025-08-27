---
id: anaconda
title: Anaconda / Conda
sidebar_label: Anaconda
---

**env → environment**

### 1. Create a new conda env

```bash
conda create -n env_name 
```
<br />

### 2. Conda env with specific version of Python and some libraries

```bash
conda create -n env_name python=3.11 pandas matplotlib
```

<br />

### 3. Deactivate a conda env

```bash
conda deactivate
```

<br />

### 4. Remove a conda env

```bash
conda remove -n env_name --all
```

<br />

### 5. Export conda env to a YAML File

```bash
conda env export --name <env_name> > <filename>.yml
```

* Example: `conda env export --name llm > llm.yml`

<br />


### 6. Recreate a new env from YAML File

```bash
conda env create -f <filename>.yml

```
* Example: `conda env create -f imppat_env.yml`


The above command will take the YAML Filename as env name too. If you need a specific name, use

```bash
conda env create -f <filename>.yml -n <env_name>

```

* Example: `conda env create -f env_bkup.yml -n scraper`

<br />

### 7. Skip prompts

Commands such as conda create may ask for permission, which can be accepted by typing `y / yes` in terminal, this can be bypassed by passing the `-y` flag
