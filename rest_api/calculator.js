const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Calculator API Endpoint
app.post("/calculate", (req, res) => {
  // Get inputs from the request body
  const { number1, number2, operation } = req.body;

  // Check if all three values are provided
  if (!number1 || !number2 || !operation) {
    return res.status(400).json({
      error: "Please provide all three values: number1, number2, and operation",
    });
  }

  // Validate the operation is one of the supported operations
  const supportedOperations = ["add", "sub", "mul", "div", "mod"];
  if (!supportedOperations.includes(operation)) {
    return res.status(400).json({
      error:
        "Invalid operation. Supported operations are: add, sub, mul, div, and mod",
    });
  }

  let result;

  // Perform the requested operation
  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "sub":
      result = number1 - number2;
      break;
    case "mul":
      result = number1 * number2;
      break;
    case "div":
      result = number1 / number2;
      break;
    case "mod":
      result = number1 % number2;
      break;
  }

  // Prepare the response JSON object
  const response = {
    data: {
      number1,
      number2,
      operation,
      result,
    },
  };

  // Send the response
  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
