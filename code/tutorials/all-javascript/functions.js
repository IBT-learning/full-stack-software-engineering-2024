/*
    ? FUNCTIONS
    * a block of code that performs a particular task
    * only runs when invoked/called
    * can be defined with a function declaration or a function expression
    *   * we're learning declarations in class today
    

    Function declaration syntax

    function functionName(optional parameters) {
        ... code block
    }
 */
// e.g 1: No variable data being passed at definition

function sayHello() {
    console.log("Hello")
}

sayHello()

//e.g 2: Single Variable data being passed to the function definition. name is implicitly declared as a new variable and we can assign it a value when we call
//the function

function greeting(name) {
    console.log(`Hello ${name}`)
}

greeting("Solomon")
greeting(["Emmanuel", "Okeke"])
greeting(123)                        //hello 123 Because we used a template literal, everything it returns is a string
greeting()               //hello undefined
greeting(123, "Solomon")  // defined with one variable, passed more than one at call. Will use the first one. order is key // Hello 123

//In the same vein that we define a function that takes a vairiable and we now call the function without a variable, we expect our code t break but
//it returns undefined. This is because we as with JS where we can declare a variable without assignment of value, just that when we call that variable
//we get undefined, same thing happens in function. We dclared a function with variable and when we call that function without argument, the function does
//not break but it is undefined.

//e.g 3: More than one variable placeholder

function addition(val1, val2) {
    console.log(val1 + val2)
}

addition(25,25)
addition("Solo", "mon")
addition(25)