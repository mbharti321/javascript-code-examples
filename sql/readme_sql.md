# Understanding SQL and executing basic CRUD operations
- Understand whats SQL and why its used
- Whats RDBMS?
- Resources: 
  - [w3schools.com/sql](https://www.w3schools.com/sql/sql_intro.asp)
  - [ChatGPT convo](https://chat.openai.com/share/4487e8c5-f8d8-46b5-9298-7b94a483a752)

You might want to use this prompt in chatGPT to learn any topic easily.
```
I'm learning {{What do you want to learn?}}
I'm totally new to it. Help me learn the topic.
Explain in detail. If its related to coding/programming, give code examples.
Use analogies and real-life examples to simplify the concept and make it more relatable.
```


## Hands-on
We will be using **Microsoft SQL Server** and **SQL Server Management Studio (SSMS)**

### Installation

- Follow this video: [Install Microsoft SQL Server 2019 & SSMS on Windows](https://youtu.be/kGdTg-vGs-E)

### Performing CRUD operations

- Create a new database as mcube_<your_name>

- CRUD operations on Employees’ table
- create a table named **`Employees`** with the following columns:
  - **`id`** (integer, primary key)
  - **`name`** (string)
  - **`department`** (string)
  - **`salary`** (decimal)


  #### Write SQL queries to perform the following CRUD operations on the **`Employees`** table:
  1. Create:
     - Write an SQL query to insert 10 new employee with the following details
  2. Read:
     - Write SQL queries to retrieve
       - all employees from the table.
       - the employee with the highest salary
       - all employees who have a salary more than the average salary.
  3. Update:
     - Update the salary of the employee with the highest salary to 6000.00.
     - sql query to update all employee salary by 10%
  4. Delete: Delete an employee with a specific name from the table.
