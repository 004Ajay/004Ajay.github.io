---
id: adding_git_hook
title: Adding a Git Hook
sidebar_label: Adding a Git Hook
---

**This is a Git Pre-Commit Hook**

## Issue 

I was facing an issue with my `Docusaurus GitHub Pages workflow` where I would edit or add files, commit them, and push to GitHub, but often forget to run `npm run build` beforehand. Since Docusaurus generates the actual website into the `docs/` directory, this meant my source changes could be pushed while the generated website was still outdated. I would then have to run the build afterward, stage the generated `docs/` changes, amend the previous commit (`git commit --amend --no-edit`), and force-push (`git push --force-with-lease`). 

I wanted to automate this using a Git `pre-commit` hook so that the build happens automatically before committing when necessary, while also skipping the build if the existing `docs/` build is already up to date, avoiding unnecessary build time. This should also work when committing and pushing through VS Code's Source Control UI.

## Solution

I automated the build using a Git pre-commit hook.

1. Open the pre-commit hook page

```
nano .git\hooks\pre-commit
```

2. Add this script to the editor

<details>
<summary>See the script</summary>

```bash
#!/bin/sh

echo "Checking whether Docusaurus build is needed..."

ROOT_DIR="$(git rev-parse --show-toplevel)"
SRC_DIR="$ROOT_DIR/src"
BUILD_DIR="$ROOT_DIR/docs"

# Find the newest modification time among source files.
LATEST_SOURCE=$(find "$SRC_DIR" \
    -type f \
    ! -path "$SRC_DIR/node_modules/*" \
    ! -path "$SRC_DIR/.docusaurus/*" \
    ! -path "$SRC_DIR/build/*" \
    -printf '%T@\n' 2>/dev/null |
    sort -n |
    tail -1)

# Find the newest modification time among generated files.
LATEST_BUILD=$(find "$BUILD_DIR" \
    -type f \
    -printf '%T@\n' 2>/dev/null |
    sort -n |
    tail -1)

# If no build exists, force a build.
if [ -z "$LATEST_BUILD" ]; then
    echo "No existing build found. Building..."
    NEED_BUILD=1

# If source is newer than build, rebuild.
elif [ -n "$LATEST_SOURCE" ] && \
     awk "BEGIN {exit !($LATEST_SOURCE > $LATEST_BUILD)}"; then
    echo "Source files changed after the last build."
    NEED_BUILD=1

else
    echo "Build is already up to date. Skipping build."
    NEED_BUILD=0
fi

if [ "$NEED_BUILD" -eq 1 ]; then
    cd "$SRC_DIR" || exit 1

    npm run build

    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Docusaurus build failed."
        echo "Commit aborted."
        exit 1
    fi

    echo "✅ Docusaurus build succeeded."
fi

# Stage generated site.
cd "$ROOT_DIR" || exit 1
git add docs

echo "✅ Pre-commit checks completed."
exit 0

```
</details>

3. Make the file executable

```bash
chmod +x .git/hooks/pre-commit
```

The commit process becomes:

```bash
git commit
    │
    ▼
pre-commit hook
    │
    ├── npm run build
    │
    ├── build fails → ❌ no commit
    │
    └── build succeeds
             │
             ▼
          git add docs
             │
             ▼
          commit source + generated site
```

## Output

```bash
>git add .

>git commit -m "docs: add xyz"

Checking whether Docusaurus build is needed...
Source files changed after the last build.

> my-website@0.0.0 build
> docusaurus build --out-dir ../docs


[INFO] [en] Creating an optimized production build...
"local\path\src\blog".
● Client █████████████ (100%) emitting after emit
● Server █████████████ (100%) emitting after emit

[SUCCESS] Generated static files in "..\docs".
[INFO] Use `npm run serve` command to test your build locally.
✅ Docusaurus build succeeded.

... git checks ...

✅ Pre-commit checks completed.

[main 92fc4b9] docs: add xyz
 100 files changed, 520 insertions(+), 102 deletions(-)
 create mode 100633 ...

```

## Some ChatGPT content

### Pros and Cons of Pre-Commit Hook

