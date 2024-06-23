//Challenge 1
const personAge = Math.floor (Math.random() * 101)
const isAdult = personAge >= 18;
const isElderly = personAge >=60;
const adultOrElderly = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`

console.log(personAge);
console.log(adultOrElderly);

if(personAge < 18){
    console.log("This person is a child")
} else if (personAge > 18 && personAge < 60){
    console.log("This person is an adult")
} else {
    console.long("This person is elderly")
};

//Challenge 2 
const lyric = "But you treat me like a stranger, and that feels so rough";

const lowerCaseLyric = lyric.toLowerCase();

let includesLove = lyric.includes("love");
let includesHeart = lyric.includes("heart");
let includesLife = lyric.includes("life");
let includesBaby = lyric.includes("baby");
let includesYeah = lyric.includes("yeah");

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;

console.log(isTypical);

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;

console.log(isVeryTypical);

if (isTypical === true){
    console.long('This song is typical')
} else if (isVeryTypical === true){
    console.log("This song is very typical")
} else {
    console.log("This song is not typical")
};