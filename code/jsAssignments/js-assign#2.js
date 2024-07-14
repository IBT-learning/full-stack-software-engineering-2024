//JS ASSIGNMENT #2 - Booleans and conditionals.

// Challenge #1

const personAge = 65
const isAdult = personAge >= 18
const isElderly = personAge > 60
console.log(`Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`)

// Extra challenge
const personAge1 = 15
if (personAge1 > 60) {
    console.log('This person is elderly')
} else if (personAge1 > 18) {
    console.log('This person is an adult')
} else {
    console.log("This person is child")
}

// Challenge #2

const lyric = "I think of you, I haven't slept I think I do, but I don't forget My body moves, goes where I will But though I try, my heart stays still It never moves, just won't be led And so my mouth waters to be fed And you're always in my head my love"
const includesLove = lyric.includes("love")
const includesHeart = lyric.includes('heart')
const includesLife = lyric.includes("life")
const includesBaby = lyric.includes('baby')
const includesYeah = lyric.includes('yeah')

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah
console.log(isTypical)
console.log(isVeryTypical)

// Extra Challenge

if (isVeryTypical) {
    console.log('This song is very typical')
} else if (isTypical) {
    console.log("This song is typical")
} else ("This song is not typical")