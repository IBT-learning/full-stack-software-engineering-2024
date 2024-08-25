alert("Think of a number between 1-100");
let minvalue = 1;
let maxvalue = 100;
let guess;
let reply = "";
let tries = 0;

while (minvalue <= maxvalue) {
  guess = Math.floor((minvalue + maxvalue) / 2);
  tries++;
  reply = prompt(`Is the number less ${guess}? Enter 'yes', 'no' or 'correct'`);
  if (reply === "yes") {
    maxvalue = guess - 1;
  } else if (reply === "no") {
    minvalue = guess + 1;
  } else if (reply === "correct") {
    alert(`I have guessed the number ${guess} correct in ${tries} tries!`);
    break;
  } else {
    alert("Please enter yes, no or correct.");
  }
}
if (minvalue > maxvalue) {
  alert("There seems to be a mistake. Let's try again!");
}