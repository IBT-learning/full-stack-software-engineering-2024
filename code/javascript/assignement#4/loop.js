
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
for (let i = 0; i < wordList.length; i++) {
   wordList[i] = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1);
}
    console.log(wordList);

    // explanation.......

//     i use wordList[i] == to gets the current word at index i. 

// wordList[i].charAt(0) == to gets the first character of the current word.
// toUpperCase()== to converts the first character to uppercase.
// wordList[i].slice(1) == to gets the rest of the word (from index 1 to the end).
//  + == to get the fully capitalized word for each string
// We use console.log == to print


//CHALLENG #2
/// Using a for loop:

for (let i = 1; i < 10; i++) {

    if (i % 3 === 0) {
        console.log(`${i} : yes`);
    } else {
        console.log(`${i} : no`);
    }

}
    
