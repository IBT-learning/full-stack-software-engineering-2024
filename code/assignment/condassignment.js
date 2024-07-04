const movieTitle = ("The Proposal")
const isScary = Boolean (false)
const isRomantic = Boolean (true)
const isFunny = Boolean (true)

if (isFunny == true && isScary == true && isRomantic == true){
    console.log (`${movieTitle} is funny, scary, and romantic`)
}else if (isRomantic == true && isScary == true){
    console.log (`${movieTitle} is both romantic and scary`)
} else if (isRomantic == true && isFunny == true){
    console.log (`${movieTitle} is romantic and funny`)
} else if (isFunny == true && isScary == true){
    console.log (`${movieTitle} is funny and scary`)
} else if (isRomantic == true){
    console.log (`${movieTitle} is romantic`)
}else if (isFunny == true){
    console.log (`${movieTitle} is funny`)
} else if  (isScary == true){
    console.log (` ${movieTitle} is scary`)
} else {
    console.log (`${movieTitle} is neither funny, scary, nor romantic`)
}

