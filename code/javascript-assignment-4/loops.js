// Challenge 1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

for(word of wordList){
  console.log(word)
}

for(word of wordList){
    console.log(word.toUpperCase())
  }
  

for (let i=0; i<wordList.length; i++) {
   console.log(wordList[i] = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1)) 
}

// Challenge 2

for (let i=1; i<=10; i++){
    console.log(i)
}

for (let i=1; i<=10; i++){
  if (i % 3 == 0) {
    let yes = Boolean(i)
   console.log(`${i} = ${yes}`)
  }
}

for(let i=1; i<=40; i++){
  if(i % 15 == 0){
    console.log(`${i} = fizzbuzz`)
  } else if (i % 5 == 0){
    console.log(`${i} = buzz`)
  } else if (i % 3 == 0){
    console.log(`${i} = fizz`)
  } else {console.log(i)}
}