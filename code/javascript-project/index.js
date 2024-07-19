const arrayNumbers = [];
  for (let i = 1; i <= 100; i++) {
    arrayNumbers.push(i);
  }

function searchNumber() {
alert('Welcome to the guessing game')
alert(`GAME INSTRUCTION!!!
Guess a RANDOM NUMBER between 1 to 100`)
array = [];
let low = 0;
let high = arrayNumbers.length - 1;
let numberOfGuesses = 0;

while (low <= high) {
   const mid = Math.floor((low + high) / 2) 
   const computerGuess = arrayNumbers[mid];
   numberOfGuesses ++;


alert(`Computer guess is ${computerGuess}`)
const userInput = prompt(`Type G if your choosen number is greater than ${computerGuess} or
Type L if your choosen number is less than ${computerGuess} or
Type C if your choosen number is equal to ${computerGuess}`)

// if the target number is equal to the midvalue,
// the computer will return target number as correct and stop the search
 if (userInput === 'C' || userInput === 'c') {
   alert(`Computer guessed the number correctly at ${numberOfGuesses} attempt
GAME OVER!!!`)

// conditionals for user to start a new game or not
// if yes, a new round of game will start
// if no, the game will end
   const newGameInput = prompt(`Do you want to play another Round? 
Type YES/No`)
  if (newGameInput === 'yes' || newGameInput === 'y') {
     newGame();
  } else if (newGameInput === 'no' || newGameInput === 'n') {
    alert(`Exit Game`)
  } else {
    `Invalid input, please try again!`
  }
  break;
}

// if the target number is greater than the mid index,
// the computer will choose from the array greater than mid index,
// all numbers below mid index will be ignored
  else if (userInput === 'G' || userInput === 'g') {
      low = mid + 1
  } 

// if the target number is less than the mid index,
// the computer will choose from the array less than mid index,
// all numbers above mid index will be ignored
  else if (userInput === 'L' || userInput === 'l') {
      high = mid - 1;
  }

// checks if user input the wrong input 
  else {
  alert(`You have entered a wrong input
Please follow instruction`)
  }
}
}

searchNumber();

// function declaration for another round of game
function newGame() {
   searchNumber ();
}


