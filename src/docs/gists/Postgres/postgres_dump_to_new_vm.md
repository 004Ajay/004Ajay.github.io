---
id: postgres_dump_to_new_vm
title: Postgres Dump to New VM
sidebar_label: Postgres Dump to New VM
---

**PostgreSQL Dump & Restore on Another VM**

### 1. Create the PostgreSQL dump

Create a custom-format dump using `pg_dump`:

```bash
pg_dump -h localhost -p 5432 -U postgres -d some_db -Fc -f some_db.dump
```

Because `-Fc` is used, restore the dump with **`pg_restore`**, not `psql`.

---

### 2. Drop the existing database on the target VM

If the database is being replaced completely, make sure you didn't selected any db:

```bash
psql -U postgres
```

If you're on a db, then switch to another db:

```sql
\c postgres
```

If PostgreSQL reports that the database is being accessed by other users, terminate those connections:

```sql
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'some_db'
  AND pid <> pg_backend_pid();
```

Then drop the database:

```sql
DROP DATABASE some_db;
```

---

### 3. Recreate the database

From the VM terminal:

```bash
createdb -h localhost -p 5432 -U postgres some_db
```

Alternatively:

```bash
psql -U postgres -d postgres -c "CREATE DATABASE some_db;"
```

---

### 4. Restore the dump

Restore the custom-format dump using `pg_restore`:

```bash
pg_restore -h localhost -p 5432 -U postgres -d some_db some_db.dump
```

---

### 5. Verify the restore

Connect to the restored database:

```bash
psql -U postgres -d some_db
```

List tables and their sizes:

```sql
\dt+
```

Check the data in a table:

```sql
SELECT COUNT(*) FROM some_table;
```

---

### Complete workflow

If the target database is being completely replaced, the overall process is:

```bash
# Create the dump on the source VM
pg_dump -h localhost -p 5432 -U postgres -d some_db -Fc -f some_db.dump

# On the target VM, recreate the database
createdb -h localhost -p 5432 -U postgres some_db

# Restore the dump
pg_restore \
  -h localhost \
  -p 5432 \
  -U postgres \
  -d some_db \
  some_db.dump
```

Then verify:

```bash
psql -U postgres -d some_db
```

```sql
\dt+
SELECT COUNT(*) FROM some_table;
```

> **Note:** If the target database already exists and you only want to load the data while keeping its existing schema, use `pg_restore --data-only` instead.
