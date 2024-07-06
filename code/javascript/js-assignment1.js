// String Literals
const myName = 'Cilla';

console.log(myName.length);
console.log(`Hello, my name is ${myName}`);
console.log(`When my friends see me they shout ${myName.toUpperCase()}!`);


//Numbers
// Challenge #1: Arithmetic
const luckyNum = 10;
const newLuckyNum = (luckyNum * 2) + 8;
result = (newLuckyNum / 2) - luckyNum;
console.log(result);

// Challenge #2: Area of a cirlce
const radius = 25;
const areaOfCircle = Math.PI * (radius**2);
result = Math.round(areaOfCircle * 10000) / 10000;
console.log(result);