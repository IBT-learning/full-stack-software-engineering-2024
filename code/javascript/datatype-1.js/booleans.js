/*
Booleans
 *stores binary values
 *true or false
 *boolean expressions evaluate to true of false
 *JS leans heavily on "truthy" or "falsey" statements
*/ 

let isTrue = true
let isFalse = false
console.log(typeof isFalse)

//console.log(Boolean())// false by default
//console.log(Boolean(isTrue))// true
//console.log(Boolean(0))//false
//console.log(Boolean(1))// true.(all non zero numbers are true)
//console.log(Boolean(-1))//true
//console.log(Boolean(0.0000000000000001))//true
//console.log(Boolean(NaN))//false

//console.log(Boolean("strings are truthy"))
//console.log(Boolean(""))
//console.log(Boolean("false"))
//console.log(Boolean("0"))

console.log(Boolean([1,2,3]))//true
console.log(Boolean([]))//true; empty arrays are true
console.log(Boolean({}))//true; empty objects are true

console.log(Boolean(undefined))//false
console.log(Boolean(null))//false

//Comparison Operators
// forms a Boolean expression which resolves to true or false

// = is the assignment operator
// == is the equality operator

console.log(isFalse==false)
console.log(isFalse==0)
console.log(isTrue==1)
console.log(isFalse=="")

//!=  is NOt equql to Operator

console.log(isTrue!=isFalse)// true
console.log(isTrue!=1)// false

// ===Strict Equality operator
// asks not only if they are the same type but also the asme value

console.log(isFalse === "")//false
console.log(isTrue === 1)// false
console.log(isTrue === true)// true
console.log("same" === "same")// true

// Not strictly equal to operator
console.log(isFalse !== "")//true
console.log(isTrue !== 1)// true
console.log(isTrue !== true)// false
console.log("same" !== "same")// false

//Greater than, equal to operator
console.log(1 > 2)//false
console.log(1 < 2)// true
console.log(1 > 1)//false
console.log(1 >= 1)//true
console.log(1 <= 0)// false

//Chaining Operations
//&& Logical AND

console.log(isTrue == true && isFalse != 1)//true
console.log(isTrue == true && isFalse == 1)//false (both sides of the && have to be true)
console.log(isTrue == true && isFalse != 1 && "string" != "other string")//true
console.log(isTrue == true && isFalse != 1 && "string" != "string")//false

//you can combine as many expressions as you want
console.log(isTrue==true && isFalse !=1)//true
console.log(isTrue==true && isFalse ==1)//false - you only need one side to be false , the whole expression will be false

// || Logical Or

console.log(isTrue == true || isFalse != 1)//true
console.log(isTrue == true || isFalse == 1)//true-only one side needs to true for the expression to be true

const complexTrue = isTrue == 0 && "" !== 0 || isFalse == 1 && isTrue == [] && 0 != 1 || true
console.log(complexTrue)// true














