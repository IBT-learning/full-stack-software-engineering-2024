const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

/* Write a for..of loop that logs each word in the array and 
   capitalise each word
*/   
for (word of wordList) {
    console.log(word)
    console.log(word.toUpperCase())
}
// Extra Challenges
/* Try capitalizing only the first letter. 
   There is no string method that does this, 
   so you will need to utilize .slice()
*/
for (word of wordList) {
    slicedWord = word.slice(1)
    word = word.slice(0, 1)
    capitalisedWord = word.toUpperCase() + slicedWord
    console.log(capitalisedWord)
} 
// challenge 2
/* Write a loop that will execute exactly 10 times. 
   You can do this with either a while loop or a 
   "classic" for loop
*/
   for (let i = 1; i <= 10; i++) {
     i % 3
    if (i % 3 === 0) {
       console.log(i + " YES")
    } else {
       console.log(i + " NO")
    }
} 

// Extra Challenge

/* Write a JS loop that will go 40 times, and for each number,
   console log the number, and either Fizz, Buzz, or FizzBuzz 
   next to it. */

// Fizz when number is divisible by 3
// Buzz when number is divisible by 5
// FizzBuzz when number is divisible by 3 & 5
for (i = 1; i <= 40; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz")
    } else if (i % 5 === 0) {
        console.log(i + " Buzz")
    } else if (i % 3 === 0) {
        console.log(i + " Fizz")
    } else {
        console.log(i)
    }
}


