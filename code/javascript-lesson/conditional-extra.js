// JS Assignment #3 Extra challenge
// Add anothe variable isFunny
const movieTitle = "Squid Game"
const isScary = false
const isRomantic = false
const isFunny = true

if (isFunny == true) {
    if (isScary == true && isRomantic == true) {
        console.log(`${movieTitle} is both romantic and scary and funny`)
    } else if (isScary == false && isRomantic == true)  {
        console.log(`${movieTitle} is romantic and funny`)
    } else if (isScary == true && isRomantic == false) {
        console.log(`${movieTitle} is scary and funny`)
    } else {
        console.log(`${movieTitle} is neither romantic nor scary but funny though`)
    } 
} else {
    if (isScary == true && isRomantic == true) {
        console.log(`${movieTitle} is both romantic and scary but not funny`)
    } else if (isScary == false && isRomantic == true)  {
        console.log(`${movieTitle} is romantic but not funny`)
    } else if (isScary == true && isRomantic == false) {
        console.log(`${movieTitle} is scary but not funny`)
    } else {
        console.log(`${movieTitle} is neither romantic nor scary and also not funny`)
    } 
}