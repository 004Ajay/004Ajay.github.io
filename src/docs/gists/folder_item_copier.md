---
id: folder_item_copier
title: Folder Item Copier
sidebar_label: Folder Item Copier
---

```bat
Get-ChildItem -Path "C:\pth\to\main\folder\" -Recurse -File | Copy-Item -Destination "C:\path\to\destination\folder\" -Force
```