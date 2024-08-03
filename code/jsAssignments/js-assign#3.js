//JS ASSIGNMENT #3 - Conditionals
// Challenge #1

const movieTitle = "Interstellar"
const isScary = true
const isRomantic = false

if (isScary && isRomantic) {
    console.log(`${movieTitle} is both romantic and scary!`)
} else if (isRomantic) {
    console.log(`${movieTitle} is romantic.`)
} else if (isScary) {
    console.log(`${movieTitle} is scary.`)
} else {
    console.log(`${movieTitle} is neither romantic nor scary.`)
}

// Extra Challenge

const isFunny = true

if (isScary && isRomantic && isFunny) {
    console.log(`${movieTitle} is funny, romantic and scary!`)
} else if ((isRomantic && isFunny) || (isScary && isFunny)) {
    console.log(`${movieTitle} is a little funny.`)
} else if ((isRomantic && isScary) || (isScary && isFunny)) {
    console.log(`${movieTitle} is somewhat scary.`)
}else {
    console.log(`${movieTitle} is neither romantic, scary or funny.`)
}