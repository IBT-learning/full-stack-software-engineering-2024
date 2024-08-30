// Challenge #1

// assign it a string with the title of a movie you like

const movieTitle='Power Book'

const isScary = true

const isRomantic = false

if (isScary && isRomantic) {
    console.log(`This movie, ${movieTitle} is both romantic and scary!`);
    
}else if (isRomantic) {
    console.log(`This movie, ${movieTitle} is romantic`);
} else if(isScary) {
    console.log(`This movie, ${movieTitle} is scary`);
    
}else {
    console.log(`This movie, ${movieTitle} is neither romantic nor scary!`);
}

// Extra Challenge
// add another variable
const isFunny=true

// conditional statement using nested if
if (isScary && isRomantic && isFunny) {
    console.log(`This movie, ${movieTitle} is  romantic, funny and scary!`);
}else if(isRomantic && isScary){
    if (!isFunny) {
        console.log(`This movie, ${movieTitle} is scary and romantic but not funny`);
    }
}else if(isRomantic && isFunny){
    if (!isScary) {
        console.log(`This movie, ${movieTitle} is romantic and funny but not scary`);
    }
}else if(isScary && isFunny ){}
    if (!isRomantic) {
        console.log(`This movie, ${movieTitle} is scary and funny but not romantic`);
}else if (isRomantic) {
    console.log(`This movie, ${movieTitle} is romantic`);
} else if(isScary) {
    console.log(`This movie, ${movieTitle} is scary`);
}else if (isFunny){
    console.log(`This movie, ${movieTitle} is funny`);

}else {
    console.log(`This movie, ${movieTitle} is neither romantic, funny nor scary!`);
}