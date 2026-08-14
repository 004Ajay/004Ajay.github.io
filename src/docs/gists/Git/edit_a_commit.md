---
id: edit_a_commit
title: Edit a Commit
sidebar_label: Edit a Commit
---

**Edit a commit (latest or old) to insert something extra and safely push**

> NOTE: As a thumb rule `it's recommended to edit commits on you own branch`, if someone else is co-working on the same branch, then do these with caution.

### Add a change to the last commit

1. Make your code changes:

```bash
nano path/to/file
```

2. Check what changed:

```bash
git status
```

```bash
git diff <file_path>
```

3. Stage the changes:

```bash
git add path/to/file
```

4. Replace/update the latest commit while keeping its message:

```bash
git commit --amend --no-edit
```

To edit the commit message, use:

`git commit --amend -m "new commit message"`

5. Verify the amended commit:

```bash
git status
```

```bash
git log --oneline --decorate -5
```

6. Confirm exactly what differs from the remote

7. Safely overwrite the remote version of the amended commit:

```bash
git push --force-with-lease origin branch-name
```

_Why `--force-with-lease`: If a coworker pushes new commits to the same remote branch while you are working, a standard `--force` push will blindly overwrite and permanently erase their changes._

8. Check the remote to see new changes

---

### Editing an Older (Deep) Commit

1. Start an interactive rebase counting back the number of commits (eg: last 3 commits):

```bash
git rebase -i HEAD~3
```

This will open an editor like `Nano`

2. Change the word `pick` to `edit` next to the target commit.

3. Save and exit the editor

4. Do your file changes, then run:

4.1. Stage the changes:

```bash
git add <file>
```

4.2. Incorporate the changes into the older commit:

```bash
git commit --amend
```

4.3. Complete the rebase process:

```bash
git rebase --continue
```

4.4. Push the changes to remote

```bash
git push --force-with-lease origin branch-name
```

---

### Already edited, not commited, add to older commit

1. Stash your current uncommitted changes:

```bash
git stash
```

2. **Follow the step in `Editing an Older (Deep) Commit` from 1 to 3**

3. Pop your stashed changes back:

If the stashed item was the last in.

```bash
git stash pop
```
If there more stashes on top of stash you required, then use `git stash list` to get the number of stash, which look like `stash@{2}` then the command will be like git `stash pop stash@{2}`.

4. Stage the changes:

```bash
git add <file>
```

5. Incorporate the changes into the older commit:

```bash
git commit --amend --no-edit
```

6. Complete the rebase process:

```bash
git rebase --continue
```

7. Push the changes to remote (now the hash of commit in local and remote is changed)

```bash
git push --force-with-lease origin branch-name
```
