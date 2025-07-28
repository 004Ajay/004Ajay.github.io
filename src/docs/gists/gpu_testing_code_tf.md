---
id: gpu_testing_code_tf
title: GPU Testing Code TF
sidebar_label: GPU Testing Code TF
---

```python
import tensorflow as tf
from tensorflow.keras.layers import Dense
from tensorflow.keras.models import Sequential
import numpy as np
import time

start_time = time.time()

# Check if TensorFlow can access the GPU
print("Is there a GPU available: "),
print(tf.test.is_gpu_available())

print("GPU(s) available: "),
print(tf.config.list_physical_devices('GPU'))

np.random.seed(0)
X_train = np.random.rand(100, 10)
y_train = np.random.randint(0, 2, (100, 1))

with tf.device('/GPU:0'): # Change this num to switch GPU
    model = Sequential([
        Dense(64, activation='relu', input_shape=(10,)),
        Dense(64, activation='relu'),
        Dense(1, activation='sigmoid')
    ])

    model.compile(optimizer='adam',
                  loss='binary_crossentropy',
                  metrics=['accuracy'])

    model.fit(X_train, y_train, epochs=100)

end_time = time.time()
total_time = end_time - start_time
print(f"Total time taken: {total_time} seconds")
```