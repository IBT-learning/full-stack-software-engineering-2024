# Databases

A database is both a collection of data, and a framework for interacting with that data.

Web apps rely on databases to store information about users, app data, and whatever information the app needs to make updates to. If you can do CRUD operations on it, it's almost certainly stored in a database.

The two main types of DB are:

- relational / SQL
- non-relational / NoSQL

## Relational databases

Sort of like a spreadsheet! Columns (or "fields") describe what the information is, and "rows" are single entries. A DB is a collection of tables, each table has its own schema. The schema sets requirements for what information can be stored in each table.

Relational DBs can be interacted with using SQL, Structured Query Language. It's a language that talks to the database, performing both read and write opertions.

## Non-relational databases

Less strict, less structured, more performant, more flexible. We can still define schemas, but there is less built-in enforcement.

A DB is a set of collections, and collections are sets of documents. (A collection is analogous to a table, a document is analagous to a row or entry. The equivalent of a "field" would just be an object key.)

Rather than using SQL to query the DB, we will use tooling provided by the database framework, in this case MongoDB.

## Pros and Cons

- NoSQL is immune to SQL injection attacks (see little Bobby Tables)
- NoSQL is faster and more performant
- NoSQL is more flexible

- SQL databases provide more structure and data safety / data quality
- SQL databases come with a standard query language, SQL!
- NoSQL is newer technology, so less mature. There's less support, less tooling, less standardization, fewer experts, etc.