| Aspect                                 | Pre-Commit Hook                                                                                                               | Alternative / Better Solution                                                                                                        |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **What it solves**                     | Automatically runs checks/build steps before a commit is created. Prevents you from committing incomplete or invalid changes. | CI/CD can perform the same validation after the code reaches the remote.                                                             |
| **Your Docusaurus case**               | Excellent fit: check whether `docs/` is stale, build if necessary, and stage the generated files before the commit.           | GitHub Actions is cleaner if you can change your deployment architecture and stop committing `docs/`.                                |
| **Main advantage**                     | **Immediate feedback.** You find the problem on your machine before pushing.                                                  | CI gives centralized validation that applies to everyone.                                                                            |
| **Prevents bad commits?**              | **Yes.** A failing hook can abort the commit.                                                                                 | CI can reject/fail the PR, but the bad commit has already reached the remote.                                                        |
| **Performance**                        | Can slow down every commit if the hook runs expensive operations.                                                             | CI moves expensive work away from your local workflow.                                                                               |
| **Your optimization**                  | Your timestamp check avoids unnecessary Docusaurus builds when `docs/` is already newer than the source.                      | CI can build every time because the build happens on a server.                                                                       |
| **Works with VS Code?**                | **Yes.** Normal VS Code Git commits trigger Git hooks.                                                                        | CI is independent of the editor.                                                                                                     |
| **Works for every developer?**         | **Not automatically.** `.git/hooks/` is not tracked by Git, so another developer cloning the repository won't get your hook.  | Use a version-controlled hook manager such as Husky, or configure the repository to use a tracked hooks directory.                   |
| **Can be bypassed?**                   | Yes. `git commit --no-verify` bypasses the hook.                                                                              | CI cannot normally be bypassed by an individual developer.                                                                           |
| **Security / correctness**             | Good for developer workflow, but **not a security boundary** because hooks can be skipped.                                    | CI should be the final authority for mandatory checks.                                                                               |
| **Best use cases**                     | Formatting, linting, unit tests, generated-file synchronization, validating configuration, preventing accidental commits.     | Heavy integration tests, deployment, production builds, security scans → CI/CD.                                                      |
| **Bad use case**                       | Very slow operations that make every commit painful.                                                                          | Move those operations to `pre-push` or CI.                                                                                           |
| **Pre-commit vs pre-push**             | Best when the repository should never contain a commit that violates the check.                                               | `pre-push` is better when the check is expensive and you only care before sharing changes.                                           |
| **Pre-commit vs CI**                   | Pre-commit improves **developer experience**.                                                                                 | CI provides **team-wide enforcement**.                                                                                               |
| **Generated `docs/` committed to Git** | Works well with your current architecture. The hook can build and stage `docs/` automatically.                                | Cleaner architecture: don't commit generated `docs/`; let GitHub Actions build and deploy Docusaurus.                                |
| **Maintenance**                        | You now have workflow logic hidden in a shell script that must be maintained.                                                 | GitHub Actions makes the build/deployment process explicit and version-controlled.                                                   |
| **Overall for your current repo**      | **Good short-term solution.** It directly fixes your “forgot to build” problem with minimal changes.                          | **GitHub Actions + generated deployment is the better long-term architecture** if you're willing to change how the site is deployed. |

> Pre-commit is a convenience mechanism; CI is the enforcement mechanism.

### When should you use a pre-commit hook?

| Situation                                         | Use Pre-Commit? | Reason                                           |
| ------------------------------------------------- | :--------------: | ------------------------------------------------ |
| Run `black` / `ruff` / formatting                 |               ✅ | Fast and local                                   |
| Run basic linting                                 |               ✅ | Immediate feedback                               |
| Check secrets accidentally added                  |               ✅ | Catch before commit                              |
| Validate JSON/YAML/config                         |               ✅ | Cheap and useful                                 |
| Generate files that **must accompany the commit** |               ✅ | Exactly your Docusaurus situation                |
| Run a 2-minute test suite                         |              ⚠️ | Consider pre-push instead                        |
| Run integration tests requiring Docker/services   |               ❌ | Too expensive for every commit                   |
| Deploy to production                              |               ❌ | CI/CD is more appropriate                        |
| Security scanning                                 |              ⚠️ | Fast scans locally; comprehensive scans in CI    |
| Build a large frontend                            |              ⚠️ | Use caching/change detection, or move to CI      |
| Enforce rules across an entire team               |              ⚠️ | Hook + CI is better; hooks alone can be bypassed |
