// GUESS THE NUMBER GAME

// THE PROGRAM GUESSES THE NUMBER
function guessNumber() {
  let lowestNum = 1;
  let highestNum = 100;
  //i want to be able to pass a value to guess and feedback later so empty for start
  let guess;
  let feedback;

  // part extra challenge
  let guessCount = 1;

  while (lowestNum <= highestNum) {
    guess = Math.floor((lowestNum + highestNum) / 2);
    feedback = prompt(
      `Is your number higher, lower or equal to ${guess}? Enter "h" for higher, "l" for lower, and "c" for correct. No. of guesses ${guessCount}`
    );
    if (guessCount == 7) {
      alert(`GAME OVER!!! Max 7 attempts allowed!`);
      break;
    }

    if (feedback.toLowerCase() == "q") {
      break;
    }

    if (feedback.toLowerCase() == "c") {
      alert(
        `The program guessed your number ${guess} correctly! No. of guesses: ${guessCount}`
      );
      break;
    } else if (feedback.toLowerCase() == "h") {
      // means guess is too low
      lowestNum = guess + 1;
    } else if (feedback.toLowerCase() == "l") {
      // means guess is too high
      highestNum = guess - 1;
    } else {
      alert(
        'Invalid feedback. Please respond with "h" for higher, "l" for lower, and "c" for correct'
      );
    }
    guessCount++;
  }
}

// guessNumber();

// THE LOGIC TO ASK THE PLAYER TO PLAY AGAIN
function playGuessNumberGame() {
  alert(`Think of a number between 1 and 100 and let me try to guess it.`);
  guessNumber();
  let playAgain = prompt(
    `Would you like to play again? Enter 'y' for yes or 'n' for no.`
  );
  while (playAgain.toLowerCase() == "y") {
    guessNumber();
    playAgain = prompt(
      `Would you like to play again? Enter 'y' for yes or 'n' for no.`
    );
    if (playAgain == "n") {
      alert(`Thanks for playing!`);
      break;
    }
  }
}
// playGuessNumberGame();

// THE PLAYER GUESSES THE NUMBER GAME
function guessNumber2() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let userGuess;
  let guessCount = 0;

  while (userGuess !== randomNumber) {
    userGuess = prompt(`Enter your guess between 1 and 100`);
    if (userGuess == "q") {
      break;
    }
    if (guessCount == 10) {
      alert(`GAME OVER!!! Max number of attempts is 10`);
      break;
    }
    userGuess = Number(userGuess);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert(`Please enter a number between 1 and 100.`);
      continue;
    }
    if (userGuess < randomNumber) {
      alert(`Your guess ${userGuess} is too low. Try Again`);
    } else if (userGuess > randomNumber) {
      alert(`Your guess ${userGuess} is too high. Try Again`);
    } else {
      alert(
        `Congratulations! you guessed the number ${randomNumber} correctly in ${guessCount} attempts`
      );
    }
    guessCount++;
  }
}

// guessNumber2();

// THE LOGIC TO ASK THE PLAYER TO PLAY AGAIN
function playGuessNumberGame2() {
  alert(
    `I have randomly picked a number between 1 and 100. Can you guess the number?`
  );
  alert(`I will give you hints to help you as you play`);
  guessNumber2();
  let playAgain = prompt(
    `Would you like to play again? Enter 'y' for yes or 'n' for no.`
  );
  while (playAgain.toLowerCase() == "y") {
    guessNumber2();
    playAgain = prompt(
      `Would you like to play again? Enter 'y' for yes or 'n' for no.`
    );
    if (playAgain == "n") {
      alert(`Thanks for playing!`);
      break;
    }
  }
}

// THE LOGIC TO COMBINE BOTH AND GIVE THE PLAYER THE OPTION TO CHOOSE.
function guessTheNumberGame() {
  alert(
    "Welcome to our guess the number game. Please enter 'q' at anytime during the game to quit the game"
  );
  alert(
    `You have the option to choose if you want to guess the number or the computer guesses your number`
  );
  let input = prompt(
    `Do you want play (a) Guess my number or (b) I guess your number?. Enter letter 'a' or 'b' to confirm your choice `
  );
  if (input == "q") {
    alert(`Perhaps next time.`);
  } else if (input == "a") {
    playGuessNumberGame2();
  } else if (input == "b") {
    playGuessNumberGame();
  } else {
    alert(`Please enter a valid option`);
  }
}

guessTheNumberGame();
