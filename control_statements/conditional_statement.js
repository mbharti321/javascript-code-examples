// Syntax~~~~~~~~~~~~~~~~~~~~~~~
/*
    # if/else statement..............
    if (condition) {
        # // code to execute if condition is true
    }
    else {
        # // code to execute if condition is false
    }
  
    # // ternary operator..............
    condition ? valueIfTrue : valueIfFalse
*/
// Syntax End~~~~~~~~~~~~~~~~~~~~~~~

let num = 5;

// Using if/else statement to check if num is even or odd
if (num % 2 === 0) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd.");
}
num = 6;
// Using ternary operator to achieve the same result
num % 2 === 0 ? console.log(num + " is even.") : console.log(num + " is odd.");


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Real example ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let age = 20;

// Using if/else statement to check if person is eligible to vote
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("Sorry, you are not eligible to vote.");
}

// Using ternary operator to check if a person can drink alcohol
let isLegalToDrink =
  age >= 21
    ? "Yes, you can drink alcohol."
    : "Sorry, you are not legal to drink yet.";
console.log(isLegalToDrink);
