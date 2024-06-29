const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
// prints the word list
for(word of wordList){
    console.log(word)
}

// prints the uppercase if the wordList
for(word of wordList){
    
    let capitalList = word.toUpperCase()
    console.log(capitalList)
}
// logs only te first capitalized letter
for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i]
    let capitalList

    if(word.length > 0 ){
     capitalList = word.charAt(0).toUpperCase() + word.slice(1);
    } else {
        capitalList = word;
    }
    console.log(capitalList)
}

//Challenge 2
for (let i = 0; i <= 10; i++)
    if (i % 3 == 0){
        console.log("true")
    }
    else {
        console.log("false")
    }



//fiz buzz challenge
const randomNum = Math.floor(Math.random() * 100) + 1

console.log('Random number selected: '+ randomNum)
for (let i = 1; i<=randomNum; i++){
   if ( i % 3 === 0 && i % 5 === 0){
    console.log("fizzBuzz")
    }
     else if(i % 3 === 0){
      console.log("Fizz")
     } 
    else if (i % 5 === 0) {
       console.log("Buzz")
     } 
    else { 
       console.log(i)
    }
}