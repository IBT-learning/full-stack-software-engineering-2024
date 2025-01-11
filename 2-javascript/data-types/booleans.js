/*
    BOOLEANS
    * store a binary value
    * true, false
    * boolean expressions evaluate to true or false
    * JS leans heavily on "truthy" and "falsey"
*/

let isTrue = true
let isFalse = false
console.log(typeof isFalse)

console.log(Boolean()) // false (by default)
console.log(Boolean(isTrue)) // true
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true (all non-zero numbers are true)
console.log(Boolean(-1)) // true
console.log(Boolean(0.00000000000000000000000001)) // true
console.log(Boolean(NaN)) // false (this is the only member of the type Number, other than 0, that is false)

console.log(Boolean("strings are truthy...")) // true
console.log(Boolean("")) // false (...except for empty string)
console.log(Boolean("false")) // true
console.log(Boolean("0")) // true

console.log(Boolean([1, 2, 3])) // true
console.log(Boolean([])) // true (empty arrays are truthy)
console.log(Boolean({})) // true (same with empty objects, and all reference types)

console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false

// COMPARISON OPERATORS
// form boolean expressions, which resolve to true or false

// = is the assignment operator
// == is the equality operator

console.log(isFalse == false) // true
console.log(isFalse == 0) // true (because of type coercion)
console.log(isFalse == "") // true (because of type coercion)

// the != operator is NOT equal

console.log(isTrue != isFalse) // true
console.log(isTrue != 1) // false

// === is the STRICT equality operator
// asks not only are they the same value, but are they also the same TYPE
// we use this one by default
// we only use == when we specifically want to rely on coercion

console.log(isFalse === "") // false (not the same type!)
console.log(isTrue === 1) // false
console.log(isTrue === true) // true
console.log("same" === "same") // true

console.log(isFalse !== "") // true
console.log(isTrue !== 1) // true
console.log(isTrue !== true) // false
console.log("same" !== "same") // false

// no surprises here!
console.log(1 > 2) // false
console.log(1 < 2) // true
console.log(1 > 1) // false
console.log(1 >= 1) // true
console.log(1 <= 0) // false

// CHAINING OPERATORS

// && logical AND
console.log(isTrue == true && isFalse != 1) // true
console.log(isTrue == true && isFalse == 1) // false (both sides of the && have to be true)

// you can combine as many expressions as you need!
console.log(isTrue == true && isFalse != 1 && "string" != "other string") // true
console.log(isTrue == true && isFalse != 1 && "string" != "string") // false

// || logical OR
console.log(isTrue == true || isFalse != 1) // true
console.log(isTrue == true || isFalse == 1) // true (only one side of the || has to be true)

const complexTrue =
    (isTrue == 0 && "" === 0) ||
    (isFalse == 1 && isTrue == [] && 0 != 1) ||
    true // because only one side of the OR needs to be true, the whole expression will be true

console.log(complexTrue) // true
