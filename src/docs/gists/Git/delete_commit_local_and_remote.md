---
id: delete_commit_local_and_remote
title: Hard Delete Commit
sidebar_label: Hard Delete Commit
---

> works for both Local and Remote

### Delete the last commit locally and discard all changes

```bash
git reset --hard HEAD~1
```

### Force push the changes to update the remote repository

```bash
git push origin <branch_name> --force-with-lease
```