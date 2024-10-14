/* 
    VARIABLES
    * a variable represents one piece of data in memory
    * in JS variables must be declared
    * declaration
        * allows memory space to be reserved using an identifier
        * starts with keywords: let, const, or (archaic) var
        * variable names must start with a letter, $, or _
        * if no value is assigned, it's undefined
    * assignment
        * gives the variable a data value
        * can be any value or data type
        * can be reassigned (unless declared with const)
    * initialization
        * giving a new variable its first value
        * usually done on the same line as declaration
    
    Naming things is one of the two hard problems of computer science
    * what makes a good variable name?
        * JS variable names use camelCase
            * first letter lowercase
            * if there are multiple words
            * first letter of subsequent words are capitalized
        * names should describe either
            * the data the variable stores, or
            * the intended usage of that data
        * longer is better than shorter (but not longer than necessary)
    
    Side note on casing:
    Different case conventions are used in different situations
        * kebab-case (we use this in html and css)
        * camelCase (used for most things in JS)
        * WordCase or PascalCase (used for certain things in JS)
        * snake_case (used in Python)
        * SCREAMING_SNAKE_CASE or CONSTANT_CASE (used in JS for constants)
*/

let a // declaration
console.log(a) //undefined

a = "aaaaa" // assignment
console.log(a) //"aaaaa"

a = 111111 // reassignment
console.log(a) //111111

let b = 222222
console.log(b)

console.log(a + b) //333333
let c = a + b
console.log(c) //333333

let d = c
console.log(d) //333333

console.log("*********")
c + 100
console.log(c) //333333

let e = c + 100
console.log(e) //333433

c++ // c = c + 1
console.log(c) //333334
c++
c++
c++
console.log(c) //333337
// c = a + b
// console.log(c) //333333

console.log("*********")
console.log(d)

const address = "123 Main St"
// address = "321 Main St" // TypeError: Assignment to constant variable.
