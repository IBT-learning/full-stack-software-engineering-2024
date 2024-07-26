const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
console.log(wordList);

//Write for... loop and capitalise each word
for (word of wordList) {
  let capitalizedWord = [word.toUpperCase() + word.slice(11)];
  console.log(capitalizedWord);
}

// Capitalizing first letter of each word
for (word of wordList) {
  let capitalizedFirstLetter = word.charAt(0).toUpperCase() + word.slice(1)

  console.log(capitalizedFirstLetter);
}

for (word of wordList) {
  let capitalizedWord = [word.toUpperCase() + word.slice(11)];
  let capitalizedWordsArray = []

  capitalizedWordsArray.push(capitalizedWord);
  console.log(capitalizedWordsArray);

  let capitalizedWordsString = " "
  capitalizedWordsString += capitalizedWord + " ";
  console.log(capitalizedWordsString);

}

//Challenge 2
console.log("Challenge 2............");

// Using "classic" for loop that will execute 10 times
for (let ngozi = 1; ngozi <= 10; ngozi++) {
    if (ngozi % 3 === 0) {
    console.log(`${ngozi}: yes`);
  } else {
    console.log(`${ngozi}: no`);
  }
}
