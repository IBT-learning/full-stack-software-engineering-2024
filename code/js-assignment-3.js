const movieTitle = "Rush Hour"
const isScary = true
const isFunny = true
const isRomantic = false
if (isScary && isRomantic && isFunny) {
    console.log(`${movieTitle} is both romantic, funny and scary`)
}
else if (isRomantic && isScary ) {
    
console.log(`${movieTitle} is both romantic and scary`)
}
else if (isFunny && isScary) {
    console.log(`${movieTitle} is funny and scary`)
}
else if (isFunny && isRomantic) {
    console.log(`${movieTitle} is funny and romantic`)
}
else if (isRomantic) {
    console.log(`${movieTitle} is romantic`)
}
else if (isScary) {
    console.log(`${movieTitle} is scary`)
}
else if (isFunny) {
    console.log(`${movieTitle} is funny`)
}
else{
    console.log(`${movieTitle} is neither romantic, funny nor scary`)
}
