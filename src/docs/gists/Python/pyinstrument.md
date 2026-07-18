---
id: Pyinstrument
title: Pyinstrument
sidebar_label: Pyinstrument
---

Simple code to get started with `Pyinstrument`

```python
from pyinstrument import Profiler
profiler = Profiler()
profiler.start()

expensive_operation()

profiler.stop()
print(profiler.output_text())
```