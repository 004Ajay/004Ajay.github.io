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
