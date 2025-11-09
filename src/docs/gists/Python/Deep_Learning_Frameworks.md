---
id: Deep_Learning_Frameworks
title: Deep Learning Frameworks
sidebar_label: Deep Learning Frameworks
---

#### `All commands in Windows Command Prompt, and this will work for manual Python installation only.`

## Check for GPU Physical presence:

```
nvidia-smi
```

## TensorFlow

```
import tensorflow as tf; print(tf.config.list_physical_devices())
```

This will return a list like `[PhysicalDevice(name='/physical_device:CPU:0', device_type='CPU')]`, check if GPU device is found, if yes then use the device number (ex: `CPU:0`) in code.

```python
import tensorflow as tf
tf.config.list_physical_devices('GPU')

# sample output -- [PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU'),
# PhysicalDevice(name='/physical_device:GPU:1', device_type='GPU')]
```
## PyTorch

```
import torch; print(torch.cuda.is_available())
```

This will return `True` if GPU is available, else `False`

