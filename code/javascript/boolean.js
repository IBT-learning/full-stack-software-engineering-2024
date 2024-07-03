/*

BOOLEANS
* store a binary value
* true, fals
* boolean expressions evaluate to true or false
* JS leans heavily on "truthy" or "falsey" (values that are not booleans can evaluate to true or false)

*/ 

let isTrue = true
let isFalse = false

console.log (typeof isFalse)

console.log (Boolean(0))
console.log (Boolean (1))
console.log (Boolean (-1)) // truthy

// All non-zero numbers are true

console.log (Boolean (NaN)) // false // falsey

console.log (Boolean ("strings are truthy")) // true //empty strings are always false

//An empty string is two quote marks without a space inbetween

console.log (Boolean ([1, 2, 3])) // true
// empty arrays, empty objects {}, and all reference types are truthy

// COMPARISON OPERATORS
// form boolean expression

// = is the assignment operator
// == is the equality operator

console.log (isFalse == false)
console.log (isFalse == 0) // true because of type of coercion (falsey)

// the != operator is NOT equal

console.log (isTrue != isFalse)
console.log (isTrue == 0) // false

// === is the STRICT equality operator
// asks not only are they the same value, but are they also the same TYPE 

console.log (isFalse === "") // false (not the same type)
console.log (isTrue === 1) // false
console.log (isTrue === true) // true
console.log ("same" === "same") // true

console.log (isFalse !== "") // true (not the same type)
console.log (isTrue !== 1) // true
console.log (isTrue !== true) // false
console.log ("same" !== "same") // false

console.log (1 > 2) // false

// CHAINING OPERATIONS

// && logical AND

console.log (isTrue == true && isFalse != 1) // true
console.log (isTrue == false && isFalse != 1) // false. If one is false, all is false

// || logical OR

console.log (isTrue == true || isFalse != 1) // true
console.log (isTrue == false || isFalse != 1) // true. Only one can be true

const complexTrue = 
(isTrue == 0 && "" != 0) ||
(isFalse == 1 && isTrue == [] && 0 != 1) ||
true

console.log (complexTrue)