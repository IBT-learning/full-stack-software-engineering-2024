// JavaScript Assignment #4: Loops

// Challenge #1

const wordList  = ["Every", "word", "in", "this", "array", "should", "be", "capitalized"]

for (word of wordList) {
    console.log(word.toUpperCase())
}

//Extra Challenge 1
const wordListNew = []

for (word of wordList) {
   let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
   wordListNew.push(newWord)
}
console.log(wordListNew)

////Extra Challenge 1b
let wordListNewer = ""   // Used let instead of const to allow for reassignment of primitive type

for (word of wordList) {
    let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase()
    wordListNewer += " " + newWord
}
console.log(wordListNewer)



//////////////////////////////////////////////////////////////////////////////////////////////

// Challenge 2

let count = 1

while (count <= 10) {
    if (count % 3 == 0) {
        console.log(`${count} is divisible by 3`)
    } else {
        console.log(count)
    }
    count ++
}

// Extra Challenge

for (i = 1; i <= 40; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`${i}, FizzBuzz`)
    } else if (i % 5 == 0) {
        console.log(`${i}, Buzz`)
    } else if (i % 3 == 0) {
        console.log(`${i}, Fizz`)
    } else {
        console.log(i)
    }
}