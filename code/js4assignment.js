// CHALLENGE 1
// PART A          //0      //1    //2    //3      //4      //5     //6     //7
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
// is this a good use case for === instead of ==?---strictly equal checks both for equality and same datatype but it's good practice to always use ===

for (word of wordList) {
    console.log(word); 
}

// PART B
for (word of wordList) {
    console.log(word.toUpperCase()); 
}

// PART C - Extra Challenges
// 1.
for (word of wordList) {
    console.log(word.slice(0, 1).toUpperCase() + word.slice(1));   
}

// 2.
const newWordList = ["EVERY", "WORD", "IN", "THIS", "ARRAY", "SHOULD", "BE", "CAPITALIZED"]
console.log(newWordList);
console.log(String(newWordList));   //string casting an array

// CHALLENGE 2
// PART A
// using while loop
let i = 0
while (i < 10) {
    console.log(i);
    i++;
}

// or using classic for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// PART B
// using while loop
let j = 0     // why is it that when i was using variable i, nothing was happening, until I changed my variable to j---because you were redeclaring i. if you want to use i again, don't redeclare it by using let again, just assign it ie. i = 0, not let i = 0
while (j < 10) {
    if (j % 3 === 0) {
        console.log("true");
    } else {
        console.log("false");
    }
    j++;
}   

// using classic for loop
for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// PART C - Extra Challenges
// 1.
// using while loop
let k = 1
while (k <= 10) {     // the same case is happening here, I couldn't use variable i, had to change to k, why?? and it's only happening with the while loops and not the for loops.---because you were redeclaring i. if you want to use i again, don't redeclare it by using let again, just assign it ie. i = 0, not let i = 0
    if (k % 3 === 0) {
            console.log("Fizz");
        } else if (k % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(k);
        }
        k++;
    } 

// using classic for loop
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 2.
// using while loop
let a = 1
while (a < 41) {
    if ((a % 3 === 0) && (a % 5 === 0)) {
            console.log(a, "-", "FizzBuzz");
        } else if (a % 3 === 0) {
            console.log(a, "-", "Fizz");
        } else if (a % 5 === 0) {
            console.log(a, "-", "Buzz");
        } else {
            console.log(a);
        }
        a++;
    } 

// using for loop
for (let a = 1; a < 41; a++) {
    if ((a % 3 === 0) && (a % 5 === 0)) {
        console.log(a, "-", "FizzBuzz");
    } else if (a % 3 === 0) {
        console.log(a, "-", "Fizz");
    } else if (a % 5 === 0) {
        console.log(a, "-", "Buzz");
    } else {
        console.log(a);
    }
}

