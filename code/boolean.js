//challenge 1
const isAdult = 18
const isElderly = 60

let personAge = Math.floor(Math.random() * 100) + 1;
console.log(personAge)

if (personAge > 18){
    console.log("Is this person an adult? true")
} else { 
    console.log("Is this person eldery? false")
}

if (personAge != 18){
    console.log("Is this person an adult? false")
} else {
    console.log("Is this person an adult? true")
}

if (personAge < 18 && personAge <= 18){
    console.log("Is this person an adult? true")
}else {
    console.log("Is this person an adult? false")
}

if (personAge <= 60 || personAge <= 18){
    console.log("Is this person an adult? true")
}else {
    console.log("Is this person an adult? false")
}

//Challange 2
const lyric = "i need somebody who can  love me at my worse, know i'm not perfact but i hope you see my worth"

const includesLove = lyric.includes("love")
const includesHeart = lyric.includes("heart")
const includesLife = lyric.includes("life")
const includesBaby = lyric.includes("baby")
const includesYeah = lyric.includes("yeah")

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah

if (isVeryTypical) {
    console.log("This song is very typical");
} else if (isTypical) {
    console.log("This song is typical");
} else {
    console.log("This song is not typical");
}