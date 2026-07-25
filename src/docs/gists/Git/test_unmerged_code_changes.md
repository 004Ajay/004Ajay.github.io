---
id: test_unmerged_code_changes
title: Test unmerged code changes
sidebar_label: Test unmerged code changes
---

> Q: I have new changes in my current git branch, and tests were in another branch, but both are not merged to main. I need to run the tests to check if the new changes breaks anything.

Assume:

`feature` → current branch with code changes

`tests` → another branch containing only the tests


### Option 1: If the test branch has a few commits

#### Cherry-pick the test commits

```git
git checkout feature
git cherry-pick <test_commit_hash>
```
_Thumb rule: `cherry-pick` the commits of branch whichever is lesser in count_

If there are so many commits, do squash:

```git
git cherry-pick -n <oldest-commit-hash>~1..<newest-commit-hash>
```

Run:

```python
pytest -vs /path/to/test_file.py
```

When done, if you don't want those commits (reset or discard the files):

```git
git reset --hard HEAD~1   # if it was the cherry-picked commit
```

---

### Option 2. Merge the test branch temporarily

```git
git checkout feature
git merge tests
```

Run pytest

Reset or discard the files

---

### Option 3. Stash + Checkout/Switch

```git
git stash (or VS-Code Stash)
git checkout tests
git merge feature
```

Run pytest

Reset or discard the files
