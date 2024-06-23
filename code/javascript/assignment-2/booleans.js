// Challenge #1

// Create a constant variable called personAge and assign it a number between 1 and 100
const personAge = 61;
const personAge2 = 20;
const personAge3 = 8;

// Create a constant variable called isAdult and assign it a boolean expression determining whether that number is above or below 18
const isAdult = personAge >= 18;
const isAdult2 = personAge2 >= 18;
const isAdult3 = personAge3 >= 18;
console.log("Person is an adult:", isAdult);
console.log("Person is an adult:", isAdult2);
console.log("Person is an adult:", isAdult3);

// Create a constant variable called isElderly and assign it a boolean expression determining whether that number is above or below 60
const isElderly = personAge >= 60;
const isElderly2 = personAge2 >= 60;
const isElderly3 = personAge3 >= 60;
console.log("Person is an elderly:", isElderly);
console.log("Person is an elderly:", isElderly2);
console.log("Person is an elderly:", isElderly3);

// Create a template string that will read like this: Is this person an adult? true. Is this person elderly? false (but fill in the correct variables for true and false)
const str = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`;
const strNew2 = `Is this person an adult? ${isAdult2}. Is this person elderly? ${isElderly2}`;
const strNew3 = `Is this person an adult? ${isAdult3}. Is this person elderly? ${isElderly3}`;
console.log(str);
console.log(strNew2);
console.log(strNew3);

// TIP: Make sure you test by changing the value of personAge to make sure it works for children, adults below 60, and adults over 60
// Extra challenges (you may do either or neither or both!)
// Make personAge a random number between 0 and 100. (You may want to log the number to make sure your booleans are evaluating correctly!)

// Use a conditional statement to log "This person is a child" or "This person is an adult" or "This person is elderly" to the console.

// const personAge = 61;

if (personAge < 18) {
  console.log("This person is a child");
} else if (personAge >= 18 && personAge < 60) {
  console.log("This person is an adult");
} else {
  console.log("This person is elderly");
}

// const personAge2 = 20;

if (personAge2 < 18) {
  console.log("This person is a child");
} else if (personAge2 >= 18 && personAge2 < 60) {
  console.log("This person is an adult");
} else {
  console.log("This person is elderly");
}

// const personAge3 = 8;

if (personAge3 <= 18) {
  console.log("This person is a child");
} else if (personAge3 >= 18 && personAge3 < 60) {
  console.log("This person is an adult");
} else {
  console.log("This person is elderly");
}

// Challenge #2

// create a constant variable called lyric and assign it your favorite song lyric.
const lyric =
  "Like a river flows surely to the sea, my love so it goes, some things are meant to be. yeah";

// create a constant variable called includesLove and assign it a JS expression determining whether your lyric includes the word "love"
const includesLove = lyric.includes("love");
console.log("Includes 'love' is:", includesLove);

// do the same thing with the words "heart", "life", "baby", and "yeah".
const includesHeart = lyric.includes("heart");
console.log("Includes 'heart' is:", includesHeart);
const includesLife = lyric.includes("life");
console.log("Includes'life' is:", includesLife);
const includesBaby = lyric.includes("baby");
console.log("Includes 'baby' is:", includesBaby);
const includesYeah = lyric.includes("yeah");
console.log("Includes 'yeah' is:", includesYeah);

// create and log a constant variable called isTypical and assign it a boolean expression determining whether ANY of the conditions are true
const isTypical =
  includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log("ANY of the conditions are met:", isTypical);

// create and log a constant variable called isVeryTypical and assign it a boolean expression determining whether ALL of the conditions are true
const isVeryTypical =
  includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log("ALL of the conditions are met:", isVeryTypical);

// Extra challenges
// Use a conditional statement to log "This song is typical" or "This song is very typical" or "This song is not typical" to the console.
if (isTypical) {
  console.log("This song is typical");
} else if (isVeryTypical) {
  console.log("This song is very typical");
} else {
  console.log("This song is not typical");
}
