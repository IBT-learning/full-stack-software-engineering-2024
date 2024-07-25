// challenge 1
const movieTitle = "Echoes of Eternity" 
const isScary = false
const isRomantic = false

if (isScary && isRomantic) {
    console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic) {
    console.log(`${movieTitle} is romantic`);
} else if (isScary) {
    console.log(`${movieTitle} is scary`);
} else {
    console.log(`${movieTitle} is neither romantic nor scary`);
}


// extra challenge 1
const isFunny = false

if (isScary && isRomantic && isFunny) {
    console.log(`${movieTitle} is romantic, scary, and funny!`);
} else if (isScary && isRomantic) {
    console.log(`${movieTitle} is both romantic and scary!`);
} else if (isScary && isFunny) {
    console.log(`${movieTitle} is both scary and funny!`);
} else if (isRomantic && isFunny) {
    console.log(`${movieTitle} is both romantic and funny!`);
} else if (isScary) {
    console.log(`${movieTitle} is scary`);
} else if (isRomantic) {
    console.log(`${movieTitle} is romantic`);
} else if (isFunny) {
    console.log(`${movieTitle} is funny`);
} else {
    console.log(`${movieTitle} is neither romantic nor scary nor funny`);
}


// extra challenge 2
if (isFunny) {
    if (isScary && isRomantic) {
        console.log(`${movieTitle} is romantic, scary, and funny!`);
    } else if (isScary) {
        console.log(`${movieTitle} is both scary and funny!`);
    } else if (isRomantic) {
        console.log(`${movieTitle} is both romantic and funny!`);
    } else {
        console.log(`${movieTitle} is funny`);
    }
}
else if (isScary) {
    if (isRomantic) {
        console.log(`${movieTitle} is both romantic and scary!`);
    } else {
        console.log(`${movieTitle} is scary`);
    }
}
else if (isRomantic) {
    console.log(`${movieTitle} is romantic`);
}
else {
    console.log(`${movieTitle} is neither romantic nor scary nor funny`);
}

