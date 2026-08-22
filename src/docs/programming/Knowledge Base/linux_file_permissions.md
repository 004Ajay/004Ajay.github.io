---
id: linux_file_permissions
title: Linux File Permissions
sidebar_label: Linux File Permissions
---

Every file has an **inode** which acts as its _record, containing timestamps, owner, and group information_.

**Linux permissions** are divided into three sets: **Owner, Group, and Others**. The system checks these in order; the first match wins.

*   **Read (4):** Allows looking inside the file.
*   **Write (2):** Allows modifying file content.
*   **Execute (1):** Allows running a file as a program.

| **Read**  | **Write** | **Execute** |
| :------:  | :-------: | :---------: |
|  **4**    |   **2**   |    **1**    |


*   **Chmod Numbers:** Permissions are represented by numeric values (4, 2, 1) that add up to a digit (e.g., 7 is `read + write + execute`). 

* Common modes include `755 for programs` and `644 for standard files`.

*   **Directory Permissions:** Directories function as tables of contents. 
    *   **Read** lets you list contents (`ls`).
    *   **Execute** is the permission to **enter** or traverse a directory.
    *   **Write** permits adding or deleting files within that directory. This explains why you can delete a file you cannot read: you are modifying the directory's list, not the file itself.

*   **Troubleshooting Script Execution (If a script fails to execute)** 

* check the **execute bit**
* directory path permissions
* the presence of a **shebang** (e.g., `#!/bin/bash`), and 
* verify the interpreter path.

**Special Bits**

    *   **Setuid:** Allows a program to run with the privileges of the file owner (e.g., `passwd`).
    *   **Setgid:** Useful for shared directories; new files inherit the group of the directory.
    *   **Sticky Bit:** Prevents users from deleting files owned by others in a shared directory like `/tmp`.

**Common Patterns**

    *   `600`: Private keys and secrets.
    *   `755`: Standard scripts and binaries.
    *   `1777`: Shared public upload folders (sticky bit enabled).
    *   `2775`: Shared team folders with Setgid.