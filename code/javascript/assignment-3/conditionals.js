// Challenge #1

// Create a constant variable called movieTitle and assign it a string with the title of a movie you like
const movieTitle = "The Notebook";
console.log(movieTitle); // The Notebook

// Create a constant variable called isScary and assign it either true or false
const isScary = false;
console.log(isScary); // false

// Create a constant variable called isRomantic and assign it either true or false
const isRomantic = true;
console.log(isRomantic); // true

// Write a conditional statement that will log only one of these sentences to the console:
// this movie is both romantic and scary!
// this movie is romantic
// this movie is scary
// this movie is neither romantic nor scary
// In each outcome, replace "this movie" with the title of your movie.
if (isScary === true && isRomantic === true) {
  console.log(`${movieTitle} is both romantic and scary! `);
} else if (isRomantic) {
  console.log(`${movieTitle} is romantic 😍`); // The Notebook is romantic �
} else if (isScary) {
  console.log(`${movieTitle} is scary! 😯`);
} else {
  console.log(`${movieTitle} is neither romantic nor scary`);
}

// Extra challenge
// Add another variable isFunny and see if you can represent all possible combinations
// Note that this adds a significant number of new options!
// Can you figure out how to solve it with nested conditionals? (Putting conditional statements inside of other conditionals?)
