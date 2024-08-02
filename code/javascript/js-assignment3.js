const movieTitle="Rebel Moon"
const isScary=true
const isRomantic=false

// conditions
if(isScary&&isRomantic){
    console.log(`${movieTitle} is both romantic and scary!`)
}else if(isRomantic){
    console.log(`${movieTitle} is romantic`)
}else if(isScary){
    console.log(`${movieTitle} is scary`)
}else{
    console.log(`${movieTitle} is neither romantic nor scary`)
}




// Extra challenge


// const movieTitle="Rebel Moon"
// const isScary=true
// const isRomantic=false
const isFunny=true

// conditions
if(isScary && isRomantic && isFunny){
    console.log(`${movieTitle} is romantic, scary and funny!`)
}else if(isRomantic && isFunny){
    console.log(`${movieTitle} is both romantic and funny!`)

}else if(isScary && isFunny){
    console.log(`${movieTitle} is both scary and funny`)

}else if(isScary && isRomantic){
    console.log(`${movieTitle} is both scary and romantic`)

}else if(isFunny){
    console.log(`${movieTitle} is funny`)

}else if(isScary){
    console.log(`${movieTitle} is scary`)

}else if(isRomantic){
    console.log(`${movieTitle} is romantic`)

}else {
    console.log(`${movieTitle} is not romantic, scary, or funny`)

}