//Challenge 1
const personAge = 47

const isAdult = Boolean(personAge>18)
const isElderly = Boolean(personAge>60)

console.log(`Is this person an adult? ${isAdult}`)
console.log(`Is this person elderly? ${isElderly}`)

//Extra Challenge

if (personAge<18)
    console.log('This person is a child')
else if (personAge>18 && personAge <= 60)
    console.log('This person is an adult')
else (personAge>60)
console.log('This person is elderly')

//Challenge 2

const lyric = "She got her own thing, that's why I love her. Miss Independent"
const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLife = lyric.includes("life")
const includesBaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah")

console.log("Includes 'love':", includesLove)
console.log("Includes 'heart':", includesHeart)
console.log("Includes 'life':", includesLife)
console.log("Includes 'baby':", includesBaby)
console.log("Includes 'yeah':", includesYeah)

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
console.log("Is Typical:", isTypical)

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah
console.log("Is Very Typical:", isVeryTypical)

//Extra Challenge

if (isVeryTypical) {
    console.log("This song is very typical")
} else if (isTypical) {
    console.log("This song is typical")
} else {
    console.log("This song is not typical")
}

const lyricsList = [
    "I just called to say I love you",
    "My heart will go on and on",
    "It's my life, it's now or never",
    "Hit me baby one more time",
    "love fills my heart and life, baby, oh yeah"
]

lyricsList.forEach(lyric => {
    const includesLove = lyric.includes("love")
    const includesHeart = lyric.includes("heart")
    const includesLife = lyric.includes("life")
    const includesBaby = lyric.includes("baby")
    const includesYeah = lyric.includes("yeah")

    const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
    const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah

    console.log(`Lyric: "${lyric}"`)
    if (isVeryTypical) {
        console.log("This song is very typical")
    } else if (isTypical) {
        console.log("This song is typical")
    } else {
        console.log("This song is not typical")
    }
})