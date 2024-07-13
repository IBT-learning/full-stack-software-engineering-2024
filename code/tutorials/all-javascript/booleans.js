/*
    BOOLEANS 
    * store binary value that can be true or false. Note that they start with small letters.
    * expressions that evaluates to true or false are boolean expression. e.g comparison and logical(||,&&,!,>,==,<)
    * JS also has a concept of 'truthy'and 'falsy' where values that are not boolean, if they are treated as boolean
      expression, will evaluate as a boolean and evaluate as true or false. even though they are boolean etc
      e.g Falsy: false,0, -0, "", null, undefined,NaN. Truthy: Any value that is not one of the falsy
    * the useful thing in booleans is not just storing the values true or false, it is about using them in boolean 
      expressions and the usefulness of boolean expressions is that we use the in logic gates aka conditionals.
    
    Remember thatt an expression is a valid unit of code that resolves to a value e.g number, string, true or false. 
    Every operation creates a new value, which can then be passed to other operations, and on and on until everything 
    resolves into one value. Expressions can be complex and can include other expressions within them.
    Does not matter how many layers the expression might have, e.g function within a function that takes an array[index]
    + some number to make it evaluate to a value that we want.

    An expression ends when it is assigned to a variable, or it reaches the endpoint of the operation (such as logging
    to a console.)
*/

let isTrue = true
let isFalse = false  //these are boolean literals
console.log(typeof isFalse)
console.log(isTrue)
console.log('-----------------------end of sect 1------------------------------------')

//We are showing here, using the Boolean constructor, that any expressions can be coerced to either truthy of falsy
//certain values and empty collections evaluate to false in a Boolean context. We can convert other types to boolean.
console.log(Boolean()) 
console.log(Boolean(0))
console.log(Boolean(1)) //every non-zero Number type evaluates to true except NaN that evaluates to falsy
console.log(Boolean('')) //empty string evaluates to false. Ensure that the empty string has no space character.
console.log(Boolean('text')) //any other string as long as it's string is true. even 'false', so long its a string
console.log(Boolean([])) //truthy. A reference type cannot be falsy in javascript. In python, empty string is falsy
console.log(Boolean({}))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log('-------------------------------------')
// console.log(!!) this does not work
console.log(!!0)
console.log(!!1)
console.log(!!"")
console.log(!!"text")
console.log(!![])
console.log(!!{})
console.log('-------------------------section 2------------------------------')

// COMPARISON OPERATORS: they form boolean expressions which resolve to true or false 

// == the loose equality operator. Only cares that the values are the same and does not care if they are not same type
// relies on type coercion

console.log(isFalse == false)
console.log(isTrue == false)
console.log(isTrue == 0) //coerced the implicitly and we have shown that 0 evaluates to false in boolean.
console.log(0 == "")
console.log(isFalse == "")  //isFalse and the empty string is coerced into 0 so they resolve to true. Rule of equality
console.log(isFalse == "a")
console.log(isTrue == 5)
console.log('---------------------------------------------------')

// != the NOT equal operator

console.log(isTrue != isFalse)
console.log(isTrue != 1)

console.log('---------------------------------------------------')

// === the STRICT equality operator
// it asks if they are the same value and the same type. They both must satisfy these two conditions to be equal.
// does not rely on type coercion.

console.log(isFalse === "")
console.log(isTrue === 1)
console.log(isTrue  === true)
console.log("same" === 'same')

// !== the NOT STRICT equality.

console.log(isFalse !== "")
console.log(isTrue !== 1)
console.log(isTrue  !== true)
console.log("same" !== 'same')

//Other comparison operators are <,>, <=, >= the usual we know about
console.log('-----------------------end of sect 3------------------------------------')
// CHAINING OPERATORS
// the && logical AND. 
// both sides are evaluated separately and then look at the resolved values together 
// it requires all expressions to the sides of it to evaluate to true for it to return true overall.

console.log(isTrue == true && isFalse != 1) 
console.log(isTrue == true && isFalse != 1 && 'string' != 'this string')  // used this to combine more than one JS expression. could be longer than this
console.log(isTrue == true && isFalse != 1 && 'string' != 'string')

console.log('---------------------------------------------------')
// || logical OR. (symbol name is pipe)
console.log(isTrue == true || isFalse != 1) 
console.log(isTrue == true || isFalse != 1 &&'string' != 'this string') //order of operation && resolves first before ||