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

    // appending the capitalize word to an array
    newWordList.push(capitalizeWord)
}
console.log(newWordList)

// Challenge #2

//using the classic loop
for (let i = 0; i <10; i++) {
    
    if (i%3==0) {
        console.log(`${i}%3==0 - True`);
        
    } else {
        console.log(`${i}%3==0 - False`);
    }
}


// using the while loop
let i
i=0
while (i<10) {
    i++    
    if (i%3==0) {
        console.log(`${i}%3=0 - True`);
    } else {
        console.log(`${i}%3==0 - False`);
    }
}


// Extra challenges
FizzBuzz=[]
for (let index = 1; index <= 40; index++) {
    
   if (index%3==0 && index%5==0) {
    FizzBuzz.push('FizzBuzz')
   } else if(index%5==0){
    FizzBuzz.push('Buzz')
   }else if (index%3==0){
    FizzBuzz.push('Fizz')
   }else{
    FizzBuzz.push(index)
   }
}
console.log(FizzBuzz)