// JavaScript Assignment #1: Strings and Numbers

// String
// Create a constant variable and assign it a string literal with your name
const fullName= "Enoch Arthur-Mensah"

// Console log the length of the string
console.log(fullName.length);

// Console log the string template "Hello, my name is ____" but fill in the blank with the name variable.
let stringTemplate
stringTemplate = `Hello, my name is ${fullName}`
console.log(stringTemplate);

// Console log the string template "When my friends see me they shout ____!" 
// but fill in the blank with your name in all caps.(Use a string method to capitalize it!)
console.log(`When my friends see me they shout ${fullName.toUpperCase()}!`);


// Numbers

// Challenge 1
// Create a constant variable with a number in it. (You can choose any number, with any number of digits.)
// Multiply the number by 2
// Add 8
// Divide by 2
// Subtract the original number
// Console log the result
const number = 5550
let newNumber
newNumber=number*2
newNumber +=8
newNumber=newNumber/2
let result
result=newNumber-number
console.log(result);

// Challenge 2
// Find the area of a circle with a given radius (), rounded to four digits
// Console log the result
let area 
let radius
radius = 50
area=(radius**2*Math.PI).toFixed(4)
console.log(area);