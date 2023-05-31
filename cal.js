const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/calculator', (req, res) => {
  const { number1, number2, operation } = req.body;

    // ! not
    // || or
    // && and
    //   if (!Null || !Null || !Null) > True
    //   if (!True || !Null || !Null) > True
    //   if (!True || !True || !Null) > True
    //   if (!True || !True || !True) > False

  if (!number1 || !number2 || !operation) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  //myArray = [number1, number2, operation]
  //myArray.includes
  const supportedOperations = ['add', 'sub', 'mul', 'div', 'mod'];
  if (!supportedOperations.includes(operation)) {
    return res.status(400).json({ error: 'Invalid operation' });
  }

  let result;


  switch (operation) {
    case 'add':
      result = number1 + number2;
      break;
    case 'sub':
      result = number1 - number2;
      break;
    case 'mul':
      result = number1 * number2;
      break;
    case 'div':
      result = number1 / number2;
      break;
    case 'mod':
      result = number1 % number2;
      break;
  }

  res.status(200).json({
    data: {
      number1,
      number2,
      operation,
      result,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*{
  data: {
    number1: 10,
    number2: 11,
    operation: "add",
    result: 21,
  },
}*/