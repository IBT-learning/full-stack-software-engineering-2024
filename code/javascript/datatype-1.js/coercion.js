// Type Coercion

// constructors

//these two are the same
let newString1 = "any string"
let newString2 = String("any string")
console.log(newString1)

let newNumber = Number(1,2,3)
let newArray  = Array([1,2,3],4,5) // takes any number of comma separated arguments
console.log(newArray)

// changes types explicitly, using the type constructor
// also called type casting
// also called type conversion

newString1 = Array(newString1)
console.log(newString1)

newNumber = String(newNumber)
console.log(newNumber.length)

newNumber = String(newNumber)
console.log(newNumber * 2)

let output = Number([12, 34])
console.log(output)

let newString3 = Number("123")
console.log(newString3)

let newString4 = Number("123abc")
console.log(newString4)  // Nan

//implicit coercion

console.log(1 +"2") // concatenation! coreces the number to a string
console.log(3 * "2")// multiplication! coerces the string to a number
console.log(3 * "two")//NaN! two cannot be coerced to a number






