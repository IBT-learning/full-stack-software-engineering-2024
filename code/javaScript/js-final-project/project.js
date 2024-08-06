// Game #1

// const game1 = () => {
//   alert(`I will think of a number between 1 and 100 and you make a guess`);
//   const number = Math.floor(Math.random() * 100);
//   let attempts = 0;
//   let userGuess;

//   while (true) {
//     userGuess = Number(prompt("Enter a number: "));

//     if (isNaN(userGuess)) {
//       alert(`Please a valid number`);
//     } else if (userGuess < 1 || userGuess > 100) {
//       alert(`Please enter a valid number between 1 and 100`);
//     } else {
//       attempts++;
//       if (userGuess < number) {
//         alert(`Try a higher number`);
//       } else if (userGuess > number) {
//         alert(`Try a lower number`);
//       } else {
//         alert(
//           `CORRECT! The number was ${number}. It took you ${attempts} attempts to guess right`
//         );
//         break;
//       }
//     }
//   }
// };
// game1();

// Game #2

const game2 = () => {
  alert(`Think of a number from 1 to 100, and I'll guess the number.
    If I guess right, type "C" for correct, if i need to guess higher than my first guess, type "H" for higher, otherwise, type "L" for lower.
    If you understand this, click "OK", otherwise, please read again.
    I hope you enjoy the game!`);

  alert(`Think of a number from 1 - 100`);

  let attempts = 0;
  let userResponse;
  let min = 1;
  let max = 100;

  while (true) {
    let guessedNumber = Math.floor(Math.random() * 100);
    // TODO: 
    // instead of guessing a random number
    // choose one that's halfways in between min and max

    alert(
      `Is the number lower than, higher than, or exactly ${guessedNumber}?`
    );
    userResponse = prompt();
    attempts++;
    if (userResponse == "H") {
      // TODO: change the min
    } else if (userResponse == "L") {
      // TODO: change the max
    } else if (userResponse == "C") {
      alert(`I did it after ${attempts} attempts, Game Over!`);
      break;
    }
  }
};
game2();
