/*
    ? Loops
    * Loops is how we execute blocks of code repeatedly.
    * A loop keeps going until an exit condition is met
        * exit conditions are sometimes explicit and sometimes implicit
    * JS are many ways of writing loops but there are only two kinds of loops
    * "for loops" are for when the number of times is pre-defined
    * "while loops" are for when the number of times is unknown at the start
    * "for loops" are more common in web development than "while loops" ie while loops are less common

*/
// WHILE LOOPS - Note that  with while loops, there is always a counter of some sort that starts from 0 or 1 and set the loop to continue while continually
// incrementing the counter or by some event happening at random to make the counter value cancel out the condition in the while statement.

// a scenario where we run a while loop based length of a string 
let word = "antidisestablishmenarianism"

let count = 0
while (count < word.length) {
    count++
    console.log(`this loop has happened the ${count}th time`)
    
}
console.log(count)

console.log("-------------------------------------------------------------------------------------------")

// a different scenario, simulating a situation where we are waiting for event to happen at random to break us out of the loop
let num = 0
while (num < 0.9) {
    num = Math.random()
    console.log(num)
}

// THE FOR LOOP:
// the classic for loop. not how we do it now, just for knowledge case. it is based on Java and when JavaScript started, this was the only way

for (let i = 0; i < 10;) {
    console.log(i)
    i++
}

// OR

//it sets the i variable, checks if it is less than the condition, runs whatever code below, comes back and increment i, checks again, run whatever code

// the below is useful for when we want to run a loop a specific number of times that we decide on our own and not dependent on an iterable. Take Note

for (let i = 1; i <= 10; i++) {   // the i++ is the last thing to happen in this for loop. can be i +=3 or i -= 2.
    console.log(i)
}

for (let i = 3; i <= 1000; i++) {  
    console.log(i)
    i = i ** 2
}

// we may choose not to increment i but that placeholder must not be left empty. The purpose of this third place is for us to change the variable i so that
// we can get out of the loop if we are not changing the variable inside the loop. If we are changing the variable i inside the loop, we can leave i as
// it is to cover for that third position. We can't have a for loop of this old format without the third position.
 
for (let i = 3; i <= 1000; i) { 
    i = i ** 2 
    console.log(i)
}

// THE for..of loop  (this loop works for iterable  but not for objects. Those use for...in)

for (letter of word) {
    console.log(letter)
}

// the exit outlet of this loop is when we run out of items to loop over. The good thing about loops is that we can run any kind of code based on the loop
//being run e.g conditionals, any code code block even to run a funtion. There is no limit to the complexity of code that can go inside a loop

const daysOfWeek = ['Mon', "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]  // notice that Wed and Sat require additional strings to make up full name

for (day of daysOfWeek ) {
    if (day === "Wed") {
        console.log("Wednesday")
    } else if (day === "Sat") {
        console.log("Saturday")
    } else {
        console.log(`${day}day`)
    }
}

// Because arrays are indexed hence ordered, we can predict how the arrays would be looped over from first to last, but objects aren't necessarily ordered,
// so we may not be able to predict the order the loop will iterate over the object

// A loop within a loop (nested loop)

const vowels = "aeiou"

for (letter of word) {
    for (vowel of vowels) {
        if (letter == vowel) {
            console.log(vowel)
        }
    }
}

// so far we are printing the characters one letter at a time as we loop. Suppose we want to collect all the match as a new string. We can concatenate.
// we can declare an empty string variable and is usually placed just above the line where the loop starts.

// the outer loop runs once and the inner loop runs 5 times then we iterate over the second letter of "word" one time, hold it and check it against 
let justVowels = ""
for (letter of word) {    // iterate over each item here one time
    for (vowel of vowels) {   // based on each iteration of the outer loop, make this iteration. ie, completes all loop here for each one iteration of outer
        if (letter == vowel) {   // while running this innner loop, if any of its item matches the element being iterated in outer, then perform xyz
            justVowels += letter
        }
    }
}
console.log(justVowels)

// Thing about nested loops is that it could be a not so efficient way to run code, as we can see we will run a code 5 times 27 times. 

// Summarily, we have learn 3 different kinds of loops, the while loops, the classic for loop, and the for--of loops

// One other important thing to note about checking conditions is to setup the conditions from highest complexity to lowest complexity.That is the order
//should be such that condition that is first checked cannot has no relationship to subsequent check. Like the FizzBuzz challenge, cjeck for both 3 and 5
// should be precede check for individual checks for either 3 or 5 otherwise, we will never get to the condition to check both. e.g 15 should satisfy both 
// but becuase 15 can satisfy 3 or 5 and if we write either condition for 3 or 5 first, when the loop is on 15, it first checks for 3 for instance and 
//because it satify fizz, it exits the condition. and so only values that do not support both 3 and 5 jwill get the check for 3 and 5 and ofcourse it will
//never return true.