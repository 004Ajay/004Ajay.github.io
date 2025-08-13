---
id: UV
title: UV
sidebar_label: UV
---

Ultra-fast python package manager   

## uv init

Create a new project.

```
uv init
```

Output (for `uv init`):
```bash
ajay@ajay:~/Desktop/Ajay$ mkdir new && cd new
ajay@ajay:~/Desktop/Ajay/new$ ls

ajay@ajay:~/Desktop/Ajay/new$ uv init <-- 'uv init' command here
Initialized project `new`

ajay@ajay:~/Desktop/Ajay/new$ ls
main.py  pyproject.toml  README.md
```

### `uv init` with a project name

```
uv init <project_name>
```

Example: `uv init main_project`

Output:
```bash
ajay@ajay:~/Desktop/Ajay/uv_cmds$ ls
main.py  pyproject.toml  README.md  uv.lock

ajay@ajay:~/Desktop/Ajay/uv_cmds$ mkdir main_project && cd main_project
ajay@ajay:~/Desktop/Ajay/uv_cmds/main_project$ ls

ajay@ajay:~/Desktop/Ajay/uv_cmds/main_project$ cd ..

ajay@ajay:~/Desktop/Ajay/uv_cmds$ uv init main_project
Adding `main-project` as member of workspace `/mnt/INTERNAL/Ajay/uv_cmds`
Initialized project `main-project` at `/mnt/INTERNAL/Ajay/uv_cmds/main_project`
```

---

## uv version

```
uv self version
```

Display uv's version

ajay@ajay:~/Desktop/Ajay/uv_cmds$ uv self version
uv 0.8.5

---

## uv venv

```
uv venv <env_name>
```

Create a virtual environment.

---

## uv tree

Display the project's dependency tree

```
uv tree
```

```bash
Resolved 11 packages in 2ms
uv-cmds v0.1.0
├── pandas v2.3.1
│   ├── numpy v2.3.2
│   ├── python-dateutil v2.9.0.post0
│   │   └── six v1.17.0
│   ├── pytz v2025.2
│   └── tzdata v2025.2
└── scikit-learn v1.7.1
    ├── joblib v1.5.1
    ├── numpy v2.3.2
    ├── scipy v1.16.1
    │   └── numpy v2.3.2
    └── threadpoolctl v3.6.0
```