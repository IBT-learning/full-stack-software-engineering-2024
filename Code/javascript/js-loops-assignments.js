// Challenge #1

const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

for (let word of wordList) {

    let Word = word.toUpperCase();
    console.log (Word)
}

// Challenge #2

let number = 1

while (number <= 10) {
    if (number % 3 === 0) {
        console.log (`${number} is divisible by 3: True`)
    } else {
        console.log(`${number} is divisible by 3: False`);
    }
    number++
}