const movieTitle = "Woman King"
const isScary = false
const isRomantic = false

if(isRomantic && isScary){
 console.log(`${movieTitle} is both romantic and scary!`)
} else if(isRomantic){
    console.log(`${movieTitle} is romantic`)
} else if(isScary){
    console.log(`${movieTitle} is scary`)
} else {
    console.log(`${movieTitle} is neither romantic nor scary`)
}
