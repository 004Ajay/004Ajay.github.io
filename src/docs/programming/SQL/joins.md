---
id: joins_sql
title: Joins
sidebar_label: Joins
---

```sql
SELECT column_name(s) 
FROM table1 
INNER / LEFT / RIGHT JOIN table2 
ON table1.column_name = table2.column_name; 
```

Buggy: This kills the LEFT JOIN.

```sql
LEFT JOIN payments p ON p.transaction_id = t.id
WHERE p.status = 'SUCCESS';
```

Correct: 

```sql
LEFT JOIN payments p
  ON p.transaction_id = t.id
 AND p.status = 'SUCCESS';
```
