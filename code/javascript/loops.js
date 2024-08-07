/*
? Loops

* execute a block of code repeatedly
* a loop keeps going until an exit condition is met
    * exit conditions are sometimes explicit and sometimes implicit
* JS as many ways of writing loop
* "for loops" are for when the number of times is pre-defined
* "While loops" are for when the number of times is unknown at the start
*/

let word = "laughteristhebestmedicine"

let count = 0
while (count < word.length){
    count++ // in this case, we increment the counter
    console.log (`this loop happened ${count} times`)
}

let num = 0
while (num < 0.9) {
    num = Math.random()
    console.log(num)
}

// classic for loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 3; i <= 1000; i+=3) {
    i = i ** 2
    console.log (i)
}

// for..of loop
// iterable means it can be iterated over.
for (letter of word){
    console.log(letter)
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (number of nums){
    console.log (number)
}

const dayOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

// a loop with a conditional in it
for (day of dayOfWeek){
    if (day == "Wed"){
        console.log (`Wednesday`)
    }else if (day == "Sat"){
        console.log ("Saturday")
    }else {
        console.log (`${day}day`)
    }  
}

// a loop with a loop inside it
// a "nested loop"

const vowels = "aeiou"
let justVowels = ""

for (letter of word){ // this layer (outer loop) is going over the whole word
    for (vowel of vowels){ // the inner loop goes all the way through the whole loop EVERY TIME
        if (letter == vowel){
            justVowels += letter
        }
    }
}
console.log (justVowels)