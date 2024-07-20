
const game1 = () => {
    const startGame = alert(
      `I will think of a number between 1 and 100 and you make a guess`
    );
  const number = Math.floor(Math.random() * 100);
  let attempts = 0;
  let userGuess;
  let running = true;

  while (running) {
    userGuess = prompt();
    userGuess = Number(userGuess);

    if (isNaN(userGuess)) {
      alert(`Please a valid number`);
    } else if (userGuess < 1 || userGuess > 100) {
      alert(`Please enter a valid number between 1 and 100`);
    } else {
      attempts++;
      if (userGuess < number) {
        alert(`Try a higher number`);
      } else if (userGuess > number) {
        alert(`Try a lower number`);
      } else {
        alert(
          `CORRECT! The number was ${number}. It took you ${attempts} attempts to guess right`
        );
        running = false;
      }
    }
  }
};
game1()

