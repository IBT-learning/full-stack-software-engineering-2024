function capitalize(word) {
  console.log(word.toUpperCase());
}
capitalize("Hello");

function percentCalc(amount, percentage) {
  console.log((percentage / 100) * amount);
}
percentCalc(200, 20);

function divisible(dividend, divisor) {
  if (dividend % divisor === 0) {
    console.log("true");
  } else console.log("false");
}
divisible(6, 3)
divisible(15, 4)