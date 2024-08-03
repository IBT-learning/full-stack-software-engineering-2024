// declare lyric as an array element
const lyric = [
    "so i say a little prayer my sweet love, hope my dreams will take me there, Where the skies are blue (whoa, yeah), To see you once again (oh my love), Overseas from coast to coast, To find the place I love the most, Where the fields are green, To see you once again, my love",
    "my heart was there for you to take, but you chose to shatter it, my life was ruining right in front of you but you chose to ignore me, i know u were gone but i was still hoping for your love, oh yeah baby! now, i know baby that you are up to no good",
    "What would I do without your smart mouth? Drawing me in, and you kicking me out, You've got my head spinning, no kidding, I can't pin you down, What's going on in that beautiful mind? I'm on your magical mystery ride And I'm so dizzy, don't know what hit me, but I'll be alright"
]
// Lyrics 1 of index 0
const includesLove = lyric[0].includes("love")
const includesHeart = lyric[0].includes("heart")
const includesLife = lyric[0].includes("life")
const includesBaby = lyric[0].includes("baby")
const includesYeah = lyric[0].includes("yeah")
// isTypical
const isTypical = includesLove == true || includesHeart == true || includesBaby == true || includesLife == true || includesYeah == true
console.log(isTypical)
// isVeryTypical
const isVeryTypical = includesLove == true && includesHeart == true && includesBaby == true && includesLife == true && includesYeah && true
console.log(isVeryTypical)
// Conditional statement whether its tyical or not
if (isTypical == true) {
console.log(`This song is typical`)
} else if (isVeryTypical == true) {
console.log(`This song is very typical`)
} else {
console.log(`This song is not typical`)
}
// Lyrics 2 of index 1
const includesLove1 = lyric[1].includes("love")
const includesHeart1 = lyric[1].includes("heart")
const includesLife1 = lyric[1].includes("life")
const includesBaby1 = lyric[1].includes("baby")
const includesYeah1 = lyric[1].includes("yeah")
// isTypical
const isTypical1 = includesLove1 == true || includesHeart1 == true || includesBaby1 == true || includesLife1 == true || includesYeah1 == true
console.log(isTypical1)
// isVeryTypical
const isVeryTypical1 = includesLove1 == true && includesHeart1 == true && includesBaby1 == true && includesLife1 == true && includesYeah1 && true
console.log(isVeryTypical1)
// Conditional statement whether its typical or not
if (isTypical1 !== true) {
console.log(`This song is typical`)
} else if (isVeryTypical1 == true) {
console.log(`This song is very typical`)
} else {
console.log(`This song is not typical`)
}
// Lyrics 3 of index 2
const includesLove2 = lyric[2].includes("love")
const includesHeart2 = lyric[2].includes("heart")
const includesLife2 = lyric[2].includes("life")
const includesBaby2 = lyric[2].includes("baby")
const includesYeah2 = lyric[2].includes("yeah")
// isTypical
const isTypical2 = includesLove2 == true || includesHeart2 == true || includesBaby2 == true || includesLife2 == true || includesYeah2 == true
console.log(isTypical2)
// isVeryTypical
const isVeryTypical2 = includesLove2 == true && includesHeart2 == true && includesBaby2 == true && includesLife2 == true && includesYeah2 && true
console.log(isVeryTypical2)
// Conditional statememt whether its typical or not
if (isTypical2 == true) {
console.log(`This song is typical`)
} else if (isVeryTypical2 == true) {
console.log(`This song is very typical`)
} else {
console.log(`This song is not typical`)
}