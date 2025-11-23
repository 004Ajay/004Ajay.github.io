---
id: Functions
title: Functions
sidebar_label: Functions
---

```python
def __add__(self, value: int, /) -> int: ...
```

📌 `__add__`

This is the special `magic method` that implements the `+` operator.
If a class defines `__add__`, then `obj + value` calls `obj.__add__(value)`.

📌 `value: int`

This means that the `+` operator only accepts an `int` on the right-hand side.

📌 `/ (positional-only marker)`

The slash means **all parameters before it must be passed positionally.**

In this case:

* `self` (always positional)

* `value` must also be provided positionally, **not as a keyword argument.**

So this is allowed:

```python
obj + 3
obj.__add__(3)
```

But this is **not allowed**:

```python
obj.__add__(value=3)  # ❌ value cannot be keyword-only
```

📌 -> `int`

The method returns an `int`.

📌 `...`

This is a stub-style placeholder indicating “implementation omitted.”

---

## *args and **kwargs

```python
def args_kwargs(a, b, *args, **kwargs):
    print(f"a: {a}, b: {b}")
    print(f"Positional arguments (*args): {args}")
    print(f"Keyword arguments (**kwargs): {kwargs}")
    
    for key, value in kwargs.items():
        print(f"{key} = {value}")

# function call
args_kwargs(10, 20, 30, name="Alice", age=25)
```

**Output:**

```
a: 10, b: 20
Positional arguments (*args): (30,)
Keyword arguments (**kwargs): {'name': 'Alice', 'age': 25}
name = Alice
age = 25
```

* `*args` → collects extra positional arguments as a `tuple`

* `**kwargs` → collects extra keyword arguments as a `dictionary`

### * and ** to unpack arguments when calling a function (Using them in reverse)

```python
def greet(name, age, city):
    print(f"Hello, my name is {name}, I am {age} years old, and I live in {city}.")

# Using a tuple for positional args
pos_args = ("Ajay", 23, "Pala")
greet(*pos_args)  # unpacks tuple into name, age, city

# Using a dictionary for keyword args
kw_args = {"name": "Ajay", "age": 23, "city": "Bengaluru"}
greet(**kw_args)  # unpacks dict into name=..., age=..., city=...
```

**Output:**

```
Hello, my name is Ajay, I am 23 years old, and I live in Pala.
Hello, my name is Ajay, I am 23 years old, and I live in Bengaluru.
```

---

## Python Object Mutability

```python
def edit_list(lst):
    lst.append(4)
    
lt = [1,2,3]
edit_list(lt)
print(lt) # [1,2,3,4]
```
* **Lists are mutable** → their contents can be changed in place.
* The method `.append(4)` modifies the existing list object.
* Inside the function, `lst` refers to the same list object as `lt`.
* So the append operation changes the original list.

```python
def edit_tuple(tup):
    tup + (1, 2, 3)

tupl = ("a", "b" , "c")
edit_tuple(tupl)
print(tupl) # ("a", "b" , "c")
```

* **Tuples are immutable** → they cannot be changed in place.
* The expression `tup + (1, 2, 3)` **creates a new tuple**, but does **not modify** `tup`.
* We didn't assign or return this new tuple.
* So the original tuple `tupl` remains unchanged.

```python
def edit_tuple(tup):
    return tup + (1, 2, 3)

tupl = ("a", "b" , "c")
tt = edit_tuple(tupl)
print(tt) # ('a', 'b', 'c', 1, 2, 3)
```
* `tup + (1, 2, 3)` produces a new tuple.
* This time, we `return` it.
* We assigned that new tuple to `tt`, thus it contains the new expanded tuple.

⭐ Big idea

**Mutable objects (list, dict, set) change in place:**

* modifying them inside a function **affects the original object**.

**Immutable objects (tuple, str, int, float, bool) cannot change:**

* operations like `+`, `.replace()`, etc. **create new objects**.

* if you don’t assign or return the new object → original stays unchanged.