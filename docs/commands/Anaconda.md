---
id: anaconda
title: Anaconda / Conda
sidebar_label: Anaconda
---

### 1. Create a new conda environment

```bash
conda create -n env_name 
```
<br />

### 2. Conda environment with specific version of Python and some libraries

```bash
conda create -n env_name python=3.11 pandas matplotlib
```

<br />

### 3. Deactivate a conda environment

```bash
conda deactivate
```

<br />

### 4. Remove a conda environment

```bash
conda remove -n env_name --all
```

<br />

### 5. Export conda environment to a YAML File

```bash
conda env export --name <env_name> > <filename>.yml
```

* Example: `conda env export --name llm > llm.yml`

<br />

### 6. Skip prompts

Commands such as conda create may ask for permission, which can be accepted by typing `y / yes` in terminal, this can be bypassed by passing the `-y` flag 
