const movieTitle = "The Broadway"

const isScary = false
const isRomantic = true
const isFunny = true

if (movieTitle == isRomantic && movieTitle == isScary && movieTitle == isFunny){
    console.log("The Broadway is both romantic, funny and scary")
}
else if (movieTitle != isRomantic || movieTitle == isScary) {
    console.log("The Broadway is a romantic movie")
}
else if (movieTitle != isScary && movieTitle == isFunny){
    console.log("The Broadway is a funny movie")
}
else if (movieTitle == isRomantic && movieTitle == isFunny){
    console.log("The Broadway is a funny and romantic movie")
}
else {
    console.log("The Broadway is neither romantic, funny nor scary")
}