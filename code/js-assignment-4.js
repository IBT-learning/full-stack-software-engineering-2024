/*const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

for (list of wordList) {
    console.log(list.toUpperCase()); // question 1
    
}*/
/*const wordcount = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

for (let word of wordcount) {
  console.log(word[0].toUpperCase() + word.slice(1)); //question 2
}
*/

for (let x =0; x<=10; x++) //question 3
    {
    if (x%3 == 0) { // check if divisible by 3 returns 0
        console.log(true) // return 0=true
    }

    console.log(false) // return other number = false
} 
for (let number = 1; number <=50; number++) { 
    if (number % 3 === 0 && number % 5 === 0) { //check if divisible by 3 or 5
        console.log("fizzBuzz");
    }
    else if (number % 3 === 0) { // check if divisible by 3
        console.log("fizz");
    }
    else if (number % 5 === 0) { // check if divisible by 5
    console.log("buzz")
}
else
console.log (number); // display number
}
