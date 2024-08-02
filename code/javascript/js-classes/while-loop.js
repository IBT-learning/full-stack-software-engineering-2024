/* 
  Loops are the way to execute block of code repeatedly, a loop keeps going until an exit condition is met.
  Exit conditions can be implicit or explicit.

  Types of Loops
    1. For loop: runs for a predetermined number of times.
    2. While loop: runs until the exit condition is met.
*/
// Example of while loop
// define and assign a variable
let word = "prestidigitation";
let count = 0;
while (count < word.length) {
  // console.log("this happened " + count + " times");
  console.log(`this happened ${count} times.`); //use backticks as quotes and ${variableName} to remove + variableName in writing string literal
  count++;
}

let num = 0;
while (num < 0.99) {
  num = Math.random(); //generates number between 0 and 1
  num = num.toFixed(2); //fixes to 2 decimal places
  console.log(num);
}
