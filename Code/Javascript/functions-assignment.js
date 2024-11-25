// Challenge 1
function capitalize(word) {
    return word.toUpperCase()
}

console.log(capitalize("hello"))

// Challenge 2

function percentCalc(amount, percentage) {
    return (amount / 100) * percentage
}

console.log(percentCalc(200,20))

// Challenge 3

function divisible(dividend, divisor) {
    return dividend % divisor  === 0
}

console.log(divisible(6, 3))
console.log(divisible(15, 4))

// Challenge 4

function greeting(firstName, status) {
    if (status === "friend") {
        console.log(`Welcome ${firstName}`)
    } else if (status === "enemy") {
        console.log(`Go Away ${firstName}!`)
    } else {
        console.log(`${firstName} are you a friend or enemy?`)
    }
}

greeting("James", "friend")
greeting("Delilah", "enemy")
greeting("Benjamin","unknown")

