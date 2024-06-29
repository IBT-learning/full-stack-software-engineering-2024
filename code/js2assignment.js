// CHALLENGE 1
// Part A
const personAge = 25
const isAdult = personAge >=18
const isElderly = personAge >= 60

console.log(`Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`);

// // // Part B - Extra challenges
// // // 1.
const personAge2 = (Math.random() * 100)
const isAdult2 = personAge2 >=18
const isElderly2 = personAge2 >= 60

console.log(Math.floor(personAge2));
console.log(`Is this person an adult? ${isAdult2}. Is this person elderly? ${isElderly2}`);

// // //  2.
const personAge3 = (Math.random() * 100)
if (personAge3 >= 18 && personAge3 < 60) {
    console.log(Math.floor(personAge3));
    console.log("This person is an adult");
} else if (personAge3 >= 60) {
    console.log(Math.floor(personAge3));
    console.log("This person is elderly");
} else {
    console.log(Math.floor(personAge3));
    console.log("This person is a child");
}

// CHALLENGE 2
// Part A
const lyric = "I love the way you love me on purpose"
const includesLove = lyric.includes("love")
console.log(includesLove);

const includesLove2 = lyric.includes("heart")
console.log(includesLove2);

const includesLove3 = lyric.includes("life")
console.log(includesLove3);

const includesLove4 = lyric.includes("baby")
console.log(includesLove4);

const includesLove5 = lyric.includes("yeah")
console.log(includesLove5);

// PART B
const isTypical = lyric.includes("love") || lyric.includes("heart") ||  lyric.includes("life") || lyric.includes("baby") || lyric.includes("yeah")
console.log(isTypical);

const isVeryTypical = lyric.includes("love") && lyric.includes("heart") &&  lyric.includes("life") && lyric.includes("baby") && lyric.includes("yeah")
console.log(isVeryTypical);

// Part C - Extra Challenges
// 1.
if (lyric.includes("love") || lyric.includes("heart") ||  lyric.includes("life") || lyric.includes("baby") || lyric.includes("yeah")) {
    console.log("This song is typical");
} else if (lyric.includes("love") && lyric.includes("heart") &&  lyric.includes("life") && lyric.includes("baby") && lyric.includes("yeah")) {
    console.log("This song is very typical");
} else {
    console.log("This song is not typical");
}

// 2.
const lyric2 = "'Cause it's been like eight weeks You're still drivin' me crazy, If you don't love me, then hate me I was just thinkin' maybe, Aw, baby, don't you kinda wanna stay in tonight, Or at least go walkin' into some other bar? Don't you need a break from breakin' my heart? I said, 'Baby (baby), won't you let me get on with my life?' 'Cause everywhere I go, it's like there you are, Don't you need a break from breakin' my heart From breakin' my heart? Oh, yeah"
if (lyric2.includes("love") && lyric2.includes("heart") &&  lyric2.includes("life") && lyric2.includes("baby") && lyric2.includes("yeah")) {
    console.log("This song is very typical");
} else if (lyric2.includes("love") || lyric2.includes("heart") ||  lyric2.includes("life") || lyric2.includes("baby") || lyric2.includes("yeah")) {
    console.log("This song is typical");
} else {
    console.log("This song is not typical");
}
