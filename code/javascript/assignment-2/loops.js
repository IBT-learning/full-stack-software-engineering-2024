// JavaScript Assignment #4: Loops

// Challenge #1

// Paste this line into your code:
const wordList = [
  "every",
  "word",
  "in",
  "this",
  "array",
  "should",
  "be",
  "capitalized",
];

// Write a for..of loop that logs each word in the array
for (let word of wordList) {
  console.log(word);
  word++;
}

// Now, within the loop, capitalize each word
const capitalize = [];

for (let word of wordList) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  capitalize.push(capitalized);
}

console.log(capitalize.join(" "));

// Extra challenges (you may any or all or none of these)
// (this is actually a strings challenge) Try capitalizing only the first letter. There is no string method that does this, so you will need to utilize .slice()
// Rather than simply logging each word in the array, try creating a new array and adding each capitalized word to it
// Add each capitalized word to a string instead of (or in addition to) an array

// Challenge #2

// Write a loop that will execute exactly 10 times. You can do this with either a while loop or a "classic" for loop
// For each loop, console log whether the number is divisible by 3. (You can do this with modulo)
// you will need a conditional inside your loop for this!
// you can log "true" and "false", or if you prefer, "yes" and "no"

for (let i = 1; i <= 10; i++) {
  console.log("For loop:", i);
  if (i % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

let count = 1;

while (count <= 10) {
  console.log("While loop:", count);

  if (count % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
  count++;
}

// Extra challenges

// Solve FizzBuzz without looking up a solution! This is one of the classic beginning programming challenges
// Here is an explanation of the children's math game FizzBuzz
// Write a JS loop that will go 40 times, and for each number console log the number, and either Fizz, Buzz, or FizzBuzz next to it
// Be mindful of the order of your conditions!

for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 5 === 0) {
    console.log(i + " Fizz");
  } else if (i % 3 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}
