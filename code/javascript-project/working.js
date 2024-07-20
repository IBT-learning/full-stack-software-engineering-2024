// the user guess version of the guessing game
/*
steps!
the computer picks a random number from 1-100
the user tries to guess the number the computer picked randomly
*/

// code the game function
const arrayNums = []
for (i = 1; i <= 100; i++) {
    arrayNums.push(i)
}

function userGuessGame() {
    alert(`Welcome to the guessing game`)
    alert(`Instruction!!!
The computer will pick a number randomly from 1-100
and you will guess the exact number the computer guessed`)
    alert(`Are you ready?
Lets Go`) 
    let low = 1;
    let high = 100
    let computerGuess = Math.floor(Math.random() * (high - low + 1)) + low
    console.log(computerGuess)
    let userGuess;
    let numberOfGuesses = 0

    while (computerGuess !== userGuess) {
        userGuess = Number(prompt(`Type a number that the computer guessed`))
        numberOfGuesses += 1;

    if (userGuess < low || userGuess > high) {
            alert(`${userGuess} is not a valid Input, please pick a number from 1-100`)
            startnewGame() 
    }

    if (computerGuess < userGuess) {
        high = userGuess - 1;
        alert(`${userGuess} is higher than Computer Guess! Go Lower`)
    }
    else if (computerGuess > userGuess) {
        low = userGuess + 1;
        alert(`${userGuess} is lower than computer guess! Go Higher`)
    }
    else if (computerGuess === userGuess) {
            alert(`Congratulations! ${computerGuess} is the Computer Guess
You got it right after ${numberOfGuesses} attempts`)
      }
      break;
   }
}
userGuessGame()

function startnewGame() {
    userGuessGame()
}