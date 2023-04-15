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


// Using for loop to iterate over an array
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Using while loop to iterate over a string
let str = "Hello, world!";
let j = 0;

while (j < str.length) {
  console.log(str[j]);
  j++;
}

// Using do/while loop to execute code at least once
let k = 0;

do {
  console.log("This code will execute at least once.");
  k++;
} while (k < 0);
