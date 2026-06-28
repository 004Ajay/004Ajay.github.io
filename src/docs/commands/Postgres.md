---
id: PostgreSQL
title: PostgreSQL
sidebar_label: PostgreSQL
---

### List column names of a table in Postgres

```sql
SELECT column_name
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'your_table_name'
ORDER BY ordinal_position;
```

_can select `data_type`, `table_name` etc. For complete list, replace `column_name` with `*`_

**psql terminal:**

```psql
\d your_table_name
```