// How the game works
// Before starting to code this project, please find a partner and play
// this game together verbally for a few rounds.

// Alice thinks of a number
// Bob guesses a number
// Alice says "higher", "lower", or "correct"
// repeat 2 & 3 until Bob guesses correctly
// After you get a feel for the game, it's time to write a software
// version of the game, where the human thinks of a number between 1
// and 100 and the computer tries to guess it.

// Coding the game
// You will complete this project in a JavaScript file that you will
// run in the browser, via an HTML file. Get input from the user
// using prompt() and send messages to the user using alert()

// You will need to use loops and conditionals to make this program work.
// Technically you could complete it without any functions, but I strongly
// recommend using functions to keep your code tidy and organized.

// Gameplay will work like this:

// ask the user to choose a number between 1 and 100

// ask the user something like "is the number higher than,
// lower than, or exactly 50?"
// continue asking that question, but modify the number
// based on their previous answers
// when the user says you got the number right, end the game
// The best way to narrow down your guesses is by
// using the binary sort algorithm. This Khan Academy
// article explains the algorithm and gives a useful visualization.

// Tips
// to save the player (and you) from typing too much, offer
// the user the option to answer h (for higher),
// l (for lower), or c for correct
// off-by-one errors are a risk here. Double check
// the distinction betweens "greater than" and
// "greater than or equal to", and "less than"
// and "less than or equal to"
// sign reversal errors are also a common mistake.
// Make sure you're not using > when you should
// be using <, and vice versa
// when you feel like your game is close to ready,
// ask someone to play it. Watching them play is a
// great way to spot bugs, poor UX, and other issues
// with the program

// Extra challenges
// keep track of the number of guesses we needed,
// and display a message with that number at the end of the game
// handle invalid/unexpected inputs from the user
// when the game is over, ask the user if they want
// to play again, and if so play another round.
// (Hint: this requires a while loop.)
// write a version of the game in which the computer
// chooses the number, the user guesses numbers,
// and the computer answers whether the guess is higher or lower
// if you finish that and want more, make the program
// start by giving the user a choice between the two games,
// and then start the game they ask for
// ... and then ask again at the end of each round

// Create greeting and welcome user
let firstName = prompt("What is your name?").toLowerCase();
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

let greeting = document.getElementById("greeting");
let h1 = document.createElement("h1");
h1.innerText = `Welcome to 'Guess the Number' ${firstName}!`;

greeting.appendChild(h1);

// Create user number input with error message
const userStartButton = function () {
  let userInput = Number(prompt(`Type a number between 1 and 100...`));

  if (userInput > 100 || userInput <= 0 || isNaN(userInput)) {
    alert("Sorry, that is not a valid number. Please try again...");
  } else {
    numRange();
  }
};

let userStart = document.getElementById("userStart");
userStart.addEventListener("click", userStartButton);

// User wants to choose the number
const numRange = function () {
  let count = 0;
  let status = false;
  let low = 1;
  let high = 100;

  while (!status) {
    let guess = Math.floor((low + high) / 2);
    let inputRange = prompt(
      `Is the number higher than, lower than, or exactly ${guess}?
      Note: You may reply with h (for higher), l (for lower), or c (for correct)`
    );

    count++;

    if (inputRange === "l") {
      high = guess - 1;
    } else if (inputRange === "h") {
      low = guess + 1;
    } else if (inputRange === "c") {
      alert(
        `Your number is ${guess}! Phew, that took me ${count} guesses 😅...`
      );
      status = true;
    } else {
      alert("Please respond with 'h', 'l', or 'c'.");
    }
  }

  newGame();
};

let newGame = function () {
  let startNewGame = prompt(`Would you like to play again? y/n`);
  if (startNewGame === "y") {
    numRange();
  } else {
    alert(`Thank you for playing ${firstName}!`);
  }
};

// User wants to guess the number
const computerStartBtn = function () {
  let count = 0;
  let status = false;
  let low = 1;
  let high = 100;
  const num = Math.floor(Math.random() * 100) + 1;

  while (!status) {
    let userGuess = parseInt(
      prompt(`Guess the number I'm thinking of between ${low} and ${high}:`),
      10
    );

    count++;

    if (userGuess > num) {
      alert(`${userGuess} is too high...`);
      high = userGuess - 1;
    } else if (userGuess < num) {
      alert(`${userGuess} is too low...`);
      low = userGuess + 1;
    } else if (userGuess === num) {
      alert(
        `Congratulations! You guessed the correct number ${num}! It took you ${count} guesses 🤩.`
      );
      status = true;
    } else {
      alert(`Invalid input. Please enter a number.`);
    }
  }
  newGame();
};

let computerInput = document.getElementById("computerStart");
computerInput.addEventListener("click", computerStartBtn);
