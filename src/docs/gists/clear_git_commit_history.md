---
id: clear_git_commit_history
title: Clear Git Commit History
sidebar_label: Clear Git Commit History
---

On you computer, go to the local repository cloned from github, which you use to push commits to github

Open the cmd of that folder and do the things below:

**Checkout to another branch named `latest_branch`**

```bash
git checkout --orphan latest_branch
```

**Add all the files**

```bash
git add -A
```

**Commit the changes**

```bash
git commit -am "commit message"
```

**Delete the branch**

```bash
git branch -D main
```

**Rename the current branch to main**

```bash
git branch -m main
```

**Finally, force update your repository**

```bash
git push -f origin main
```

PS: this will not keep your old commit history around