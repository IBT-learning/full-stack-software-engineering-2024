// Challenge 1: Capitalize
function capitalize(word) {
  // word = word.toUpperCase(); //this can be cut out as
  // return word //it will still return the capitalized word
  return word.toUpperCase();
}
console.log(capitalize("hello"));

// Challenge 2: Percentage Calculator
function percentCalc(amount, percentage) {
  let amountPercent = amount * (percentage / 100);
  return amountPercent;
}
console.log(percentCalc(700, 20));

// Challenege 3: Divisible
function divisble(dividend, divisor) {
  if (dividend % divisor === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisble(24, 5));

// Challenge 4: Friend, Enemy
function greeting(firstName, status) {
  if (status === "friend") {
    return `Welcome, ${firstName}.`;
  } else if (status === "enemy") {
    return `Go Away, ${firstName}.`;
  } else {
    return "Who are you?";
  }
}
console.log(greeting("Enny", "single"));
