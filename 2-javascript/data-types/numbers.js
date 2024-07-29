const one = 1
const two = 2

// basic arithmetic operators
console.log(1 + 2)
console.log(one + two)
console.log(1 - 2)
console.log(2 * 4)
console.log(5 / 2)

// advanced arithmetic operators
console.log(4 ** 3) // exponent
console.log(19 % 5) // modulo, finds the remainder

// BUILT-IN MATH OBJECT
console.log(Math.floor(19 / 5)) // this is floor division, floor rounds down
console.log(Math.ceil(Math.PI)) // ceiling, rounds up
console.log(Math.round(Math.SQRT1_2)) // rounds to nearest whole integer
console.log(Math.max(5, 2, 7, 14234, 9, 3)) // finds the highest value of the the given numbers
console.log(Math.min(5, 2, 7, 14234, 9, 3)) // finds the lowest value of the the given numbers

// RANDOM NUMBERS
console.log(Math.random())
// random number between zero and ten
const randomNum = Math.floor(Math.random() * 10)
console.log(randomNum)

// fixed-point notation
console.log(Math.PI.toFixed(4)) // gives just four decimal places

// other silly things
console.log(Number.MAX_SAFE_INTEGER)
console.log(Infinity * Number.MAX_SAFE_INTEGER)
console.log(Math.sqrt(-1)) // NaN (NotANumber), imaginary numbers are not built in to JS

// CHAINING OPERATIONS

console.log(6 * 8 + 3 - 1)

// 6 times 3, plus 4, times 2, plus ten, divide by 3 = 18

console.log(6 * 3 + 4 * 2 + 10 / 3) // 29.999, not what we wanted!

// avoid this by doing the operations on separate lines
let newNum = 6 * 3
newNum = newNum + 4
newNum = newNum * 2 + 10
newNum = newNum / 3
console.log(newNum)

// or split it up using the grouping operator ()
console.log(((6 * 3 + 4) * 2 + 10) / 3)
