const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Create MySQL connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test_database",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});


// API defination
app.get("/", function (req, res) {
  let sql = "SELECT * FROM employees";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
