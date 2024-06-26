// challenge 1
const personAge = Math.floor(Math.random() * 100) + 1
if(personAge < 18){
    console.log("This person is a child " + personAge)
}
else if( personAge < 60 ){
    console.log( "This person is an adult " + personAge)
}
else {
    console.log("This person is elderly " + personAge) 
}


// challenge 2
let  lyric = "Nothing is gonna change my life"
let includesLove = lyric.includes("love")
let includesHeart = lyric.includes("heart")
let includesLife = lyric.includes("life")
let includesBaby = lyric.includes("baby")
let includesYeah = lyric.includes("yeah")

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
// console.log (isTypical)
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah
// console.log (isVeryTypical)

if (isTypical){
 console.log("This song is typical" )
}
else if(isVeryTypical){
    console.log("This song is very typical")
}
else{
    console.log("This song is not typical")
}