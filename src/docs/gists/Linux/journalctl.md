---
id: journalctl
title: journalctl
sidebar_label: journalctl
---

### Complete journal log

```bash
journalctl -u service_name
```

### Live Logs

```bash
journalctl -u service_name -f
```

### See last n lines

```bash
journalctl -u service_name -n 100
```
