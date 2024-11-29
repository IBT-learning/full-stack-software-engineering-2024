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

// for (word of wordList) {
//   let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
//   finalWordList.push(capitalizeWord);
// }
// console.log(finalWordList); //not working

// for (let i = 11; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   console.log(i);
// }


for (let i = 11; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5===0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else console.log(i);
}