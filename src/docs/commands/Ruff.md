---
id: ruff
title: Ruff
sidebar_label: Ruff
---

Install [RUFF](https://docs.astral.sh/ruff/):

```python
pip install ruff
```

## Linting using Ruff

### Checks file for lint:

```bash
ruff check <file path> 
```

### Apply linting to the file completely

```bash
ruff check <file path> --fix
```

### Apply linting to Imports only

```bash
ruff check --select I <file path> --fix
```

### Modify/Format the file to PEP standards

```bash
ruff format <file path>
```