// CHALLENGE 1
// PART A          //0      //1    //2    //3      //4      //5     //6     //7
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
// is this a good use case for === instead of ==?
for (firstWord of wordList) {
    if (firstWord == wordList[0]) {
        console.log(firstWord);
    }
}
for (secondWord of wordList) {
    if (secondWord == wordList[1]) {
        console.log(secondWord);
    }
}
for (thirdWord of wordList) {
    if (thirdWord == wordList[2]) {
        console.log(thirdWord);
    }
}
for (fourthWord of wordList) {
    if (fourthWord == wordList[3]) {
        console.log(fourthWord);
    }
}
for (fifthWord of wordList) {
    if (fifthWord == wordList[4]) {
        console.log(fifthWord);
    }
}
for (sixthWord of wordList) {
    if (sixthWord == wordList[5]) {
        console.log(sixthWord);
    }
}
for (seventhWord of wordList) {
    if (seventhWord == wordList[6]) {
        console.log(seventhWord);
    }
}
for (eighthWord of wordList) {
    if (eighthWord == wordList[7]) {
        console.log(eighthWord);
    }
}

// PART B
for (firstWord of wordList) {
    if (firstWord == wordList[0]) {
        console.log(firstWord.toUpperCase());
    }
}
for (secondWord of wordList) {
    if (secondWord == wordList[1]) {
        console.log(secondWord.toUpperCase());
    }
}
for (thirdWord of wordList) {
    if (thirdWord == wordList[2]) {
        console.log(thirdWord.toUpperCase());
    }
}
for (fourthWord of wordList) {
    if (fourthWord == wordList[3]) {
        console.log(fourthWord.toUpperCase());
    }
}
for (fifthWord of wordList) {
    if (fifthWord == wordList[4]) {
        console.log(fifthWord.toUpperCase());
    }
}
for (sixthWord of wordList) {
    if (sixthWord == wordList[5]) {
        console.log(sixthWord.toUpperCase());
    }
}
for (seventhWord of wordList) {
    if (seventhWord == wordList[6]) {
        console.log(seventhWord.toUpperCase());
    }
}
for (eighthWord of wordList) {
    if (eighthWord == wordList[7]) {
        console.log(eighthWord.toUpperCase());
    }
}

// PART C - Extra Challenges
// 1.
for (firstWord of wordList) {
    if (firstWord == wordList[0]) {
        console.log(firstWord.slice(0, 1).toUpperCase() + firstWord.slice(1));
    }
}
for (secondWord of wordList) {
    if (secondWord == wordList[1]) {
        console.log(secondWord.slice(0, 1).toUpperCase() + secondWord.slice(1));
    }
}
for (thirdWord of wordList) {
    if (thirdWord == wordList[2]) {
        console.log(thirdWord.slice(0, 1).toUpperCase() + thirdWord.slice(1));
    }
}
for (fourthWord of wordList) {
    if (fourthWord == wordList[3]) {
        console.log(fourthWord.slice(0, 1).toUpperCase() + fourthWord.slice(1));
    }
}
for (fifthWord of wordList) {
    if (fifthWord == wordList[4]) {
        console.log(fifthWord.slice(0, 1).toUpperCase() + fifthWord.slice(1));
    }
}
for (sixthWord of wordList) {
    if (sixthWord == wordList[5]) {
        console.log(sixthWord.slice(0, 1).toUpperCase() + sixthWord.slice(1));
    }
}
for (seventhWord of wordList) {
    if (seventhWord == wordList[6]) {
        console.log(seventhWord.slice(0, 1).toUpperCase() + seventhWord.slice(1));
    }
}
for (eighthWord of wordList) {
    if (eighthWord == wordList[7]) {
        console.log(eighthWord.slice(0, 1).toUpperCase() + eighthWord.slice(1));
    }
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
let j = 0     // why is it that when i was using variable i, nothing was happening, until I changed my variable to j
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
while (k <= 10) {     // the same case is happening here, I couldn't use variable, had to change to k, why?? and it's only happening with the while loops and not the for loops.
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

