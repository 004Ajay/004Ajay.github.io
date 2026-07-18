---
id: file_hash
title: File Hash in Linux
sidebar_label: File Hash
---

### Check hash of a file

```bash
sha256sum filename.ext
```

---

### Compare hashes of two files in terminal

```bash
diff <(shasum -a 256 file1.txt) <(shasum -a 256 file2.txt)
```

- If the files match, the terminal outputs nothing.
- If they differ, the terminal prints the mismatch.

> Note: The command will show the diff of hash and filename even though the content is same, this is because filenames are included in the command output. If you don't want that output, use:

```bash
diff <(shasum -a 256 complianceStructure.json | awk '{print $1}') <(shasum -a 256 complianceStructureForTestOnly.json | awk '{print $1}')
```