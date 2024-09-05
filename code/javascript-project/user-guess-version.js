// Function that starts the user version of the game
function newGameUserVersion() {
    alert(`Welcome to the User Guessing Game version`);
    alert(`GAME INSTRUCTION!!!
1. The computer will pick a number randomly from 1-100
2. You will Guess a number using hints from the computer
3. You will continue till the exact number the computer guessed is entered`);
    alert(`ARE YOU READY?
1...2...3  Lets Go`); 
    userGuessGame();
}

// Function that initializes the user guess game logic
function userGuessGame() {
    let low = 1;
    let high = 100;
    let computerGuess = Math.floor(Math.random() * (high - low + 1)) + low;
    console.log(computerGuess);
    let userGuess;
    let numberOfGuesses = 0;
    let userGuesses = [];

    while (true) {
        userGuess = Number(prompt(`Type a Number that the Computer Guessed`));
        if (userGuess < low || userGuess > high) {
            alert(`${userGuess} is not a valid Input, please pick a number from 1-100`);
            continue; // Skip to the next iteration of the loop
        }
        
        numberOfGuesses += 1;
        userGuesses.push(userGuess);

        if (computerGuess === userGuess) {
            alert(`CONGRATULATIONS!!! ${computerGuess} is the Computer PICK
You got it right after ${numberOfGuesses} attempts`);

            const newGameRound = prompt(`Do you want to play another Round 
or switch to computer version? 
Type YES to play another round
Type No to change to Computer version
Type Exit to exit the game`);
            if (newGameRound.toLowerCase() === 'yes' || newGameRound.toLowerCase() === 'y') {
                newGameUserVersion();
            } else if (newGameRound.toLowerCase() === 'no' || newGameRound.toLowerCase() === 'n') {
                newGameComputerVersion(); // Make sure to define this function
            } else if (newGameRound.toLowerCase() === 'exit' || newGameRound.toLowerCase() === 'x') {
                alert(`Exit Game`);
                break;
            } else {
                alert(`Invalid input, please try again!`);
            }
            break;
        } else if (computerGuess < userGuess) {
            high = userGuess - 1;
            alert(`${userGuess} is higher than Computer Guess! Go Lower
You have guessed ${userGuesses.join(' | ')}`);
        } else if (computerGuess > userGuess) {
            low = userGuess + 1;
            alert(`${userGuess} is lower than computer guess! Go Higher
You have guessed ${userGuesses.join(' | ')}`);
        }
    }
}
