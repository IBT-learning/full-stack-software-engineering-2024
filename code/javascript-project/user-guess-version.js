// THE USER GUESS VERSION
// function that start the user version of the game
function newGameUserVersion() {
    alert(`Welcome to the User Guessing Game version`)
    alert(`GAME INSTRUCTION!!!
1. The computer will pick a number randomly from 1-100
2. You will Guess a number using hints from the computer
3. You will continue till the exact number the computer guessed is entered`)
    alert(`ARE YOU READY?
1...2...3  Lets Go`) 
    userGuessGame()
}

// function that initialise the user guess game logic
function userGuessGame() {
    let low = 1;
    let high = 100
    let computerGuess = Math.floor(Math.random() * (high - low + 1)) + low
    console.log(computerGuess)
    let userGuess;
    let numberOfGuesses = 0
    let userGuesses = [];

    while (computerGuess !== userGuess) {
        userGuess = Number(prompt(`Type a Number that the Computer Guessed`))
        numberOfGuesses += 1;
        userGuesses.push(userGuess);

    if (userGuess < low || userGuess > high) {
        alert(`${userGuess} is not a valid Input, please pick a number from 1-100`)
        newGameUserVersion() 
    }
    else if (computerGuess === userGuess) {
        alert(`CONGRATULATIONS!!! ${computerGuess} is the Computer PICK
You got it right after ${numberOfGuesses} attempts`)

// conditionals for player to start a new game round or not
// if yes, a new round of game will start
// if no, the game will switch to computer version
// if x, the game will end
    const newGameRound = prompt(`Do you want to play another Round 
or switch to computer version? 
Type YES to play another round
Type No to change to Computer version
Type Exit to exit the game`)
        if (newGameRound === 'yes' || newGameRound === 'y') {
          newGameUserVersion();
        } else if (newGameRound === 'no' || newGameRound === 'n') {
          newGameComputerVersion()
        } else if (newGameRound === 'exit' || newGameRound === 'x') {
          alert(`Exit Game`);
          break;
        } else {
          alert(`Invalid input, please try again!`)
        }
          break;
    }
    else if (computerGuess < userGuess) {
        high = userGuess - 1;
        alert(`${userGuess} is higher than Computer Guess! Go Lower
You have guessed ${userGuesses.join(' | ')}`)
    }
    else if (computerGuess > userGuess) {
        low = userGuess + 1;
        alert(`${userGuess} is lower than computer guess! Go Higher
You have guessed ${userGuesses.join(' | ')}`)
    }
    else {
        newGameUserVersion();
    }
  }
}
