
function guessGame(){
    let min = 1;
    let max = 100;
    let noGuesses = 0;
    while (true) {
      let guess = Math.floor(Math.random() * 100 + 1);
      noGuesses++;
      let userInput = prompt(`Is the number you're thinking of ${guess}? select c(correct)h(higher) l(lower)`);
    
      if (userInput === 'c') {
        alert(`I guessed it! The number is ${guess} and the number of total guesses is ${noGuesses}.`);
        break;
      } else if (userInput === 'h') {
        min = guess + 1;
        guess = Math.floor(Math.random() * (max - min + 1)) + min;
        userInput = prompt(`Is the number you're thinking of ${guess}? select c(correct)h(higher) l(lower)`);
      } else if (userInput === 'l') {
        max = guess - 1;
        guess = Math.floor(Math.random() * (max - min + 1)) + min;
        userInput = prompt(`Is the number you're thinking of ${guess}? select c(correct)h(higher) l(lower)`);
      } else {
        alert('Invalid input. Please respond with c(correct)h(higher) l(lower).');
      }
    }
    letplayagain =prompt("do you want to play again choose y(yes) or n(no)");

    if(letplayagain ==="y") {
       resume= guessGame();
    }

    }

    
    guessGame();


















    