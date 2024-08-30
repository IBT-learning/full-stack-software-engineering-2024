// Challenge #1

const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

// using a for - of- loop to loop through the array

for (const word of wordList) {
    
    // logging to loop through each word
    console.log(word);

    // logging within the loop, capitalize each word
    console.log(word.toLocaleUpperCase());
}


// extra challenges
const newWordList=[]

for (const word of wordList) {
    // capitalize the first character of each word
    const capitalizeWord=word.slice(0,1).toUpperCase() + word.slice(1)
    console.log(capitalizeWord)

    // appending the capitalize word to a 
    newWordList.push(capitalizeWord)
}
console.log(newWordList)