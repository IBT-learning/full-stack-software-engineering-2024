// Challenge 1

// Create a constant variable called personAge
// Assign it a number between 1 and 100

const personAge = 30

console.log(personAge)

// Create a constant variable called isAdult 
// Assign it a boolean expression, 
// Determine whether the number is above or below 18
const isAdult = personAge >= 18
console.log(isAdult)

// Create a constant variable called isElderly
// Assign it a boolean expression
// Determine whether the number is above or below 60

const isElderly = personAge >= 60

// Create a template string that will read: 
// Is this person an adult? true. Is this person elderly? false

const personDataReveal = `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}.`
console.log(personDataReveal)

// Create a constant variable called personAge 
// Assign it a random number between 0 and 100
const ngoziAge = Math.floor(Math.random() * 100)
console.log(ngoziAge)

// Use a conditional statement to log "This person is a child" or
// "This person is an adult" or
// "This person is elderly" to the console 

if (ngoziAge < 18) {
  console.log("This person is a child.")
} else if (ngoziAge < 60) {
  console.log("This person is an adult.")
} else {
  console.log("This person is elderly.")
}


// Challenge 2
//I'm using the these strings to separate this section

console.log("..............")
console.log("Challenge 2");
console.log("..............")

// Create a constant variable called lyric 
// Assign it my favorite song lyric

const lyric = `How are you, my friend?
How do you do, my friend?
I know sometimes e be like say nobody send you
That one na lie, I dey for you my friend
How are you, my friend?
How do you do, my friend?
I know sometimes e be like say nobody send you
That one na lie, I dey for you my friend`
console.log(lyric);

//I'm using the dot string to separate the lyrics from the others
console.log("..............");

// Create constant variables called includesLove
// Assign it a JS expression to determine whether the lyric includes the word "love"
const includesLove = lyric.includes('love')

// Determine whether the lyric includes words like:
// "heart", "life", "baby", and "yeah"
const includesHeart = lyric.includes('heart')
const includesLife = lyric.includes('life')
const includesBaby = lyric.includes('baby')
const includesYeah = lyric.includes('yeah')


console.log(`The lyrics include 'love': ${includesLove}`)
console.log(`The lyrics include 'heart': ${includesHeart}`)
console.log(`The lyrics include 'life': ${includesLife}`)
console.log(`The lyrics include 'baby': ${includesBaby}`)
console.log(`The lyrics include 'yeah': ${includesYeah}`)

// Create and log a constant variable called isTypical
// Assign it a boolean expression to determine whether ANY of the conditions are true

const isTypical = includesLove || includesHeart || includesLife || includesBaby || includesYeah;
console.log(`Is this song typical? ${isTypical}`);

// Create and log a constant variable called isVeryTypical
// Assign it a boolean expression to determine whether ALL of the conditions are true

const isVeryTypical = includesLove && includesHeart && includesLife && includesBaby && includesYeah;
console.log(`Is this song very typical? ${isVeryTypical}`);

// Use a conditional statement to log: 
// "This song is typical" or 
// "This song is very typical" or
// "This song is not typical" to the console

if (isVeryTypical) {
  console.log("This song is very typical.");
} else if (isTypical) {
  console.log("This song is typical.");
} else {
  console.log("This song is not typical.");
}