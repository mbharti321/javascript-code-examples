const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my RESTful API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});