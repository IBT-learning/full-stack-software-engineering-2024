// challenge 1
const personAge = 59;

const isAdult = (personAge >= 18 && personAge < 60);
const isElderly = (personAge >= 60 );

console.log(`Is this person an adult? ${isAdult}. Is this person an elderly? ${isElderly}`);


// extra challenge 1 
let personAge2 = Math.floor(Math.random() * (101 - 1)) + 1;
console.log(personAge2);
 if ( personAge2 < 18) {
    console.log("This person is a child");
} else if (personAge2 >= 18 && personAge2 < 60) {
    console.log("This person is an adult");
} else if (personAge2 >= 60) {
    console.log("This person is elderly");
}


// challenge 2
const lyrics = `I hear the ticking of the clock
I'm lying here my baby, the room's pitch dark
I wonder where you are tonight
No answer on the telephone`

const includesLove = lyrics.includes("love");
const includesHeart = lyrics.includes("heart");
const includesLife = lyrics.includes("life");
const includesBaby = lyrics.includes("baby");
const includesYeah = lyrics.includes("yeah");

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log(isTypical);

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log(isVeryTypical);

// extra challenge 2a
if (isVeryTypical) {
    console.log("This song is very typical");
} else if (isTypical) {
    console.log("This song is typical");
} else {
    console.log("This song is not typical");
} 

// extra challenge 2b
const myLyrics = `You're the beat in my heart, baby
love flows through every part, yeah
life feels complete when you're near
Oh baby, you're all I hold dear`

const includesLove2 = myLyrics.includes("love");
const includesHeart2 = myLyrics.includes("heart");
const includesLife2 = myLyrics.includes("life");
const includesBaby2 = myLyrics.includes("baby");
const includesYeah2 = myLyrics.includes("yeah");

const isTypical2 = includesLove2 || includesHeart2 || includesLife2 || includesBaby2 || includesYeah2;
console.log(isTypical2);

const isVeryTypical2 = includesLove2 && includesHeart2 && includesLife2 && includesBaby2 && includesYeah2;
console.log(isVeryTypical2);

if (isVeryTypical2) {
    console.log("This song is very typical");
} else if (isTypical2) {
    console.log("This song is typical");
} else {
    console.log("This song is not typical");
}