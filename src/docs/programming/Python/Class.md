---
id: Class
title: Class
sidebar_label: Class
---

### @property 

In a class there can be methods. Some methods will have `@property` decorator.

```python
class Worker:
    name: str
    age: int
    _status: str

@property 
def is_active(self):
    return self._status
```

property decorator can be used for providing simple access to a data, which maybe hidden inside the class. 

In the above example, we can't do `obj.is_active = "IDLE"`

For that we need to add a `setter`

```python
@is_active.setter
def is_active(self, value: str) -> None:
    if value:
        self._status = value
    else:
        self._status = "IDLE"
```
