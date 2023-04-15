// var keyword is used to declare and assign variables. It is function scoped.
var x = 5;
console.log(x); // Output: 5

// let keyword is used to declare and assign variables. It is block scoped.
let y = "hello";
console.log(y); // Output: hello

// const keyword is used to declare constants. It cannot be reassigned.
const z = true;
console.log(z); // Output: true




// global variables: by declaring them outside of any function or block scope.
// Global variable declaration
let myGlobal = "Hello, I am a global variable!";

function foo() {
  // Accessing the global variable inside a function
  console.log(myGlobal);
}

foo(); // Output: Hello, I am a global variable!

// Modifying the global variable outside of a function
myGlobal = "I have been updated!";

foo(); // Output: I have been updated!