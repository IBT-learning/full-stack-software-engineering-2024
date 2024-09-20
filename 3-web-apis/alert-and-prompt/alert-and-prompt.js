// alert("You can show messages to the user");

// you can do any JS operation here, it's just a regular JS file with no restrictions
const nums = [5, 6, 7];

const product = nums.reduce(
  (accumulatedVal, element) => accumulatedVal * element
);

console.log(product);
console.log("Anything we do in this file, goes to the browser");

// alert("This happens next");

// const firstName = prompt("What is your first name?");
// const lastName = prompt("What is your last name?");

// alert(`Nice to meet you ${firstName} ${lastName}`);

const num1 = prompt("first number:");
const num2 = Number(prompt("second number:"));
alert(Number(num1) + num2);
