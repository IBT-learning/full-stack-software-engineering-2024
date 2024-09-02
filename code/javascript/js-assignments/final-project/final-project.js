// alert("Hello");
// alert("Choose a number from 1 to 100");

numberGame(1, 100);

alert("Choose a number from 1 to 100");

function numberGame(x, y) {
  // alert in the function incase of invalid input, it begins here

  const guessedNumber = Math.floor((x + y) / 2);
  let userNumber = prompt(
    `Is your number ${guessedNumber}? \n Type h for greater than, \n l for lesser than, and \n c if it's correct`
  );
  if (userNumber === "h") {
    // if guessedNumber is greater than userNumber
    numberGame(guessedNumber + 5, y);
  } else if (userNumber === "l") {
    // if guessedNumber is less than userNumber
    numberGame(x, guessedNumber - 5);
  } else if (userNumber === "c") {
    // if guessedNumber is correct
    return alert(
      `Yaaay! Your number is ${guessedNumber}! \n Reload page to play again.`
    );
  } else {
    // Handle invalid input
    alert("Please enter 'h', 'l', or 'c'.");
    numberGame(x, y);
  }
}
