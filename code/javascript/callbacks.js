/*
 ? Callbacks
 * a function that is passed as an argument to another function
 * JS uses these more than any other languages
    * very useful for asynchronicity
    * which is really important for web apps
*/

/*
        ? Function Expressions
    * work exactly as Function Delarations
        * except they are not hoisted 
    * more flexible syntax
        * old school
        * ES6
    *can be anonymous
*/

// function declaration
function newFunction() {
    return null;
}

// function expression, old school

const newerFunction = function() {
    return null
}

// function expression, ES6 syntax
const newestFunction = () => {
    return null
}

// concise syntax
// if you have exactly one parameter, the parens are optional
// if return value fits on one line, you can lose the curly brackets and the return statement

const add = (x, y) => x + y
const subtract = (x, y) => x - y
const double = (x) => x * 2

console.log(add(1,2))
console.log(double(5))

const doMath = (x, y, mathFunc) => {
    return mathFunc(x, y)
}

console.log(doMath(4, 8, add))
console.log(doMath(4, 8, subtract))

// callback with anonymous function

console.log(doMath(5, 7, (a, b) => a * b))


/*
    ? Map, Filter, Reduce
    Array methods that take callbacks
*/

const nums = [1, 2, 3, 4, 5]

// .map() performs the calback on every element in the array
const doubleNums = nums.map(double)
console.log(doubleNums)

// OR
const doubleNumbers = nums.map((x)=> x*2)
console.log (doubleNumbers)

// .filter() returns a new array that includes only elements that pass the test
// the callback must return a boolean
//  if true, the element will be added to the new array
//  if fals, the element will be ignored

const oddNums = nums.filter(x => x % 2 == 1)
console.log (oddNums)

const smallNums = nums.filter(x => x < 3)
console.log (smallNums)


// .reduce() creates a singular new value, based on all the elements of the array

const sum = nums.reduce((a, b) => a + b )
console.log(sum)