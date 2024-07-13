// CONDITIONAL
// - a code block that only executes under certain conditions (truthy and falsy conditions)
// - any boolean expression can be the condition
// - in the syntax, anything inside the parentheses will be evaluated as a boolean expression

// Very important to note about the way if blocks work: It checks the condition and if we condition is true it executes the code and exits, and starts afresh
// to check for the condition. If there is an else if block, then if the if condition is not true, it jumps over that block of code and tests for the else
// if, if that is true, that code executes and we go out of the if block. this happens once. The if check when combined with a for loop works a little
// differently. In a for loop, the if condition is checked on every item being looped over, if that condition is met, the code executes and the code returns
// to the begininng of the loop but for a different iteration. that is the element being iterated over is the next one from the one for which the condition
// was true.

let condition  //recall we can define a var and not assign a value to it. log it get undefined but is valid exist.
if (condition){
    // the code that executes goes inside the curly braces
    pass
}

// e.g if
if (1){
    console.log('this will print because 1 is truthy')
}

if ("") {
    console.log('this will not print because coercion of empty string is falsy')
}

let temperature = 70
let rainy = true

if (temperature < 65 && rainy) {
    console.log("Solomon is grumpy!")
} else if (temperature > 70) {
    console.log("solomon is okay!")
} else {
    console.log("Solomon is happy!")
}


let temperature1 = 55
let rainy1 = false

if (temperature1 < 65 && rainy1) {
    console.log("Solomon is grumpy!")
} else if (!rainy1) {
    console.log("solomon is okay!")
} else {
    console.log("Solomon is happy!")
}


let temperature2 = 70
let rainy2 = false

if (temperature2 < 65 && !rainy2) {
    console.log("Solomon is grumpy!")
} else if ((temperature2 >= 70 && rainy2) || (!rainy2 && temperature2 < 65)) {  // if its warm and wet or if it's dry and cold   (Nested conditional)
    console.log("solomon is okay!")
} else {
    console.log("Solomon is happy!")
}

// something to note is that we did not write for instance if temp > 65 and < 80. Why because the lower limit and upper limit of 
// each block is the condition before or afer it. So it is implied. Once the condition is true for any block, the code in that block executes
// the check is complete and we exit. No more block is executed.

if (temperature > 100) {
    console.log('I am melting!')
} else if (temperature > 80) {
    console.log("It's pretty hot")
} else if (temperature > 65) {
    console.log ("It's pretty nice out")
} else if (temperature > 35) {
    console.log("at least it's not freezing")
} else if (temperature > 15) {
    console.log("It's cold out!")
} else {
    console.log('IT"S WAY TOO COLD')
}

/* We wanted to make a special mention of testing boolean (true/false) values, and a common pattern that we'll come across againn and again. 
  Any value that is not false, undefined, null, 0, NaN, or empty string ('') actually returns true when tested as a conditional statement, therefore we can use
  a variable name on its own to test whether it is true, or even that it exists (that is, it is not undefined) */

  let cheese = 'Cheddar'

  if (cheese) {                                                         // No need to write if (cheese == 'Cheddar')
    console.log('Yay! Cheese available for making cheese on toast.')
  } else {
    console.log("No cheese on toast for you today")
  }

// NESTING if...else - (Note that there os a difference between else...if and if...else)
// else...if provides us with a way to chain on extra choices/outcomes to our if...else
// But it is also perfecty Ok to put one if...else statement inside another one

const weatherConditions = ["sunny", "rainy", "snowy", "overcast"]
const randomIndex = Math.floor(Math.random() * weatherConditions.length)  // returns interger btw 0 and 3
const selectedWeather = weatherConditions[randomIndex]

const temp = 86  // not perfect though because i need a way to make temperature change together with weather

if (selectedWeather === "sunny") {
    if (temp < 86) {
          console.log(`It is ${temp} degrees outside - nice and sunny. Let's go out to the beach, or park, and get an ice cream`)                                           
    } else if (temp >= 86) {
        console.log(`It is ${temp} degrees outside - REALLY HOT! If you wan to go ouside, make sure to put some sunscreen on`)
    }
} else if (selectedWeather === 'rainy') {
    if (temp < 60) {
        console.log(`It is ${temp} degrees out and rainy. Perhaps i should carry a sweatshirt along`)
    } else if (temp < 35) {
        console.log(`It is ${temp} degrees out and rainy. Definitely take a sweatshirt`)
    }
} else if (selectedWeather === "snowy") {
    console.log("Time to build a snowman")
 } else if (selectedWeather === "overcast") {
    console.log("Stay home with a nice cup of chocolate")
 }

 // LOGICAL OPERATORS: WHY ARE THEY USEFUL AND (&&), OR (||), NOT (!)
 // If we want to test multiple conditions without writing nested if...else statements
 // && allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
 // || allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

 // We can rewrite the above code as below using logical &&

 if (selectedWeather === "sunny" && temp < 86) {
    console.log(`It is ${temp} degrees outside - nice and sunny. Let's go out to the beach, or park, and get an ice cream`) 
 } else if (selectedWeather === "sunny" && temp >= 86) {
    console.log(`It is ${temp} degrees outside - REALLY HOT! If you want to go ouside, make sure to put some sunscreen on`)
 }

// logical ||
let iceCreamVanOutside = true
let houseStatus

if (iceCreamVanOutside || houseStatus === "on fire") {
    console.log("You should probably leave the house quickly")
} else {
    console.log("Probably should stay in then")
}

// The logical NOT (!) is used to negate an expression. So it returns opposite value of logical expression that evaluates to either true or false
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
    console.log("You should probably leave the house quickly")
} else {
    console.log("Probably should stay in then")
}

// COMBINING LOGICAL STATEMENTS TOGETHER: We can combine as many logical statements together as we want, in whatever structure.
let x
let y
let z
let loggedIn
let username

if ((x=== 5 || y > 3 || z <= 10) && (loggedIn || username === "Steve") {  
    // run this code. Code will run only if both OR statements on either side of && return true, meaning the overall AND statement will return true
})