const movieTitle = "secret society"
const isScary = true
const isRomantic = false
const isFunny = true

if (isRomantic == true && isScary == true && isFunny == true) {
    console.log( movieTitle + " is funny,romantic and scary!")

}
else if (isRomantic == true && isFunny ==true) {
    console.log( movieTitle + " is both romantic and funny")
}
else if (isScary == true && isRomantic == true) {
    console.log( movieTitle +" is both scary and romantic")
}
else if (isScary == true && isFunny == true) {
    console.log( movieTitle +" is both scary and funny")
}
else if (isScary == true) {
    console.log( movieTitle +" is scary")
}
else if (isRomantic == true) {
    console.log( movieTitle +" is romantic")
}
else if (isFunny == true) {
    console.log( movieTitle +" is funny")
}
else {
    console.log(movieTitle +" is neither romantic nor scary nor funny ")
}