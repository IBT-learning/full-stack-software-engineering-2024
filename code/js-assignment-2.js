const personAge = 20;
const isAdult = personAge >= 18;
const isElderly = personAge >=60;
console.log(`Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`);

if (personAge <=18) {
    console.log("This person is a child");
}
else if (personAge >=60) {
    
console.log("This person is an elderly");
}

else {
    console.log("This person is adult");
}

const lyric = "Hosanna Bukole Alleluia Hosanna Hosanna Bukole Alleluia Hosanna Hosanna Ni mambo Alleluia Hosanna Hosanna Ni mambo love baby life yeah"

const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLife = lyric.includes("life")
const includesBaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah") 
const isTypical = includesLove || includesHeart || includesBaby || includesYeah
const isVeryTypical = includesLove && includesHeart && includesBaby && includesYeah
 console.log(includesLove)
console.log(includesHeart)
console.log(includesBaby)
console.log(includesYeah)
console.log(isTypical)
console.log(isVeryTypical)

if (isVeryTypical) {
    console.log("this song is  very typical")
}
else if (isTypical) {
    console.log("This song is typical")
}
else{
    console.log("This song is not typical")
}
  