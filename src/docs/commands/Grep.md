---
id: grep
title: grep in Bash
sidebar_label: Grep
---



## grep with context

```bash
grep -B 10 -A 10 "Refresh" structure.json
```

Here `-B = before`, `-A = after`.

```bash
grep -C 10 "Refresh" structure.json
```

`-C 10` → shows 10 lines before and 10 lines after the matching line.

---

## grep all files in a directory

```bash
grep -n "a word" *
```

To search recursively (including subdirectories):

```bash
grep -Rni "a word" *
```

---

## Useful Extra Options

Only certain files:

```bash
grep -ni "a word" *.log
```

Show filename + line number + matching line:

```bash
grep -Hn "a word" *
```

Case-insensitive search:

```bash
grep -Hin "a word" *
```

If some files are binary (to get rid of noisy output):

```bash
grep -HinI "a word" *
```

---

| Flag | Meaning                 | What it does                                                                |
| ---- | ----------------------- | --------------------------------------------------------------------------- |
| `-H` | **With filename**       | Always prints the filename where the match was found                        |
| `-i` | **Ignore case**         | Matches `a word`, `A Word`, `A WORD`, etc. |
| `-n` | **Line number**         | Shows the line number containing the match                                  |
| `-I` | **Ignore binary files** | Skips files that `grep` considers binary                                    |
| `*`  | **Wildcard**            | Passes all files in the current directory to `grep`                         |


---


## Search a term in any files on a folder

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

Example:

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
