---
id: order_by_sql
title: Order By
sidebar_label: Order By
---

The **ORDER BY** keyword is used to sort the result-set in ascending or descending order. 

Order by contain asc and desc, for ordering the result. Default ASC 

 

**Order by on multiple columns:**

_select * from loans order by status, principal desc;_ (For each loan status, show the biggest loans first) 

_select * from loans order by principal desc, status;_ (Show me the largest loans overall, regardless of status) 

both return the same rows, but the ordering logic is different 
