const movieTitle = "Me Before You"
const isScary = false
const isRomantic = true

if (isRomantic && isScary) {
    console.log(`${movieTitle} is both romantic and scary!`)
} else if (isRomantic) {
    console.log(`${movieTitle} is romantic`)
} else if (isScary) {
    console.log(`${movieTitle} is scary`)
} else {
    console.log(`${movieTitle} is neither romantic nor scary`)
}

// Extra Challenge
const isFunny = true

if (isRomantic && isScary) {
    if (isFunny) {
        console.log(`${movieTitle} is both romantic, scary, and funny!`)
    } else {
        console.log(`${movieTitle} is both romantic and scary!`)
    }
} else if (isRomantic) {
    if (isFunny) {
        console.log(`${movieTitle} is romantic and very funny`)
    } else {
        console.log(`${movieTitle} is romantic`)
    }
} else if (isScary) {
    if (isFunny) {
        console.log(`${movieTitle} is scary and funny`)
    } else {
        console.log(`${movieTitle} is scary`)
    }
} else {
    if (isFunny) {
        console.log(`${movieTitle} is funny`)
    } else {
        console.log(`${movieTitle} is neither romantic, scary, nor funny`)
    }
}

