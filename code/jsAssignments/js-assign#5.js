// JavaScript Assignment #5: Functions

// Challenge #1: Captalize

function capitalize(word) {
    const capitalized = word.toUpperCase()
    return capitalized
}

console.log(capitalize("Hello"))



// Challenge #2: Percentage Calculator

function percentCalc(amount, percentage) {
    const percentageOfAmount = amount * (percentage/100)
    return percentageOfAmount
}

console.log(percentCalc(200, 20))


// Challenge #3: Divisible

function divisible(dividend, divisor) {
    if (dividend % divisor == 0){
        return true
    } else {
        return false
    }
}

console.log(divisible(6, 3))
console.log(divisible(15, 4))


// Challenge #4: Friend, Enemy

function greeting(firstName, status){
    if (status == "friend"){
        return `Hello ${firstName}!`
    } else {
        return `Go away ${firstName}!`
    }
}

console.log(greeting('Solomon', 'friend'))
console.log(greeting('Tilda', "enemy"))

// Extra Challenge


function greeting(firstName, status){
    if (status == "friend"){
        return `Hello ${firstName}!`
    } else if (status == "enemy") {
        return `Go away ${firstName}!`
    } else {
        return `Excuse me ${firstName}, I am not sure I know you.`
    }
}

console.log(greeting('Jack', "random guy"))