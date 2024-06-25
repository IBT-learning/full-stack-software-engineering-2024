// JS Boolean Assignment #2
// Challenge 1
const personAge = 56
const isAdult = personAge > 18 && personAge <= 60
const isElderly = personAge > 60

console.log(`Is this person an adult? ${isAdult}`) // true
console.log(`is this person elderly? ${isElderly}`) // false
// Extra challenge in another file


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
// Extra Challenge in another file 


// JS Conditionals Assignment #3
// Challenge 1
const movieTitle = "Game of thrones" 
const isScary = false
const isRomantic = true

if (isScary == true && isRomantic == true) {
    console.log(`${movieTitle} is both romantic and scary`)
} else if (isScary == false && isRomantic == true)  {
    console.log(`${movieTitle} is romantic`)
} else if (isScary == true && isRomantic == false) {
    console.log(`${movieTitle} is scary`)
} else {
    console.log(`${movieTitle} is neither romantic nor scary`)
} 
// Extra Challenge in another file 



