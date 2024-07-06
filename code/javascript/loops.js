const wordList = [
  "every",
  "word",
  "in",
  "this",
  "array",
  "should",
  "be",
  "capitalized",
];

// const capitalizedWordList = [];
const finalWordList = "";

// for (word of wordList){
//     console.log(word)
// }

// for (word of wordList){
// let capitalWord = word.toUpperCase()
//     console.log (capitalWord)
// }

// for (word of wordList) {
//   let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
//   capitalizedWordList.push(capitalizeWord);
// }
// console.log(capitalizedWordList);

for (word of wordList) {
  let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
  finalWordList.push(capitalizeWord);
}
console.log(finalWordList); //not working 