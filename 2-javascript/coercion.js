// TYPE COERCION

// constructors
// you can use the Type constructors to create new values

// these two are the same
let newString1 = "any string"
let newString2 = String("any string")
console.log(newString1)

let newNumber = Number(123)
let newArray = Array([1, 2, 3], 4, 5) // takes any number of comma separated arguments
console.log(newArray)

// change types explicitly, using the type constructor
// usually called type casting
// also called type conversion

newString1 = Array(newString1)
console.log(newString1) // ["any string"]

newNumber = String(newNumber)
console.log(newNumber.length) // this is a string so we can do string stuff to it!

let output = Number([12, 34])
console.log(output)

let newString3 = Number("123abc")
console.log(newString3) // NaN

// implicit coercion

console.log(1 + "2") // 12 - concatenation! coerces the number to a string
console.log(3 * "2") // 6 - multiplication! coerces the string to a number
console.log(3 * "two") // NaN, "two" can't be coerced to a number
