// Syntax~~~~~~~~~~~~~~~~~~~~~~~
/*
    #// 1. for loop.................
    for (initialization; condition; increment/decrement) {
        // code to execute repeatedly while condition is true
    }

    #// 2. while loop.................
    while (condition) {
        // code to execute repeatedly while condition is true
    }

    #// 3. do/while loop.................
    do {
        // code to execute at least once, then repeatedly while condition is true
    } while (condition);

*/
// Syntax End~~~~~~~~~~~~~~~~~~~~~~~


// // Using for loop to iterate over an array
// let arr = [1, 2, 3, 4, 5];
// // let arr = [1, 2, 3, 4, 5, "i", "am", "an", "array", true, [1,3,5]];
// let i = 0
// for (i; i < arr.length; i--) {
//   console.log("arr[",i,"]:", arr[i]);
// }

// // Using while loop to iterate over a string
// let str = "Hello, world!";
// let j = 0;

// while (j < str.length) {
//   console.log(str[j]);
//   j++;
// }

// // infinite loop
// while (true) {
//   console.log("hello, im infinite looooooooooooop");
// }
// // Using do/while loop to execute code at least once
let k = 0;

do {
  console.log("This code will execute at least once.");
  k++;
} while (k < 10);

// // real world example
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (isNaN(userInput) || userInput < 1 || userInput > 10);

console.log("You entered: " + userInput);

