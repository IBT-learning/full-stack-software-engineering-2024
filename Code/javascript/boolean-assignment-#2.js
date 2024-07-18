// CHALLENGE 2
let lyrics = "Usiniponipenda nitapendwa na nani?"
let includesLove = lyrics.includes("love")
console.log(includesLove) // false

let lyric = "My heart belong to you, don't you break it"
let includesHeart = lyric.includes("heart")
console.log(includesHeart) // true

let sentence = "In my life, I have had only one baby. Yeah"
let includesWords = sentence.includes("life", "baby", "yeah")
console.log(includesWords) // true

let word = "I had a baby whose heart had an issue. And yeah, she is still has much life"
const includesRoho = word.includes("heart")
const includesLife = word.includes("life")
const includesBaby = word.includes("baby")
const includesYeah = word.includes("yeah")

const isTypical = includesRoho || includesLife || includesBaby || includesYeah
console.log(`is Typical: ${isTypical}`) // true

const isVeryTypical = includesRoho && includesLife && includesBaby && includesYeah
console.log(`is Very Typical: ${isVeryTypical}`) // true

