---
id: like_sql
title: Like
sidebar_label: Like
---

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
