// CHALLENGE 1
const personAge = 35
const isAdult = personAge >= 18
const isElderly = personAge >= 60

const message =  `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`

console.log(message) //True and False

//Extra Challenge I
const personAge = Math.floor(Math.random()* 101)
const isAdult = personAge >= 18
const isElderly = personAge >= 60

const message =  `Is this person an adult? ${isAdult}. Is this person elderly? ${isElderly}`

console.log(`Person's age: ${personAge}`) //4
console.log(message) False and False

//Extra Challenge II
if (personAge < 18) {
    console.log("This person is a child")
} else if (isAdult) {
    console.log("This person is an adult") 
} else {
    console.log("This person is elderly ") //This person is an adult
}



