/* 

    ? FUNCTIONS 
    * a block of code that performs a particular task
    * runs when invoked / called
    * can be defined with a function declaration or a function expression
    

    Function declaration:

    function functionName(optional, parameters) {
        ... code block
    }

*/

function sayHello() {
    console.log ("hello")
}

sayHello() // invoking the function

/* 
    ? PARAMETERS
    * params let you pass variable data into a function
    * there is no technical limit to the number of params
    * the variable you use to define the param
        within the funvtion definition
        is the variable that you will use to access it
        from within the code block
*/
function greeting(name) {
    console.log(`hello ${name}`);
}
greeting("Wonder")
greeting("Jade")


function add(num1, num2){
    console.log(num1 + num2)
}
add(10, 2)
add(21, 44)



/*
        Return values
        * returns the output of a function
        * by default, fuctions return undefined
        * the function call is an expression that resolves to the return value
        * defined with the return keyboard
        * the function STOPS when it gets to the return keyboard
 */
    function subtract(num3, num4) {
        return num3 - num4
    }
    subtract(1,2) // wil not show the result in the console

    console.log(subtract(1, 2)) // To see the result, we'll have to log

    const newNumber = subtract(55, 23)
    const anotherNumber = subtract(12, 5)
    console.log(newNumber + anotherNumber) // we can do mathemacal operations with them now

    // or you can use them as part of a larger expression
    const newNum = subtract(3, 4) * subtract(5, 0) + subtract(10, 1)
    console.log(newNum)

    // you can even use them inside other function calls

    console.log(subtract(100, subtract(50, 10)))


    // function parameters are positional
    // meaning they are assigned to the param varieties
    function greetStudent(name, location, hobby ){
        console.log(
            `Hello, my name is ${name}, I live in ${location} and I like to ${hobby}`
        )
    }

    greetStudent("Lucy", "Lagos", "watch movies")
    greetStudent("Vi", "Abeokuta", "read")

    function clock(hour, minute){
        if (hour > 24 || hour < 0){
            return "that is not a valid hour"
        }
        if (minute >= 60 || minute < 0){
            return "that is not a valid minute"
        }
        if (minute < 10){
            minute = "0" + minute
        }

        let amPm = "am"
        if (hour > 12){
            hour = hour - 12
            amPm = "pm"
            
        }
        return `${hour}:${minute}${amPm}`
    }
    console.log(clock(4, -24))

    for (hour = 1; hour <= 24; hour++){
        for (let minute=0; minute < 60; minute++){
            console.log(clock(hour, minute))
        }
    }
