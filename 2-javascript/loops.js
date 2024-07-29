/*
    ? Loops
    * execute a block of code repeatedly
    * a loop keeps going until an exit condition is met
        * exit conditions are sometimes explicit and sometimes implicit
    * JS has many, many ways of writing a loop
    * "for loops" are for when the number of times is pre-defined
    * "while loops" are for when the number of times is unknown at the start
*/

let word = "antidisestablishmenarianism"

let count = 0
while (count < word.length) {
    // something has to change about the condition each time
    // otherwise we get an infinite loop
    count++ // in this case, we increment the counter
    console.log(`this loop happened ${count} times`)
}

let num = 0
while (num < 0.9) {
    num = Math.random()
    // in this case, the condition is based on a random number that will be different every time
    console.log(num)
}

// classic for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 3; i <= 1000; i) {
    i = i ** 2
    console.log(i)
}

// for..of loop
// for (element of iterable) {}

// iterable means it can be iterated over, from "iteration"
// element is a new variable that we are creating on this line
// iterable is a variable that already exists somewhere

for (letter of word) {
    console.log(letter)
    // logs a new line for each letter of the word
}

const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

// a loop with a conditional in it
for (day of daysOfWeek) {
    if (day === "Wed") {
        console.log("Wednesday")
    } else if (day === "Sat") {
        console.log("Saturday")
    } else {
        console.log(`${day}day`)
    }
}

// a loop with a loop inside it
// a "nested loop"

const vowels = "aeiou"

let justVowels = ""
for (letter of word) {
    // this layer of the loop (outer loop) is going over the whole word
    for (v of vowels) {
        // the inner loop goes all the way through the whole loop EVERY TIME
        if (letter == v) {
            justVowels += letter
        }
    }
    console.log(justVowels)
}
