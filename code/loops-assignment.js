// challange 1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
 for (words of wordList) {
    let word = words.toUpperCase();
     console.log(word);
}

// extra challenge 1
let newWords = []
let wordString = ''
for (newWord of wordList) {
    newWords.push(newWord.charAt(0).toUpperCase() + newWord.slice(1))
    wordString = wordString + newWord.charAt(0).toUpperCase() + newWord.slice(1) + ' '
}
console.log(newWords);
console.log(wordString);


// challenge 2
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
     console.log(`is ${i} divided by 3? Yes`);   
    }
    else {
        console.log(`is ${i} divided by 3? No`);
    }
}

// extra challenge 2

let output = '';

for (let i = 1; i <= 40; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output += "Fizz Buzz";
    } else if (i % 3 === 0) {
        output += "Fizz";
    } else if (i % 5 === 0) {
        
        output += "Buzz";
    } else {
        output += i;
    }

    if (i < 40) {
        output += ', ';
    }
}
console.log(output);