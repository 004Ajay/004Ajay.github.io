---
id: multithreading_multiprocessing_async
title: Multithreading, Multiprocessing, Async
sidebar_label: Concurrency and Parallelism
---

These topics comes under the umbrella of **_Concurrency and Parallelism_**

> computer → CPU → core → process → thread → Python → multithreading | multiprocessing | Async

## High-level overview

```
Python code
   ↓
Python interpreter
   ↓
CPU instructions
   ↓
CPU core executes them
```

Modern CPU has multiple workers (cores) that executes instructions. 

Each core is capable of executing instructions independently.

<details>

<summary> Restaurant Analogy for CPU cores </summary>

A CPU is the kitchen.

Each core is a cook.

```
Kitchen (CPU)
│
├── Cook 1 (Core 1)
├── Cook 2 (Core 2)
├── Cook 3 (Core 3)
└── Cook 4 (Core 4)
```

With one cook:

```
Task A → Task B → Task C → Task D
```

With four cooks:

```
Task A → Cook 1
Task B → Cook 2
Task C → Cook 3
Task D → Cook 4
```

Now several things can genuinely happen at the same time.

</details>

---

## What is a process?

You open Chrome → OS starts a process for it.

Open VS Code → process

Run python app.py → process

> A process is a running program.

OS gives the process its own resources:

- memory
- CPU time
- file handles
- environment
- security permissions
- threads

### Why does a process need memory?

Suppose:

```python
x = 100
y = 200
z = x + y
````

A program needs memory to store things like:

```
x → 100
y → 200
z → 300
```

The process gets its own address space (its view of memory).

## What is a thread?

> A thread is a path of execution inside a process.

A mental model:

> Process = a worker's office

> Thread = a person working inside that office

One process can contain multiple threads.

```
Python Process
│
├── Thread 1
├── Thread 2
├── Thread 3
└── Thread 4
```

All these threads belong to the same process.

And importantly, they generally share the process's memory.

---

## Why do we need threads?

A Python program needs to download 3 files.

Without multiple threads:

```
Download A → wait → Download B → wait → Download C
```

But while downloading A, CPU isn't doing much.

The program is mostly waiting for the network.

So we can make use of multiple threads:

```
Thread 1 → Download A
Thread 2 → Download B
Thread 3 → Download C
```

While Thread 1 waits for the network, another thread can do useful work.

---

## Concurrency vs Parallelism

### Concurrency

Multiple tasks are in progress during the same period.

Example:

```
Task A ────────┐
               ├── CPU switches between them
Task B ────────┘
```
The operating system **rapidly switches** between them.

But they **don't execute exactly the same instant.**

```
Time →

Thread A: ███     ███     ███
Thread B:    ███     ███     ███
```

This happens extremely quickly.

To humans it can look like both are running simultaneously.

This is called **_context switching._**

﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒﹒

### Parallelism

Multiple tasks are actually executing at the same time.

```
Core 1 → Task A
Core 2 → Task B
```

This is genuine parallel execution.


> Concurrency = dealing with multiple things at once.

> Parallelism = doing multiple things at the same time.

---

### concurrency ≠ threads & parallelism ≠ multiprocessing

An important mental model:

> Concurrency and parallelism are concepts. Threads and processes are ways of implementing them.

To prove it:

### 1. Concurrency with threads

One CPU core

```
Thread A & Thread B
Time →
Core: A A A B B B A A A B B B
```

The CPU rapidly switches between them.

**That's _concurrency_, but _not true parallelism_.**


### 2. Parallelism with threads

Multiple CPU cores and a runtime that allows threads to execute CPU work simultaneously.

> _A runtime is the software environment that runs your program while it is executing._ In Python, **CPython** is the most common runtime, similarly **Java Virtual Machine (JVM)** for Java.

```
Core 1 → Thread A
Core 2 → Thread B
Core 3 → Thread C
Core 4 → Thread D
```
**That's _parallelism using threads_.**

> So, Threads can provide concurrency and potentially parallelism.

In CPython the **Global Interpreter Lock (GIL)** prevents multiple threads from simultaneously executing Python bytecode in the usual CPython build. With **Python 3.14**, CPython supports free-threaded Python, where the GIL can be disabled.


### 3. Parallelism with processes

This is the classic multiprocessing case:

```
Core 1 → Process A
Core 2 → Process B
Core 3 → Process C
Core 4 → Process D
```

**That's parallelism.**


### 4. Concurrency with processes

Even processes don't have to execute simultaneously.

With one CPU core:

```
Time →
Process A ███     ███
Process B    ███     ███
```

The OS switches between processes.

**That's concurrency without physical parallelism.**





---

< _will be continued_ >




