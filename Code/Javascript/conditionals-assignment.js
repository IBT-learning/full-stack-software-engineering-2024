const movieTitle = "Bridgerton" // Bridgerton is romantic
const isScary = false
const isRomantic = true

if (isScary && isRomantic){
    console.log(`${movieTitle} is both romantic and scary`)
} else if(isRomantic) {
    console.log(`${movieTitle} is romantic`)
} else if(isScary) {
    console.log(`${movieTitle} is scary`)
} else {
    console.log(`${movieTitle} is neither scary nor romantic`)
}

const movieTitle2 = "How to ruin love"  // How to ruin love is both romantic and funny but not scary
const isScary1 = false
const isRomantic1 = true
const isFunny = true

if (!isScary1 && isRomantic1 && isFunny){
    console.log(`${movieTitle2} is both romantic and funny but not scary`)
} else if(isRomantic1) {
    console.log(`${movieTitle2} is romantic`)
} else if(isScary1) {
    console.log(`${movieTitle2} is scary`)
} else if(isFunny){
    console.log(`${movieTitle2} is funny`)
} else if(isFunny && !isScary1){
    console.log (`${movieTitle2} is funny and not scary`)
} else {
    console.log(`${movieTitle2} is neither scary, romantic nor funny`)
}
