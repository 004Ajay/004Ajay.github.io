---
id: Linux_Context_Menu_Edit
title: Linux Context Menu Editing
sidebar_label: Linux Context Menu Editing
---

### New addition in linux context menu (options that comes on right-click)

**Story:** I do 'Open with VS Code' everytime to edit, view, or inspect code. But unlike Windows, in linux, when we install VS Code this option doesn't come automatically. So we need to add it manually by editing some files. Let's go and understand which all files and what edits need to be done.

_Here I am going to add two options **Open in VS Code** (for opening a single file in VS Code) & **Open Folder in VS Code** (to open the complete parent folder of a file) --> all these are done for the current user only._

**1. Open in VS Code**

1.1. Open a terminal

1.2. Go to `~/.local/share/nautilus/scripts` and create a file named `Open in VS Code`, the name of the file will be displayed as the name of option later in the context menu.

```bash
nano ~/.local/share/nautilus/scripts/"Open in VS Code"
```

Inside the file paste:

```bash
#!/bin/bash
code "$@"
```

Save the code using `Ctrl+X` `Y` `Enter`

1.3. Now change the file to an executable using `chmod`

```bash
chmod +x ~/.local/share/nautilus/scripts/"Open in VS Code"
```

1.4. Restart the GNOME desktop environment file manager `Nautilus`

```bash
nautilus -q
```
1.5. Now go to any folder, `right-click any file` to see the option `Scripts` and inside it `Open in VS Code` 

---

**2. Open Folder in VS Code**

_I don't think you need a detailed instruction for this step, as there is a small change in the shell script only_

```bash
nano ~/.local/share/nautilus/scripts/"Open in VS Code"

#!/bin/bash

for path in "$@"; do
    if [ -d "$path" ]; then
        code "$path"
    else
        # If it's a file, open its parent directory
        code "$(dirname "$path")"
    fi
done

chmod +x ~/.local/share/nautilus/scripts/"Open in VS Code"

nautilus -q
```

That's all!!!
