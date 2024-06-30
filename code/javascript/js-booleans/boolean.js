console.log('CHALLENGE #1');
//Create a constant variable called personAge and assign it a number between 1 and 100
const personAge = 54;

//Create a constant variable called isAdult and assign it a boolean expression determining whether that number is above or below 18
const isAdult = personAge >= 18;
console.log(isAdult);

//Create a constant variable called isElderly and assign it a boolean expression determining whether that number is above or below 60
const isElderly = personAge >= 60;
console.log(isElderly);

//Create a template string that will read like this: Is this person an adult? true. Is this person elderly? false (but fill in the correct variables for true and false)
console.log(`Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`);
console.log("");

console.log("Extra challenges:");
//Make personAge a random number between 0 and 100. (You may want to log the number to make sure your booleans are evaluating correctly!)
const randomNum = Math.floor(Math.random() * 101); //101 is used so as to accurately scale the random numbers between 0 - 100.
console.log(`Random number is ${randomNum}`);
console.log("");

const isAdultRandomNum = randomNum >=18;
const isElderlyRandomNum = randomNum >=60;

console.log(`Is ${randomNum} Adult? ${isAdultRandomNum}`);
console.log(`Is ${randomNum} Elderly? ${isElderlyRandomNum}`);
console.log("");

//Use a conditional statement to log "This person is a child" or "This person is an adult" or "This person is elderly" to the console.
if (randomNum >= 60){
   console.log("This person is elderly" );
}
else if (randomNum >= 18){
    console.log("This person is an adult");
}

else {
    console.log("This person is a child");
}
console.log("");

console.log("CHALLENGE #2");
//create a constant variable called lyric and assign it your favorite song lyric.
const lyric = "If this isn't love";

//create a constant variable called includesLove and assign it a JS expression determining whether your lyric includes the word "love"
const includesLove = lyric.includes("love");
console.log(includesLove);

//do the same thing with the words "heart", "life", "baby", and "yeah".
const includesHeart = lyric.includes("heart");
console.log(includesHeart);

const IncludesLife= lyric.includes("life");
console.log(IncludesLife);

const IncludesBaby = lyric.includes("baby");
console.log(IncludesBaby);

const IncludesYeah = lyric.includes("yeah");
console.log(IncludesYeah);

//create and log a constant variable called isTypical and assign it a boolean expression determining whether ANY of the conditions are true
const isTypical = includesLove || includesHeart || IncludesLife || IncludesBaby || IncludesYeah;
console.log(isTypical);

//create and log a constant variable called isVeryTypical and assign it a boolean expression determining whether ALL of the conditions are true
const isVeryTypical = includesLove && includesHeart && IncludesLife && IncludesBaby && IncludesYeah;
console.log(isVeryTypical);
console.log("");

console.log("Extra challenges");
//Use a conditional statement to log "This song is typical" or "This song is very typical" or "This song is not typical" to the console.
if(isTypical){
    console.log("This song is typical");
}

else if(isVeryTypical){
    console.log("This song is very typical");
}
else{
    console.log("This song is not typical");
}

//Find (or write!) a song lyric that meets each condition. Repeat the previous step for each lyric.
//condition - This song is typical
const lyric1 = "God sent me an angel Up from above That's gonna love me for life ight as well be perfect only because It's the only way I can describe, so Cause I never felt like this baby If this isn't love"

const lyricLove = lyric1.includes("love")
const lyricHeart= lyric1.includes("heart")
const lyricLife = lyric1.includes("life")
const lyricBaby = lyric1.includes("baby")
const lyricYeah = lyric1.includes("yeah")

const isTypical1 = lyricLove || lyricHeart || lyricLife || lyricBaby || lyricYeah
const isVeryTypical1 = lyricLove && lyricHeart && lyricLife && lyricBaby && lyricYeah

if(isVeryTypical1){
    console.log("This song is very typical");
}
 else if (isTypical1){
    console.log("This song is typical");
}

else{
    console.log("This song is not typical");

}

//Condition - This song is very typical
const lyric2 = "That's gonna love me for life yeah ight as well be perfect only because It's the only way my heart can describe, so Cause I never felt like this baby If this isn't love"

const lyricLove2 = lyric2.includes("love")
const lyricHeart2 = lyric2.includes("heart")
const lyricLife2 = lyric2.includes("life")
const lyricBaby2 = lyric2.includes("baby")
const lyricYeah2 = lyric2.includes("yeah")

const isTypical2 = lyricLove2 || lyricHeart2 || lyricLife2 || lyricBaby2 || lyricYeah2
const isVeryTypical2 = lyricLove2 && lyricHeart2 && lyricLife2 && lyricBaby2 && lyricYeah2

if(isVeryTypical2){
    console.log("This song is very typical");
} 
else if (isTypical2){
    console.log("This song is typical");
}


else{
    console.log("This song is not typical");

}

//Condition - This song is not typical
const lyric3 = "That's gonna me forever as well be perfect only because It's the only way I can describe, so Cause I never felt like this before isn't this beautiful"

const lyricLove3 = lyric3.includes("love")
const lyricHeart3 = lyric3.includes("heart")
const lyricLife3 = lyric3.includes("life")
const lyricBaby3 = lyric3.includes("baby")
const lyricYeah3 = lyric3.includes("yeah")

const isTypical3 = lyricLove3 || lyricHeart3 || lyricLife3 || lyricBaby3 || lyricYeah3
const isVeryTypical3 = lyricLove3 && lyricHeart3 && lyricLife3 && lyricBaby3 && lyricYeah3

if(isVeryTypical3){
    console.log("This song is very typical");
}

else if (isTypical3){
    console.log("This song is typical");
}


else{
    console.log("This song is not typical");

}



