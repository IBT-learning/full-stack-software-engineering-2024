function guessNumber() {
    alert("Hi there, pick a number between 1 and 100 and I will try to guess it");
  
    let bottomBound = 1;
    let topBound = 100;
    let guess;
    let userResponse;
    let attempts = 0;
  
    while (true) {
      guess = Math.floor((bottomBound + topBound) / 2);
      userResponse = prompt(
        `is your number higher than, lower than, or exactly ${guess}? (Enter 'h' for higher, 'l' for lower, or 'c' for correct)`
      );
      attempts++;
  
      if (userResponse === "c") {
        alert(
          `Yay, I guessed your number right in ${attempts} attempts! Your number is ${guess} `
        );
        break;
      } else if (userResponse === "h") {
        bottomBound = guess + 1;
      } else if (userResponse === "l") {
        topBound = guess - 1;
      } else {
        alert("Invalid input! Please enter 'h', 'l', or 'c'.");
      }
    }
  }
  
  //Game 2
  
  function userGuessNumber() {
    alert("I will think of a number between 1 and 100 and you will guess it");
  
    let attempts = 0;
    let userGuess;
    const number = Math.floor(Math.random() * 100);
  
    while (true) {
      userGuess = Number(prompt("Enter a number: "));
      attempts++;
      if (userGuess === number) {
        alert(
          `Congratulations! You guessed the right number in ${attempts} attempts. My number is ${number}`
        );
        break;
      } else if (userGuess < number) {
        alert(`Higher`);
      } else if (userGuess > number) {
        alert(`Lower`);
      } else {
        alert("Invalid input! Please enter a number between 1 and 100.");
      }
    }
  }
  
  function playGame() {
    let playAgain;
  
    do {
      const chooseGame = prompt(
        "Which game would you like to play? Enter '1' for 'Computer Guesses' or '2' for 'User Guesses':"
      );
      if (chooseGame === "1") {
        guessNumber();
      } else if (chooseGame === "2") {
        userGuessNumber();
      } else {
        alert("Invalid choice! Please enter '1' or '2'.");
        continue;
      }
  
      playAgain = prompt("Would you like to play again? (Enter 'Yes' or 'No')");
    } while (playAgain === "yes");
    alert("thanks for playing!");
  }
  
  playGame();
  