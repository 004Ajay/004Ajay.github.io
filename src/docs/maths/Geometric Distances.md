---
id: geometric-distances
title: Geometric Distances
sidebar_label: Geometric Distances
---

Geometric Distance Metrics

## Euclidean Distance
$$
d(p, q) = \sqrt{ \sum_{i=1}^{n} (p_i - q_i)^2 }
$$

Explanation: Measures the straight-line (as-the-crow-flies) distance between two points in Euclidean space. Common in geometry, physics, and machine learning.

## Manhattan Distance
$$
d(p, q) = \sum_{i=1}^{n} |p_i - q_i|
$$
Explanation: Also called “city block” distance. Measures total absolute differences; better for grid-based layouts.

## Minkowski Distance
$$
d(p, q) = \left( \sum_{i=1}^{n} |p_i - q_i|^r \right)^{1/r}
$$

Explanation: A generalized distance metric. When r=1r=1 → Manhattan, r=2r=2 → Euclidean.

## Cosine Distance
$$
\text{cos\_dist}(p, q) = 1 - \frac{p \cdot q}{\|p\| \|q\|}
$$

Explanation: Measures the angle between two vectors. Commonly used in NLP, recommendation systems, and text similarity.

## Hamming Distance
$$
d(p, q) = \sum_{i=1}^{n} \mathbb{1}_{p_i \neq q_i}
$$

Explanation: Counts how many positions two strings differ in. Used for binary strings, error detection/correction.