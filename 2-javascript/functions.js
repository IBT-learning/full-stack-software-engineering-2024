/* 
    ? FUNCTIONS
    * a block of code that performs a particular task
    * runs when invoked / called
    * can be defined with a function declaration or a function expression
        * we're learning declarations in class today
        * 

    Function declaration: 

    function functionName(optional, parameters, aka, arguments) {
        ... code block
    }
*/

function sayHello() {
    console.log("hello")
}

sayHello() // invoking the function

/*
    ? Parameters
    * params let you pass variable data into a function
    * there is no technical limit to the number of params
    * the variable you use to define the param
        within the function defintion
        is the variable that you will use to access it
        from within the code block
*/

function greeting(personName) {
    console.log(`hello ${personName}`)
}

greeting("Wonder")
greeting("Jade")
greeting("Cilla")
greeting(["Benjamin", "Yadel", "Taiwo"])
greeting(123, "Mercy") // hello 123 (it ignores extra values)
greeting() // hello undefined

function add(num1, num2) {
    console.log(num1 + num2)
}

add(5, 4) // 9
add(5, 4, 3) // 9 (extra values not used)
add(5) // NaN (it tried 5 + undefined)
// console.log(num1) // ReferenceError: num1 is not defined
// the function param names only exist within the function

/* 
    ? Return values
    * returns the output of a function
    * by default, functions return undefined
    * the function call is an expression that resolves to the return value
    * defined with the return keyword
    * the function STOPS when it gets to the return keyword
*/

function subtract(num1, num2) {
    return num1 - num2
}
console.log(subtract(1, 2)) // I have to log it to see the results

// because the call is an expression that evaluates to the return value

const newNumber = subtract(55, 23)
const anotherNumber = subtract(12, 5)
console.log(newNumber + anotherNumber) // these variables represent numbers now
// which means we can do math stuff to them
sayHello()

// or you can use them as part of a larger expression
const newNum = subtract(3, 4) * subtract(5, 0) + subtract(10, 1)
console.log(newNum)

// you can even use them inside other function calls
console.log(subtract(100, subtract(50, 10)))

function introduction(name, location, hobby) {
    console.log(
        `Hello, my name is ${name}, I live in ${location} and I like to ${hobby}`
    )
    return "this is the return value"
    console.log("anything after the return won't happen")
}

console.log(introduction(1, 2, 3)) // "this is the return value"
// the above line runs the log on line 83 AND also logs the function's return value

// function parameters are positional
// meaning they are assgined to the param variables
// in the order they are listed when the function is called
introduction("Mary", "Tennessee", "play video games")
introduction("Riga", "make costumes", "Kira") // Hello, my name is Riga, I live in make costumes and I like to Kira
// if they are not all included, any that are missing will be undefined
introduction("Simon", "Maine") // Hello, my name is Simon, I live in Maine and I like to undefined

// There is no technical limit to how complex the code inside a function can be!
function clock(hour, minute) {
    // TODO: handle 0 hours
    if (hour > 24 || hour < 0) {
        return "That is not a valid hour"
    } else if (minute >= 60 || minute < 0) {
        return "That is not a valid minute"
    }

    if (minute < 10) {
        minute = "0" + minute
    }

    // TODO: handle am/pm for 12
    let amPm = "am"
    if (hour > 12) {
        hour = hour - 12
        amPm = "pm"
    }
    return `${hour}:${minute} ${amPm}`
}

// this loop will call our function each time through the loop!
for (let hour = 1; hour <= 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        // we can use variables as parameters in the function call
        console.log(clock(hour, minute))
    }
}

console.log(clock(0, -5)) // That is not a valid minute
