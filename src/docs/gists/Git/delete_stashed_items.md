---
id: delete_stashed_items
title: Delete stashed items
sidebar_label: Delete stashed items
---

### Delete single item

```bash
git stash drop
```

### Delete everything from stash

```bash
git stash clear
```

### Delete a Specific Stash Item

View your saved stashes:

```bash
git stash list
```

Identify the stash ID, which looks like `stash@{0}`, `stash@{1}`, etc.

```bash
git stash drop stash@{1}
```
