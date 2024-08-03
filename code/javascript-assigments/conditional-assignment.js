// JS Conditionals Assignment #3
// Challenge 1
const movieTitle = "Game of thrones" 
const isScary = false
const isRomantic = true

if (isScary == true && isRomantic == true) {
    console.log(`${movieTitle} is both romantic and scary`)
} else if (isScary == false && isRomantic == true)  {
    console.log(`${movieTitle} is romantic`)
} else if (isScary == true && isRomantic == false) {
    console.log(`${movieTitle} is scary`)
} else {
    console.log(`${movieTitle} is neither romantic nor scary`)
} 
// Extra Challenge saved in another file()