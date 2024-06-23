console.log('hello world')
let c = 1
c++
console.log(c)
let name = "Alice"
let greeting = 'Hello, '+ name + '!'
console.log(greeting)
greeting = `hi ${name}`
console.log(greeting)

//let vs const...we notice that we cannot reassign a constant variable. It maintains its valeu throughout the program.
let newNum = 1
newNum = newNum + 1
console.log(newNum)
// const newNumm = 1
// newNumm = newNumm + 1
// console.log(newNumm)

let dividend = 10
let divisor = 3
let result = Math.floor(dividend / divisor)
console.log(result)
let result2 = Math.ceil(dividend / divisor)
console.log(result2)
console.log(Math.round(Math.SQRT1_2))  //rounds to the nearest whole number/integer. Does not round up or down but to nearest.
//where the SQRT1_2 is
//console.log(SQRT1_2)  this is wrong. cannot be used directly.
console.log(Math.SQRT1_2)

//RANDOM NUMBER GEN. First i defined a function which is good because we can decide any range when we call the function
//Math.random takes no argument but can be scaled by multiplying with a scalar
function getRandomInt(max){
    return Math.floor(Math.random() * 5)
}
console.log(getRandomInt(5))
console.log(Math.random())  //this would return a floating point random number

//we can also wrap Math.random() with Math.floor() and multiplying with a scalar and assigned to a variable

//However, if we instead want a fixed decimal places random number we use .toFixed() on the number. Doesn't matter how we get
//the number. Whether directly or the output of some operation.

console.log(Math.random().toFixed(3))

//The Number.MAX_SAFE_INTEGER is a static data property that allows us to check if we need to be using BIGINT instead of that
//number.
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Math.log10(1))
console.log(Math.log(1))
console.log(Math.sqrt(-1))

//JS NUMBERS CHAINING OPERATIONS
console.log(6 * 3 + 4 * 2 + 10 / 3)
console.log(((((6*3)+4)*2)+10)/3)