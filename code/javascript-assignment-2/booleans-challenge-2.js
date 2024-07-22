const lyric = "Board the cruise baby , lets cruise this life together"
const includesLove = lyric.includes("love")
console.log(includesLove);

const includesHeart = lyric.includes("heart")
console.log(includesHeart);

const includesLife = lyric.includes("life")
console.log(includesLife);

const includesBaby = lyric.includes("baby")
console.log(includesBaby);

const includesYeah = lyric.includes("yeah")
console.log(includesYeah);

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
console.log(isTypical);

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah
console.log(isVeryTypical);