//Challenge 1

const personAge = 30; // Example age  
const isAdult = personAge >= 18; // Boolean expression 

if (personAge >= 18) {
    console.log("adult")
}
else if (personAge < 18) {
      console.log("child") // adult
}

const Age = 40
const isElderly = Age >= 60

if (Age >= 60) {
    console.log("elderly")
}
else if (Age < 60) {
    console.log("middleaged")  // middleaged
}

// Challenge 1b

const Adult = true
const Elderly = false

const templateString = `Is this person an adult? ${Adult}. Is this person elderly? ${Elderly}.`;  
console.log(templateString);


// Challenge 2

//let sentence = "This is an example sentence"
//let includesExample = sentence.includes("example")
//console.log(includesExample) // true


const lyric = "so in love  "
const includesLove = lyric.includes("love")
console.log(includesLove) // true


const str = "Open your heart to me baby, ny life is yours to keep";

console.log(str.includes("heart")); // true
console.log(str.includes("life")); // true
console.log(str.includes("baby")); // true
console.log(str.includes("yeah")); // false



// Challenge 2b

const temperature = -5
const isTypical = (temperature < 0 || temperature <= -1 || temperature > 20);  
console.log(isTypical); // true


const daytime = 12
const isVeryTypical = (daytime > 10 && daytime < 14 );  
console.log(isVeryTypical); // true







