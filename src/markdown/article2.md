# MySQL cheat sheet

---

### Overview

SQL is the standard language to communicate with Relational Database Systems. All the Relational Database Management Systems (RDMS) like MySQL, MS Access, Oracle, Sybase, Informix, Postgres and SQL Server use SQL as their Standard Database Language.

---

### Data Types

Data types are means to identify the type of data.

1. Numeric

- INT -- Integer data type

- TINYINT

- SMALLINT

- MEDIUMINT

- BIGINT

- FLOAT(M,D) -- Floating point data type

- DOUBLE(M,D) -- Double data type also stores decimal values

- DECIMAL(M,D) -- Decimal data type

2. Data and Time

- DATE -- Date data type (YYYY-MM-DD)

- DATETIME -- It's a date and time combination (YYYY-MM-DD HH:MM:SS)

- TIME -- It stores time (HH:MM:SS)

3. String/Text

- CHAR(M) -- Character data type

- VARCHAR(M) -- Variable character data type

- BLOB or TEXT

---

### NULL Values

If a column has no value, then it is said to be NULL

---

### Comments

A comment is a text that is not executed.

<Code language="mysql">
/_ This is a multi-line
comment in MySQL _/

# It is a single-line comment

-- It is also a single-line comment
</Code>

---

### MySQL Simple Calculations

You can perform simple calculations in MySQL, just by using the Select command, there's no
need to select any particular database to perform these commands.

Addition

- It will add two numbers
  <Code language="sql">
  Select 5+8;
  </Code>

Subtraction

- It will subtract the second number from first
  <Code language="sql">
  Select 15-5;
  </Code>

Multiplication

- It will give the product of supplied numbers
  <Code language="sql">
  Select 5\*5;
  </Code>

Division

- It will divide the number

  <Code language="sql">
  Select 24/4;
  </Code>

> - _SQL is not a case-sensitive language_

---

### Accessing Database

These commands allow one to check all the databases and tables

1. Show command

- It will show all the databases in the system
  <Code language="sql">
  Show databases;
  </Code>

- It will show all the tables in a selected database
  <Code language="sql">
  show tables;
  </Code>

2. Use command

- It will start using the specified database i.e. now you can create tables in the selected database
  <Code language="sql">
  use database_name;
  </Code>

---

### Creating tables

These commands allow you to create the table in MySQL

- Create table command

  This query is used to create a table in the selected database
  <Code language="sql">
  Create table <table-name>
  (<column_name> <data_type>,
  <column_name> <data_type>,
  <column_name> <data_type>);
  </Code>

- Insert command

  It will add data into the selected table
  <Code language="sql">
  Insert into <table_name> [<column-list>]
  Values(value1,value2,...);
  </Code>

- Inserting NULL values

  This query will add NULL value in the col3 of the selected table
  <Code language="sql">
  Insert into <table-name> (col1, col2,col3)
  Values (val1,val2,NULL);
  </Code>

- Inserting Dates

  It will add the following data into the selected column of the table
  <Code language="sql">
  Insert into <table_name> (<col_name>)
  Values ('2021-12-10');
  </Code>

---

### Select Command

A select query is used to fetch the data from the database

1. Selecting All Data

   It will retrieve all the data of the selected table
   <Code language="sql">
   Select \* From <table_name>;
   </Code>

2. Selecting Particular Rows

   It will retrieve all the data of the row that will satisfy the condition
   <Code language="sql">
   Select \* from <table_name>
   Where <condition_to_satisfy>;
   </Code>

3. Selecting Particular Columns

   It will retrieve data of selected columns that will satisfy the condition
   <Code language="sql">
   Select column1, column2 from <table_name>
   Where <condition_to_satisfy>;
   </Code>

4. DISTINCT Keyword

   It will retrieve only distinct data i.e. duplicate data rows will get eliminated
   <Code language="sql">
   Select DISTINCT <column_name> from <table_name>;
   </Code>

5. ALL Keyword

   It will retrieve all the data of the selected column
   <Code language="sql">
   Select ALL <column_name> from <table_name>;
   </Code>

6. Column Aliases

   It is used to give a temporary name to a table or a column in a table for the purpose of a
   particular query
   <Code language="sql">
   Select column1,column2 AS <new_name>
   From <table_name>;
   </Code>

7. Condition Based on a Range

   It will only retrieve data of those columns whose values will fall between value1 and value2 (both
   inclusive)
   <Code language="sql">
   Select co11, col2
   From <table_name>
   Where value1 Between value2;
   </Code>

8. Condition Based on a List
   <Code language="sql">
   Select \_ from <table_name>
   Where <column_name> IN (val1,val2,val3);
   -- Select \_ from <table_name>
   -- Where <column_name> NOT IN (val1,val2,val3);
   </Code>

9. Condition Based on Pattern Match
   <Code language="sql">
   Select col1,col2
   From <table_name>
   Where column LIKE 'Ha%';
   -- Select col1,col2
   -- From <table_name>
   -- Where column LIKE 'Ha\_\_y%';
   </Code>

10. Searching NULL

    It returns data that contains a NULL value in them
    <Code language="sql">
    Select column1, column2
    From <table_name> Where Val IS NULL;
    </Code>
