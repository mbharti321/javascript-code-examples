// creating object #####################################
// way1
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// way2
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

let person1 = new Person("John", 30, "New York");
let person2 = new Person("Jane", 25, "San Francisco");

// Accessing object properties #####################################
// dot notation
console.log(person.name); // "John"
console.log(person.age); // 30
console.log(person.city); // "New York"

// bracket notation
console.log(person["age"]); // 30

let propName = "age";
console.log(person[propName]); // 30

// Manipulating objects #################################
// add
person.job = "programmer";
// update
person.age = 35;
person["city"] = "Boston";

// detete
delete person.job;
console.log(person.job); // Output: undefined



// how to get count of all properties?
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(Object.keys(person));
console.log(Object.keys(person).length);