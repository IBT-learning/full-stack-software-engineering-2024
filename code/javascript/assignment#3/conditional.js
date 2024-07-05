
//step 1

const lyric = "I found a love for me. Darling, just dive right in ans follow my lead."

// step 2
const includeLove = lyric.includes("love")
const includeHeart = lyric.includes("heart")
const includeLife = lyric.includes ("life")
const includeBaby = lyric.includes ("baby")
const includeYeah = lyric.includes ("yeah")

//step 3
const isLoveTypical = includeLove ? `yes`: `no`
const isHeartTypical = includeHeart ? `yes`: `no`
const isLifeTypical = includeLife ? `yes`: `no`
const isBabyTypical = includeBaby ? `yes`: `no`
const isYeahTypical = includeYeah ? `yes`: `no`

//step 4
console.log(` is "love" typical? ${includeLove}`)
console.log(` is "Heart" typical? ? ${includeHeart}`);
console.log(` is "Life" typical? ${includeLife}`);
console.log(` is "Baby" typical? ${includeBaby}`);
console.log(` is "Yeah" typical? ${includeYeah}`);

// step 6

const isTypical = ( includeHeart || includeYeah ||includeLove || includeBaby || includeLife)
console.log(` is  the condition typical ${isTypical ? `yes`: `no`}`);

// for isVeryTypical
//step 7

const isVeryTypical = includeBaby && includeHeart && includeLife && includeLove && includeYeah
console.log(` ${includeBaby}`);
console.log(` ${includeHeart}`);
console.log(` ${includeLife}`);
console.log(` ${includeLove}`);
console.log(` ${includeYeah}`);

console.log(`is condition very typical to the lyrics ? ${isVeryTypical ? `yes`: `no`}`);





 /*
// const isTypical = lyric.includes("love", "heart", "life", "baby", "yeah")
// console.log(`is ${includeLove} found in it a typical ${isTypical}`);
// console.log(`is ${isTypical} found in the a typical ${lyric.includes(heart)}`);
// console.log(`is ${includeLife} found in the a typical ${isTypical}`);
// console.log(`is ${includeBaby} found in the a typical ${isTypical}`);
// console.log(`is ${includeYeah} found in the a typical ${isTypical}`);



// //console.log(`is it a typical ${lyric.includes} in `); */