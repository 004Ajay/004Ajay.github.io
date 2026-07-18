---
id: not_sql
title: Not
sidebar_label: Not
---

```sql
SELECT * FROM Customers 
WHERE NOT Country = 'Spain'; 
```
 
```sql
SELECT * FROM Customers 
WHERE CustomerID NOT BETWEEN 10 AND 60; 
```
 
```sql
SELECT * FROM Customers 
WHERE City NOT IN ('Paris', 'London'); 
```
