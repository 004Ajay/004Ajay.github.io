---
id: activation-functions
title: Activation Functions
sidebar_label: Activation Functions
---

Activation Functions

## Sigmoid
$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

Explanation: Squashes input into (0, 1). Useful in binary classification or probabilistic interpretation.

## Tanh
$$
\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

Explanation: Like sigmoid, but squashes into (-1, 1). Zero-centered.

## ReLU
$$
\text{ReLU}(x) = \max(0, x)
$$

Explanation: Fast, simple, widely used in deep learning. Outputs 0 for negative input.

## Leaky ReLU
$$
\text{LeakyReLU}(x) =
\begin{cases}
x & \text{if } x \geq 0 \\
\alpha x & \text{if } x < 0
\end{cases}
$$

Explanation: A small slope (α) for negative values avoids “dead neurons” in ReLU.

## Softmax
$$
\text{Softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{n} e^{z_j}}
$$

Explanation: Converts a vector into a probability distribution. Used in multi-class classification.