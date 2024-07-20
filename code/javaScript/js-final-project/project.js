// Game #1

// const game1 = () => {
//   const startGame = alert(
//     `I will think of a number between 1 and 100 and you make a guess`
//   );
//   const number = Math.floor(Math.random() * 100);
//   let attempts = 0;
//   let userGuess;
//   let running = true;

//   while (running) {
//     userGuess = prompt();
//     userGuess = Number(userGuess);

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
//         running = false;
//       }
//     }
// }
// };
// game1();

// Game #2

// const game2 = () => {
//   const gameIntruction =
//     alert(`Think of a number from 1 to 100, and I'll guess the number.
//     If I guess right, type "C" for correct, if i need to guess higher than my first guess, type "H" for higher, otherwise, type "L" for lower.
//     If you understand this, click "OK", otherwise, please read again.
//     I hope you enjoy the game!`);

//   const game2Start = alert(`Think of a number from 1 - 100`);

//   let attempts = 0;
//   let userResponse;
//   let running = true;

//   while (running) {
//     let guessedNumber = Math.floor(Math.random() * 100);
//     let higherGuessedNumber = guessedNumber
//     let guessAlert = alert(
//       `Is the number lower than, higher than, or exactly ${guessedNumber}?`
//     );
//     userResponse = prompt();
//     attempts++;
//     if (userResponse == "H") {
//      guessAlert
      
//     } else if (userResponse == "L") {
//       guessAlert
//     } else if (userResponse == "C") {
//       alert(`I did it after ${attempts} attempts, Game Over!`);
//       running = false;
//     }
//   }
// };
// game2();
