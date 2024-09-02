/*
  Functions can be declarations or expressions
 */
// Function Declaration
function newFunction() {
  return 1 + 2;
}
console.log(newFunction());

// Function Expression: They work same as declaration except for syntax and that can be hoisted.
// Syntax 1: old school
const newerFunction = function () {
  return 0;
};

console.log(newerFunction());

// Syntax 2: ES6
const newestFunction = () => {
  return "love";
};
console.log(newestFunction());

// Concise
const add = (x, y) => x + y; //curly braces is optional but code block is written on 1 line
const sub = (x, y) => Math.abs(x - y);
const double = (x) => x * 2; // curly braces and brackets are optional
console.log(add(2, 3));
console.log(double(5));

// callback example
const doMath = (a, b, mathFunc) => {
  return mathFunc(a, b);
};
console.log(doMath(3, 6, add));
console.log(doMath(3, 6, sub));

// anonymous callback function
console.log(
  doMath(5, 7, (a, b) => {
    return a * b; // 35
  })
);

const nums = [1, 2, 3, 4, 5];

const middleIndex = () => nums[Math.floor(nums.length / 2)];
console.log(middleIndex());

// Maps, Filter & Reduce
// Maps
const doubledNums = nums.map(double);
console.log(doubledNums); // [ 2, 4, 6, 8, 10 ]

const tripledNums = nums.map((x) => x * 3);
console.log(tripledNums); // [ 3, 6, 9, 12, 15 ]

// Filter
const oddNums = nums.filter((x) => x % 2 === 1);
console.log(oddNums); //[ 1, 3, 5 ]
const evenNums = nums.filter((x) => x % 2 === 0);
console.log(evenNums); //[ 2, 4 ]
const smallNums = nums.filter((x) => x <= 3);
console.log(smallNums); //[ 1, 2, 3 ]

// reduce
const sum = nums.reduce((a, b) => a + b);
/*
const nums = [1, 2, 3, 4, 5];
1st Instance
  a = nums[0] =  1, 
  b = nums[1] = 2
2nd Instance
  a = a + b = 3
  b = nums [2] = 3
3rd Instance
  a = a + b = 6 
  b = nums [3] = 4
4th Instance
  a = a + b = 10 
  b = nums [4] = 5
 */
console.log(sum);
