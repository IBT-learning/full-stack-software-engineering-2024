//Challenge #1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
for(word of wordList){
    console.log(word.toUpperCase())
}

for(word of wordList){
    console.log(word.slice(0,1).toUpperCase() + word.slice(1))
}

//Challenge 2

for(i=1; i<=10;i++){
    // console.log(i)
    if(i%3==0){
        console.log(`${i} is divisible by 3: true`)
    }
}