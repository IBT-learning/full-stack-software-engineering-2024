// Numbers
// Challenge 1:
// Create a constant variable with a number in it. (You can choose any number, with any number of digits.)
// Multiply the number by 2
// Add 8
// Divide by 2
// Subtract the original number
// Console log the result
// The result should be 4
// Tips:

// You can use any number of variables to do this, but you only need one or two!
// If you choose to combine operations within a single line, don't forget about mathematical order of operations

const num = 201;
const num2 = num * 2;
const num3 = num2 + 8;
const num4 = num3 / 2;
const num5 = num4 - num;

const result = num5;
console.log(result); //4

const newNum = 50;
console.log((newNum * 2 + 8) / 2 - newNum); //4

// Challenge 2:
// Find the area of a circle with a given radius (), rounded to four digits
// Console log the result
// Tips:

// A radius of 2 should give you 12.5664, and a radius of 3 should give you 28.2743
// Don't forget about order of operations!
// When you are ready to submit, make a pull request following the steps in our Git Steps document.

const radius = 2;

const area = Math.PI * radius * radius;
const totalArea = area.toFixed(4);

console.log(totalArea); //12.5664
