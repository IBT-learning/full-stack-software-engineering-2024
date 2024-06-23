// Boolean Challenge
// Challenge 1
const personAge = Math.floor(Math.random() * 100)
console.log(personAge)

const isAdult = personAge > 18 && personAge <= 60
const isElderly = personAge > 60

console.log(`Is this person an adult? ${isAdult}`) // true
console.log(`is this person elderly? ${isElderly}`) // false

// Extra Challenges
if (personAge < 18) {
    console.log(`This person is a child`)
} else if (personAge > 18 && personAge <= 60) {
    console.log(`This person is an adult`)
} else {
    console.log(`This person is elderly`)
}