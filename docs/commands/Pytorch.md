---
id: PyTorch
title: PyTorch
sidebar_label: PyTorch
---

### 1. Check if torch can find your GPU

```python
import torch; torch.cuda.is_available()
```
* It should return `True`, else torch cannot find your GPU