//Challenge 1 : capitalize each word in the array wordList using the forof loop
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
for (word of wordList) {
  console.log(word.toUpperCase());
}
// let capitalizedWordList = [];
for (word of wordList) {
  let firstLetter = word.charAt(0);
  let remainingLetters = word.slice(1);
  console.log(`${firstLetter.toUpperCase()}${remainingLetters}`);
}
// Challenge 2
arrayByThree = [];
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    arrayByThree.push(i);
  } else {
    arrayByThree.push("no");
  }
}
console.log(arrayByThree);

const fizzBuzz = [];
for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz.push("FizzBuzz");
  }
  if (i % 3 === 0) {
    fizzBuzz.push("Fizz");
  } else if (i % 5 === 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(i);
  }
}
console.log(fizzBuzz);
