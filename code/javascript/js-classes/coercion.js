// Declaring a defining a data type using a constructor
let newString = String("little miss");
let newNumber = Number(745);
let newArray = Array(
  "jollof rice",
  "fried rice",
  "coconut rice",
  "egg-fried rice"
);
console.log(newArray); // output: [ 'jollof rice', 'fried rice', 'coconut rice', 'egg-fried rice' ]

// using coercion, we can change the data type explicitly or implicitly
// Explicit coercion or conversion
newString = Array(newString); // this changes the data type of the variable newString from a string to an array
console.log(newString); // output: [ 'little miss' ]

// Implicit coercion
console.log(1 + "2"); //output is 12 because the + operator converts the number to a string and concatenates
console.log(3 * "22"); // output is 66 as strings can't multiply so the number data type takes precedence.
