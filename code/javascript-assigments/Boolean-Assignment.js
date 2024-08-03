// JS Boolean Assignment #2
// Challenge 1
const personAge = 56
const isAdult = personAge > 18 && personAge <= 60
const isElderly = personAge > 60

console.log(`Is this person an adult? ${isAdult}`) // true
console.log(`is this person elderly? ${isElderly}`) // false
// Extra challenge in another file(Boolean1-extra.js )


// JS Boolean Assignment #2
// Challenge 2
const lyric = "Say a little prayer my sweet love, Dreams will take me there, Where the skies are blue (whoa, yeah), To see you once again (oh my love), Overseas from coast to coast, To find the place I love the most, Where the fields are green, To see you once again, my love",
               
const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLife = lyric.includes("life")
const includesBaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah")

const isTypical = includesLove == true || includesHeart == true || includesBaby == true || includesLife == true || includesYeah == true
console.log(isTypical)

const isVeryTypical = includesLove == true && includesHeart == true && includesBaby == true && includesLife == true && includesYeah && true
console.log(isVeryTypical)
// Extra Challenge saved in another file(Boolean2-extra.js)




