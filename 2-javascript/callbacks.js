/* 
    ? Callbacks
    * a function that is passed as an argument to another function
    * JS uses these more than any other language
        * very useful for asynchronicity
        * which is really important for web apps
*/

/* 
    ? Function Expressions
    * work exactly the same as Function Declarations
        * except that they're not hoisted (we'll come back to this idea)
    * more flexible syntax
        * old school
        * ES6
    * Can be anonymous
*/

// function declaration
function newFunction() {
  return null;
}

// function expression, old school
const newerFunction = function () {
  return null;
};

// function expression, ES6 syntax
const newestFunction = () => {
  return null;
};

// concise syntax (works for either type of function expression)
// if you have exactly one parameter, the parens are optional
// if the return value fits on one line
//      you can lose the curly brackets
//      AND the return statement

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const double = (x) => x * 2; // these parens are optional

console.log(add(1, 2));
console.log(double(5));

const doMath = (a, b, mathFunc) => {
  return mathFunc(a, b);
};

console.log(doMath(4, 8, add));
console.log(doMath(4, 8, subtract));

// callback with anonymous function
// anonymous means it's never named, never assigned to a variable
console.log(doMath(5, 7, (a, b) => a * b));

/* 
    ? Map, Filter, Reduce
    Array methods that take callbacks
    return new arrays, leave the original alone
*/

const nums = [1, 2, 3, 4, 5];

// .map() performs the callback on every element in the array
// the callback args are
//      element: the element of the array
//      (optional) index: the index of the array
//      (optional) array: the whole original array object

// const doubledNums = nums.map(double);
const doubledNums = nums.map((x) => x * 2);
console.log(doubledNums);

// .filter() returns a new array that includes only elements that pass the test
// the callback must return a boolean
//      if true, the element will be added to the new array
//      if false, the element will be ignored

// const oddNums = nums.filter((x) => {
//   if (x % 2 == 1) {
//     return true;
//   }
//   return false;
// });

const oddNums = nums.filter((x) => x % 2 == 1);
console.log(oddNums);

const smallNums = nums.filter((x) => x < 3);
console.log(smallNums);

// .reduce() creates a singular new value, based on all the elements of the array
// the callback args are
//      * accumulated value
//      * each element in the array
// reduce has an optional second arg for starting value
const sum = nums.reduce(
  (accumulatedValue, arrayElement) => accumulatedValue + arrayElement,
  10 // this argument sets the starting value for the accumulated value
);
console.log(sum); // 25
