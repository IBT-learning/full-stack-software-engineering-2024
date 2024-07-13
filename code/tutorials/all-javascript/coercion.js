/* TYPE COERCION - This is when one type of data becomes another data type. In JavaScript, there are two types
implicit and explicit type coercions. And that is one thing about javascript that is wierd is that things can change
types as a side effect. */

console.log("------------------- Type Constructors ------------------------------------------")
//Type Constructors: it's like a built in function but they always start with a capital letter
let newString = String('abc')
let newNumber = Number(123)
let newArray = Array(1,2,3)  //array constructor takes comma separated list of values as argument
let newArray1 = Array([1,2,3], 2, 3)
console.log(newString)
console.log(newNumber)
console.log(newArray)
console.log(newArray1)

/* //Explicit type coercion also called type casting or type conversion. Only works if the data being represented can 
be stored and used as the data it is being corced into. eg '123abc' does not make sense to be coerced into a number by 
numbercasting it. */
console.log('------------------------ Explicit/type casting -------------------------------------')
let str = "123"
let num = +str   //this is using the unary operator
console.log(num)
newString = Array(newString)  //we have type casted/ coerced a string variable into becoming an array variable
console.log(newString)
newNumber = String(newNumber)
console.log(newNumber + 2)
console.log(newNumber.length)
/* the ans = 246 for the below, this is an example of implicit coercion where js looks at the values and the operator 
and decides that it makes more sense for us to be doing multiplication of numbers rather than multiplication of strings */
console.log(newNumber * 2) 


//implicit coercion - some people like it and others don't because you can coerce some data unknowingly.
console.log('--------------------implicit coercion----------------------------------------')
console.log(1 + '2')
console.log("2" + 1)
console.log(3 * "3")
console.log(3 * 'abc') //it did try to coerce 'abc' to number and couldn't but knows that there is a special num type NaN

/*the other time when implicit type coersion happens is when we are doing boolean comparisons where we look at two
different things and compare if they are the same. We have two comparison operators, one just checks the values. ie
it will try to coerce them into the same type and then check if they are the same in value while the other is stricter
they both have to have the same value and the same type */
