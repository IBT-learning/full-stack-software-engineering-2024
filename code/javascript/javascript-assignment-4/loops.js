//Challenge 1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

for (word of wordList) {
    console.log(word.toUpperCase())
}

//Extra Challenge a
for ( word of wordList) {
    const FirstLettercapitalized = word.charAt(0).toUpperCase() + word.slice(1)
    console.log(FirstLettercapitalized)
}

//Extra Challenge b
const capitalizedWordsArray = []
for (word of wordList) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedWordsArray.push(capitalizedWord)
}
console.log(capitalizedWordsArray)

//Extra Challenge c
let capitalizedWordsString = ''
for ( word of wordList) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedWordsString += capitalizedWord + ' '
}
capitalizedWordsString = capitalizedWordsString.trim()
console.log(capitalizedWordsString)

//Challenge 2
let num = 1;
while (num <= 10) {
    const isDivisibleBy3 = num % 3 === 0;
    console.log(`${num} is divisible by 3: ${isDivisibleBy3 ? 'True' : 'False'}`);
    
    num++;
}
//Extra Challenge FizzBuzz
let f = 1;
while (f <= 40) {
    let output = ''
    if (f % 3 === 0 && f % 5 === 0) {
        output = 'FizzBuzz'
    } else if (f % 3 === 0) {
        output = 'Fizz'
    } else if (f % 5 === 0) {
        output = 'Buzz'
    } else {
        output = f.toString();
    }
    console.log(output)
    
    f++
}

