// Challenge 1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

for (const word of wordList) {
    console.log(word.toUpperCase());
  }
 
  for (const word of wordList) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(capitalizedWord);
  }


  // Challenge 2

  // Using while loop

  let count = 12;
while (count < 22) {
  if (count % 3 === 0) {
    console.log(`${count} is divisible by 3: yes`);
  } else {
    console.log(`${count} is divisible by 3: no`);
  }
  count++;
}


  
