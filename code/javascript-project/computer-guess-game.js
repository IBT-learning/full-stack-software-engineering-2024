// array of numbers from 1-100
const arrayNumbers = [];
  for (let i = 1; i <= 100; i++) {
    arrayNumbers.push(i);
  }
// function to call the game version for player to choose from;
function gameVersion() {
      alert(`Welcome to the Guessing Game`)
      let userName = prompt(`please enter your NAME`)
      alert(`Welcome ${userName},
There are two versions of these game!!!
v1. You pick a Number from 1-100 and let the computer guess it
v2. The computer picks a number and you will guess it`)
      let userChoice = prompt(`Which version would you like to play first?
Please reply v1 or v2`)

    if (userChoice === 'v1' || userChoice === '1') {
      alert(`Version 1 starts NOW!!!`)
      newGameComputerVersion();
    }
    else if (userChoice === 'v2' || userChoice === '2') {
      alert(`Version 2 starts NOW!!!`)
      newGameUserVersion();
    }
    else {
      `Please choose correctly
  Start again`
  }
}

// function declaration to start Computer Guessing game version
function newGameComputerVersion() {
    alert('Welcome to the Computer Guessing Game Version')
    alert(`GAME INSTRUCTION!!!
1. You will pick a RANDOM NUMBER between 1 to 100
2. Then the computer will try to guess the number you picked
3. The computer uses hints from player to guide his Guesses`)
    alert(`NOW PICK YOUR NUMBER!
Are you ready? 
1...2...3 Lets Go!!!`)
    computerGuessGame();
}

// function that initialise the computer guess game logic
function computerGuessGame() {
array = [];
let low = 0;
let high = arrayNumbers.length - 1;
let numberOfGuesses = 0;
let computerGuesses = [];

while (low <= high) {
   const mid = Math.floor((low + high) / 2) 
   const computerGuess = arrayNumbers[mid];
   numberOfGuesses ++;
   computerGuesses.push(computerGuess)

alert(`${computerGuess} is the Computer Guess
Computer Guesses: ${computerGuesses.join(' | ')}`)
const userInput = prompt(`Type G if your choosen number is Greater than ${computerGuess}
Type L if your choosen number is Less than ${computerGuess} 
Type C if your choosen number is Equal to ${computerGuess}`)

// if the target number is equal to the midvalue,
// the computer will return target number as correct and stop the search
 if (userInput === 'C' || userInput === 'c') {
   alert(`WOW VOILA!!! 
The Computer guessed the number correctly after ${numberOfGuesses} attempts
`)

// conditionals for user to start a new game round or not
// if yes, a new round of game will start
// if no, the game will switch to another version
// if x, the game will end
const newGameRound = prompt(`Do you want to play another Round 
or switch to User version? 
Type YES to play another round
Type No to change to User version
Type Exit to exit the game`)
        if (newGameRound === 'yes' || newGameRound === 'y') {
          newGameComputerVersion();
        } else if (newGameRound === 'no' || newGameRound === 'n') {
          newGameUserVersion()
        } else if (newGameRound === 'exit' || newGameRound === 'x') {
          alert(`Exit Game`)
          break;
        } else {
          `Invalid input, please try again!`
        }
          break;
}
// if the target number is greater than the mid index,
  else if (userInput === 'G' || userInput === 'g') {
      low = mid + 1
  } 
// if the target number is less than the mid index,
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

// This function invokes the Guess Game
// Game Begin!!!
gameVersion();



