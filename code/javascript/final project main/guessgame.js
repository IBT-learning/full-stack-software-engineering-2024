
function guessNumberGame() {
  alert("Want to play Guess The Number Game?");
  
  let letsPlay = true;

  while (letsPlay) {
    const userNumber = prompt("Pick a number between 1 and 100. Type it and Press OK");
    let low = 1;
    let high = 100;
    let guessCount = 0;
    let guessedCorrectly = false;

    while (!guessedCorrectly) {
      const guess = Math.floor((low + high) / 2);
      guessCount++;
      
      const userResponse = prompt(`Is the number higher than, lower than, or exactly ${guess}?
        (Enter 'h', 'l', or 'c')`).toLowerCase();

      if (userResponse === 'h') {
        low = guess + 1;
      } else if (userResponse === 'l') {
        high = guess - 1;
      } else if (userResponse === 'c') {
        guessedCorrectly = true;
        alert(`Correct! The number is ${guess}. It took me ${guessCount} guesses.`);
      } else {
        alert("Invalid input. Please enter 'h' for higher, 'l' for lower, or 'c' for correct.");
      }
    }

    letsPlay = confirm("Would you like to play again?");
  }

  alert("Thanks for playing!");
}

guessNumberGame();
