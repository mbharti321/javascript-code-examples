// Syntax~~~~~~~~~~~~~~~~~~~~~~~
/*
    switch (expression) {
        case value1:
            // code to execute if expression matches value1
            break;
        case value2:
            // code to execute if expression matches value2
            break;
        case ....:
            // code to execute if expression matches value2
            break;
        ...
        ...
        ...
        default:
            // code to execute if expression doesn't match any of the values
    }

*/
// Syntax End~~~~~~~~~~~~~~~~~~~~~~~


//  ~~~~~~~~~~~~~ if/else if/else ~~~~~~~~~~~
// var dayOfWeek = "Monday";

// if (dayOfWeek === "Monday") {
//   console.log("Time to go to work!");
// } else if (dayOfWeek === "Tuesday") {
//   console.log("Time to go to work!");
// } else if (dayOfWeek === "Wednesday") {
//   console.log("Time to go to work!");
// } else if (dayOfWeek === "Thursday") {
//   console.log("Time to go to work!");
// } else if (dayOfWeek === "Friday") {
//   console.log("Time to go to work!");

// } else if (dayOfWeek === "Saturday") {
//   console.log("Enjoy your weekend!");
// } else if (dayOfWeek === "Sunday") {
//   console.log("Enjoy your weekend!");

// } else {
//   console.log("Invalid day.");
// }
//  ~~~~~~~~~~~~~END: if/else if/else ~~~~~~~~~~~




// // //  ~~~~~~~~~~~~~ if/else if/else with ||~~~~~~~~~~~
// var dayOfWeek = "Monday";

// if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
//   console.log("Time to go to work!");
// } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
//   console.log("Enjoy your weekend!");
// } else {
//   console.log("Invalid day.");
// }

// // //  ~~~~~~~~~~~~~END: if/else if/else with || ~~~~~~~~~~~




// //....................... Switch case .....................
let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Time to go to work!");
    var my_var = "10"
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy your weekend!");
    break;
  default:
    console.log("Invalid day.");
    break;
}

console.log(my_var)