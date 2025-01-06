// Challenge #1
const personAge=Math.floor(Math.random()*101);
const isAdult =personAge >=18;
console.log(isAdult);
const isElderly =personAge >=60;
console.log(isElderly);
const message = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`;
console.log(message);
if (personAge < 18) {
    console.log("This person is a child");
} else if (personAge >= 18 && personAge < 60) {
    console.log("This person is an adult");
} else if (personAge >60){
    console.log("This person is elderly");
}


// Challenge #2
const lyric ="Uh Uh Uh, yeah, yeah, yeah,Oh na na na na, oh I love you baby yeah yeah";
const includesLove = lyric.includes("love");
const includesHeart = lyric.includes("heart");
const includesLife = lyric.includes("life");
const includesBaby = lyric.includes("baby");
const includesYeah = lyric.includes("yeah");
const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;

console.log(`Includes "love": ${includesLove}`);
console.log(`Includes "heart": ${includesHeart}`);
console.log(`Includes "life": ${includesLife}`);
console.log(`Includes "baby": ${includesBaby}`);
console.log(`Includes "yeah": ${includesYeah}`);
console.log(`Is typical: ${isTypical}`);
console.log(`Is very typical: ${isVeryTypical}`);


if (isVeryTypical) {
    console.log("This song is very typical");
} else if (isTypical) {
    console.log("This song is typical");
} else {
    console.log("This song is not typical");
}
