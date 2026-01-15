## COUNT

COUNT(*) → counts rows
COUNT(col) → ignores NULLs

---

## ORDER BY
 
The **ORDER BY** keyword is used to sort the result-set in ascending or descending order. 

Order by contain asc and desc, for ordering the result. Default ASC 

 

**Order by on multiple columns:**

_select * from loans order by status, principal desc;_ (For each loan status, show the biggest loans first) 

_select * from loans order by principal desc, status;_ (Show me the largest loans overall, regardless of status) 

both return the same rows, but the ordering logic is different 

---

## LIKE

LIKE – case sensitive 

SELECT * FROM Customers 

WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%'); 

(Select all Spanish customers that starts with either "G" or "R") 


Wildcards: 

_ -> a single character, ex: Ajay -> like A _ _ _ , start with A then only 3 chars. 

% -> any number of characters, even zero characters.  

L% means start with L then n num of chars. 

%A means let there be n number of chars before but end with A only.  

B%s means start with B end with s 

 

_SELECT * FROM Customers WHERE Country LIKE 'Spain';_

and 

_SELECT * FROM Customers WHERE Country = 'Spain';_ => is correct 

LIKE is a smell unless wildcards are used 

---

## ILIKE

- case insensitive
- Works in databases like Postgres, but not in MySQL

ex: where region ilike '%bangalore%'

---

## NOT

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
 
---

## Aggregate functions 

Aggregate functions ignore null values (except for COUNT(*)). 

**MMCSA – Min, Max, Count, Sum, Average**

---

## JOINS 

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

---

## ALTER Table

ALTER Table – Add, Drop, Rename 

---

## SQL Constraints

* NOT NULL - Ensures that a column cannot have a NULL value 

* UNIQUE - Ensures that all values in a column are different 

* PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table 

* FOREIGN KEY - Prevents actions that would destroy links between tables 

* CHECK - Ensures that the values in a column satisfies a specific condition 

* DEFAULT - Sets a default value for a column if no value is specified 

* CREATE INDEX - Used to create and retrieve data from the database very quickly 

_website link-https://www.w3schools.com/sql/sql_constraints.asp_ 

---

## GROUP BY & HAVING

GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns. 

HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions. 

---

**CASE (WHEN ... THEN ...)**

```sql
SELECT OrderID, Quantity 
CASE 
    WHEN Quantity > 30 THEN 'The quantity is greater than 30' 
    WHEN Quantity = 30 THEN 'The quantity is 30' 
    ELSE 'The quantity is under 30' 
END AS QuantityText 
FROM OrderDetails;
```

---

## CTEs and Temporary Tables Difference:

* Storage: CTEs are not physically stored on disk, while temporary tables are. 

* Lifespan: CTEs exist only for the duration of the query execution, while temporary tables can exist beyond a single query execution.

* Management: You cannot explicitly create, alter, or drop a CTE, while you can with a temporary table.
