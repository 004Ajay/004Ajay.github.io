---
id: Vannilla_Transformers
title: Vannilla Transformers
sidebar_label: Vannilla Transformers
---

The encoder stack consists of layers each of which encodes the input, normalizes it, carries out Multihead attention (to identify contextual dependencies), and then passes these vectors through a fully connected network until the output of the final ecoder layer is concatenated to the decoder input. The decoder stack consists of another set of feed-forward networks responsible for next-token prediction.