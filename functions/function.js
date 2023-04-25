/*
Defining Functions
To define a function in JavaScript, 
- function keyword 
- function name, 
- any parameters enclosed in parentheses, 
- the code block enclosed in curly 
*/

// function greet(xyz="john") {
//   console.log("Hello, " + xyz + "!");
// }

// xyz = "manish"
// greet(xyz);
// Output: Hello, John!

// // ~~~~~~~~~~~~~~~~~~~~~~~~~Function Parameters~~~~~~~~~~~~~~~~~~~~~~~~~`
function add(a, b) {
  return a + b;
}
let result = add(2, 3);
console.log(result);
// // result is now 5

// // ~~~~~~~~~~~~~~~~~~~~~~~~~Return Statements~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function multiply(a, b) {
//   return a * b;
// }

// let result2 = multiply(2, 3);
// console.log(result2);
// // result is now 6

// // ~~~~~~~~~~~~~~~~~~~~~~~~~Anonymous Function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// usecase 1
let multiplyMe = function (a, b) {
  return a * b;
};

// Call the anonymous function with arguments 2 and 3
let result3 = multiplyMe(2, 3);
console.log(result3); // Output: 6

// // usecase 2

let numbers = [1, 2, 3, 4, 5];

function multiplyByTwo(number) {
  console.log(number * 2);
}

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  multiplyByTwo(number);
}

// // Output:
// // 2
// // 4
// // 6
// // 8
// // 10

// // Replacment ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// numbers.forEach(function (number) {
//   console.log(number * 2);
// });

// // Output:
// // 2
// // 4
// // 6
// // 8
// // 10


// // ~~~~~~~~~~~~~~~~~~~~~Arrow function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let greet = (name) => {
//     console.log(`Hello, ${name}!`);
//   };