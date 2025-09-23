---
id: Percentiles
title: Percentiles
sidebar_label: Percentiles
---

Percentiles

Let the data be [4000, 500, 6000, 7000, 7500, 8000, 10000000] ; length of this data is 7

## 25th Percentile  

Rank = (Percentile / 100) x (number of items + 1)

=> 25 / 100 * (7 + 1) = 2

So the 2nd value in the data is the 25th percentile.

## 50th Percentile

**Median** is the 50th Percentile. To the left and right of median there are half of the data.

## 75th Percentile

Rank = (Percentile / 100) x (number of items + 1)

=> 75 / 100 * (7 + 1) = 6

So the 6th value in the data is the 75th percentile.

**The range between 25th and 75th percentile is called _Interquartile Range_**


## 100th Percentile

Last value in the dataset. Its the 100% or final value in the data.

---

## Python Code

```python
df.<col_name>.quartile()
```
If you pass 0, then it is 0th Percentile, if you pass 1, then it is 100th Percentile, likewise 0.25 for 25th, 0.5 for 50th, and 0.75 for 75th.

---

## REF: 

* [Codebasics Maths Playlist](https://www.youtube.com/playlist?list=PLeo1K3hjS3uuKaU2nBDwr6zrSOTzNCs0l)

* [statisticshowto.com](https://www.statisticshowto.com/)