// Challenge 1: Capitalize

function capitalize(word) {
  const capitalizedWord = word.toUpperCase();
  return capitalizedWord;
}

console.log(capitalize("hello"));

// Challenge 2: Percentage Calculator

function percentCalc(amount, percentage) {
  const bag = (amount * percentage) / 100;
  return bag;
}

console.log(percentCalc(200, 20)); 

// Challenge 2: Divisible

function divisible(dividend, divisor) {
  if (dividend % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisible(6, 3)); 
console.log(divisible(15, 4));

// Challenge 4: Friend, Enemy

function greeting(firstName, status) {
  if (status === "friend") {
    return `Hello, welcome ${firstName}!`;
  } else if (status === "enemy") {
    return `Go away ${firstName}. I don't want to see you!`;
  } else if (status === "interested observer") {
    return `Have a nice time, ${firstName}`;
  } else {
    return `I don't know you, ${firstName}.`;
  }
}

console.log(greeting("Superman", "friend")); 
console.log(greeting("Lex Luthor", "enemy"));
console.log(greeting("Ngozi Clara", "interested observer"));
console.log(greeting("Mercy", "paparazzi"));

