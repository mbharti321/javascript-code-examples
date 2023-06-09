# Getting started with creating APIS

- Introduction to RESTful API design principles
- Creating API routes with Express.js to handle different HTTP methods
- Postman for testing API

## Upload code in github repo > Self exploration

---

- https://www.postman.com/downloads/
- https://httpstatusdogs.com/

**Task 1(unit 2):** Create a calculator API

- Introduction to RESTful API design principles
- Creating API routes with Express.js to handle different HTTP methods
- Calculator API that takes three inputs as per below
- Design an API that takes three inputs: **`number1`**, **`number2`**, and **`operation`**.
- Supported operations are: addition (**`add`**), subtraction (**`sub`**), multiplication (**`mul`**), division (**`div`**), and modulo (**`mod`**).
- output response: The API should respond with a JSON object containing the input values and the result of the operation.

  ```jsx
  {
    data: {
      number1: 10,
      number2: 11,
      operation: "add",
      result: 21,
    },
  }
  ```

- Bonus:
  - Implement validation for the inputs:
    - Check if all three values are provided.
    - Validate that the operation is one of the supported operations.
  - Use appropriate HTTP response codes such as 200 for success and 400 for bad requests.

---



### **Task 2(unit 2):** Create a calculator API

- /add
- /sub
- /mul
- /div
- /mod

**Example:**
  - /add
  - **Payload**:
  - `{number1: 10, number2: 20}`

  - **Response**:
  - `{number1: 10, number2: 20, operation: "add", result:30}`




### **Task 3(unit 2):** Create a User authentication API
- User: username,password, email
- Use basic JavaScript object to save user details
- 
  - user/register
  - user/login
  - user/profile
  - user/update
  - user/delete
