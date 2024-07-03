// CONDITIONAL
// A code block that only executes under certain conditions

// any boolean expressions can be condition
// anything inside the parentheses will be evaluated as a boolean expression

let condition
if (condition) {
    // the code that executes goes inside the curly brackets
    pass
}

condition = false
if (condition = "everything") {
    console.log ("one is true")
}
let temperature = 18
let rainy = true

if (temperature < 65 && rainy) {
    console.log ("Danny is grumpy")
} else if (temperature >= 70 && rainy) {
    console.log ("Danny is okay")
} else {
    console.log ("Danny is happy")
}

if (temperature >100) {
    console.log ("I'm melting!")
} else if (temperature > 80){
    console.log ("It's pretty hot out")
} else if ( temperature > 65) {
    console.log ("It's nice out!")
} else if ( temperature > 30) {
    console.log ("It's pretty cold")
} else if ( temperature > 15) {
    console.log ("I'm freezing!")
}