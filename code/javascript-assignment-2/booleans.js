// Challenge 1
const personAge = 65

const isAdult = Boolean(personAge>18)
const isElderly = Boolean(personAge>60)

console.log(`Is this person an adult? ${isAdult}`)
console.log(`Is this person elderly? ${isElderly}`)

if (personAge < 18) {
    console.log('This person is a child')
}else if(60 > personAge > 18){
            console.log('This person is an adult')
}else if(personAge > 60){
    console.log('This person is elderly')
} 


// Challenge 2
let lyric = "Queen of my heart"

const includesLove = lyric.includes("love")

let includesHeart = lyric.includes("heart")

let includesLife = lyric.includes("life")

let includesBaby = lyric.includes("baby")

let includesYeah = lyric.includes("yeah")

let isTypical = Boolean(includesLove || includesHeart || includesLife || includesBaby || includesYeah)

console.log(isTypical)

let isVeryTypical = Boolean(includesLove && includesHeart && includesLife && includesBaby && includesYeah)

console.log(isVeryTypical)

if (isTypical){
    console.log("This song is typical")
} else if (isVeryTypical) {
    console.log("This song is very typical")
} else {
    console.log("This song is not typical")
}

