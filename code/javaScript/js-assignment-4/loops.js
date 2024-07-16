// Challenge #1

let wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
// wordList.toString()
for (word of wordList) {
    word.toString()
    // console.log(word.toUpperCase());

    // Extra challenge
    // #1
    let firstLetter = word.charAt(0).toUpperCase()
    let remainingLetter = word.slice(1)
    console.log(`${firstLetter}${remainingLetter}`);   
}
// #2
let capitalisedWordList = wordList.toString()
let wordList2 = capitalisedWordList.toUpperCase()
console.log(Array(wordList2));
console.log(wordList2);

// Challenge #2

for (let num = 1; num <= 10; num++) {
    if (num % 3 == 0){
        console.log(true);
        
    } else{
        console.log(false);
    }
}

// Extra challenge
for (let num = 1; num <= 40; num++) {
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");
    } else if (num % 3 == 0){
            console.log("Fizz");
    } else if(num % 5 == 0){
            console.log("Buzz");
    } else{
            console.log(num);
    }
}