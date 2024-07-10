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

const movieTitle = "How to ruin love"  // How to ruin love is both romantic and funny but not scary
const isScary = false
const isRomantic = true
const isFunny = true

if (!isScary && isRomantic && isFunny){
    console.log(`${movieTitle} is both romantic and funny but not scary`)
} else if(isRomantic) {
    console.log(`${movieTitle} is romantic`)
} else if(isScary) {
    console.log(`${movieTitle} is scary`)
} else if(isFunny){
    console.log(`${movieTitle} is funny`)
} else if(isFunny && !isScary){
    console.log (`${movieTitle} is funny and not scary`)
} else {
    console.log(`${movieTitle} is neither scary, romantic nor funny`)
}
