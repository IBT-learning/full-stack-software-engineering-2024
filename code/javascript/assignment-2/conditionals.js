// JavaScript Assignment #3: Conditionals

// Challenge #1

// Create a constant variable called movieTitle and assign it a string with the title of a movie you like
const movieTitle = "The Note Book";

// Create a constant variable called isScary and assign it either true or false
const isScary = false;

// Create a constant variable called isRomantic and assign it either true or false
const isRomantic = true;

// Write a conditional statement that will log only one of these sentences to the console:
// this movie is both romantic and scary!
// this movie is romantic
// this movie is scary
// this movie is neither romantic nor scary
// In each outcome, replace "this movie" with the title of your movie.
// TIP: try out assigning the boolean variable to different values of true and false to make sure all of the conditions work correctly

if (isScary && isRomantic) {
  console.log(`${movieTitle} is both romantic and scary 🙄`);
} else if (isRomantic) {
  console.log(`${movieTitle} is romantic 💘`);
} else if (isScary) {
  console.log(`${movieTitle} is scary 🙀`);
} else {
  console.log(`${movieTitle} is neither romantic nor scary 🤩`);
}
