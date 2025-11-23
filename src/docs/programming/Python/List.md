`list` in Python

```python
a_list = [1, "ajay", true]
```

Common List operations: `append`, `insert`, `pop`, `remove`, `index`

`lst = [1]`

**append**

```python
lst = lst + [3]  # output: [1, 3]
```

**insert**

```python
def custom_list_insert(lst, index, value):
    return lst[:index] + [value] + lst[index:]

lst = custom_list_insert(lst=lst, index=1, value=2) # python indexing starts from 0

# output: [1, 2, 3]
```

**pop**

```python
def custom_list_pop(index):
    item = lst[index]
    del lst[index]
    return item

print("Original List:", lst) # output: [1, 2, 3]

# -1 index means last item; lst is not passed, but it is modified, as lists are mutable
print("Popped item: ", custom_list_pop(index=-1)) # output: 3

print("List after pop:", lst) # output: [1, 2]
```

**remove**

```python
def custom_list_remove(lst, item):
    for i, val in enumerate(lst):
        if val == item:
            lst = lst[:i] + lst[i+1:]
            return

print("Original List:", lst) # output: [1, 2]

print("Removing item (returns nothing):", custom_list_remove(lst, 2)) # output: None

print("List after remove:", lst) # output: [1, 2]
```

**index**

```python
def custom_list_index(lst, item):
    for i, val in enumerate(lst):
        if val == item:
            return i

custom_list_index(lst=lst, item=1) # output: 0    
```