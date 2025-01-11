// CONDITIONAL
// a code block that only executes under certain conditions

// anything inside the parentheses will be evaluated as a boolean expression
let condition
if (condition) {
    // inside the curly brackets is called a "code block"
    // in conditionals, the code block only executes of the condition is true
    pass
}

if (1) {
    console.log("one is truthy, so this log will happen")
}

if ("") {
    console.log("empty string is falsey so this log won't happen")
}

let temperature = 110
let rainy = false

// when writing complex conditionals
// it can be helpful to break some sets of conditions out
// into their own variables
let isWarmAndWet = temperature >= 70 && rainy
let isDryandCold = !rainy && temperature < 65

if (temperature < 65 && rainy) {
    console.log("Danny is grumpy!")
} else if (isWarmAndWet || isDryandCold) {
    // the "else if" executes if
    // ... the previous code block did NOT execute
    // ... and the condition is true
    console.log("Danny is okay")
} else {
    // the "else" executes if all of the previous code blocks didn't
    // it has no extra conditions
    console.log("Danny is happy!")
}

// this one could almost be a switch statement
// but switch statements are generally looking for specific values, not ranges
if (temperature > 100) {
    console.log("I'm melting")
} else if (temperature > 80) {
    // note that because only one of the code blocks will execute
    // we don't have to specify that the temperature has to be less than 100
    // if it had been over 100, the first block would have executed
    // and this one wouldn't even happen
    console.log("it's pretty hot")
} else if (temperature > 65) {
    console.log("it is pretty nice out!")
} else if (temperature > 35) {
    console.log("at least it's not freezing")
} else if (temperature > 15) {
    console.log("it's cold out!")
} else {
    console.log("IT IS WAY WAY TOO COLD")
}
