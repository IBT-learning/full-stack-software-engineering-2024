// Challenge #1

// assign it a number between 1 and 100
const personAge=Math.ceil(Math.random()*100)

// assign it a boolean expression determining whether that number is above or below 18
const isAdult= Boolean(personAge>=18)

// assign it a boolean expression determining whether that number is above or below 60
const isElderly= Boolean(personAge>= 60)

// logging the response
console.log(`Is this person an adult? ${isAdult}`);

// logging the response
console.log(` Is this person elderly? ${isElderly}`);


// Extra Challenge

// logging the person's age
console.log(`This person is ${personAge} years.`);

// Conditonal statements

if (isElderly) {
    console.log('This person is elderly');
    
} else if (isAdult) {
    console.log('This person is an adult');
    
} else {
    console.log('This person is a child');  
}


// Challenge #2

// Assign a song lyric
const lyric = 'baby, you know my heart feels life with love, yeah.'

// assign it a JS expression determining whether your lyric includes the word "love"
const includesLove=lyric.includes('love')

// assign it a JS expression determining whether your lyric includes the word "heart"
const includesheart=lyric.includes('heart')

// assign it a JS expression determining whether your lyric includes the word "life"
const includesLife=lyric.includes('life')

// assign it a JS expression determining whether your lyric includes the word "baby"
const includesBaby=lyric.includes('baby')

// assign it a JS expression determining whether your lyric includes the word "yeah"
const includesYeah=lyric.includes('yeah')

// assign it a boolean expression determining whether ANY of the conditions are true
const isTypical =Boolean(includesLove || includesBaby || includesLife || includesYeah || includesheart)

// logging the boolean expression
console.log(isTypical);

// assign it a boolean expression determining whether ALL of the conditions are true
const isVeryTypical =Boolean(includesLove && includesBaby && includesLife && includesYeah && includesheart)

// logging the boolean expression
console.log(isVeryTypical);

// Extra Challenge

// using conditional statements to determine whether lyric is very typical, typical or not

if (isVeryTypical) {
    console.log('This song is very typical');
}else if (isTypical) {
    console.log('This song is typical');
} else{
    console.log('This song is not typical');
}

