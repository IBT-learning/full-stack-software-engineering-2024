// Challenge #1
const personAge = Math.floor(Math.random() * 100) // Extra challenge 1
console.log(personAge);
const isAdult = personAge > 18 && personAge < 60
const isElderly = personAge >= 60 
console.log(`Is this person an adult? ${personAge && isAdult}. Is this person elderly? ${personAge && isElderly}`);

// Extra challenge 2
if(personAge && isAdult){
    console.log("This person is an adult");
} else if(personAge && isElderly){
    console.log("This person is an elderly person");
} else{
    console.log("This person is a child");
}

// Challenge #2
const lyric = "Who should I give my love to, my respect, and my honour to?"
const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLive = lyric.includes("live")
const includesBaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah")
const isTypical = includesLove || includesHeart || includesLive || includesBaby || includesYeah
console.log(isTypical);
const isVeryTypical = includesLove && includesHeart && includesLive && includesBaby && includesYeah
console.log(isVeryTypical);
//  Extra challenge
if (isTypical){
    console.log("This song is typical");
}else if(isVeryTypical){
    console.log("This song is very typical");
} else{
    console.log("This song is not typical");
}