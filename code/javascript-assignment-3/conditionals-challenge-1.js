const movieTitle = ("The designated driver")
const isScary = false
const isRomantic = true
if (isScary && isRomantic) {
    console.log("The designated driver is both romantic and scary!");
}
else if (isRomantic) {
    console.log("The designated driver is romantic");
}
else if (isScary) {
    console.log("The designated driver is scary");
}
else if (!isScary && isRomantic) {
    console.log("The movie is neither scary nor romantic");
}
