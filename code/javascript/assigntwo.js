const personAge = 12;
const isAdult = false;
const isElderly = false;

console.log(
  `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`
);

if (personAge >= 60) {
  console.log("This person is Elderly");
} else if (personAge >= 18) {
  console.log("This person is an adult");
} else console.log("This person is a child");

const myLyric = `Tear my heart down into pieces.
What you figure this be (This be) Follow me talk your gibberish
Kwaku why never listen? My life stays pimping, pimping 
Nti nu online we are ticking yeah Every likkle thing on the wishlist 
Talk to your baby your love your this thing;`;

// `Tear them down into pieces.
// What you figure this be (This be) Follow me talk your gibberish
// Kwaku why never listen? My wingman say pimping, pimping
// Nti nu online we are ticking Every likkle thing on the wishlist
// Talk to your baby your love your this thing;`;

const includesLove = myLyric.includes("love");
console.log(includesLove);

const includesHeart = myLyric.includes("heart");
console.log(includesHeart);

const includesLife = myLyric.includes("life");
console.log(includesLife);

const includesBaby = myLyric.includes("baby");
console.log(includesBaby);

const includesYeah = myLyric.includes("yeah");
console.log(includesYeah);

const isTypical = true;
const isVeryTypical = true;

if (
  includesLove &&
  includesBaby &&
  includesHeart &&
  includesLife &&
  includesYeah
) {
  console.log("This song is very typical");
} else console.log("This song is typical");


