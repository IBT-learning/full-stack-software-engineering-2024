// CHALLENGE 1
function capitalize(word) {
    return word.toUpperCase() 
}

console.log(capitalize("hello"));

// CHALLENGE 2
function percentCalc(amount, percentage) {
    return (percentage/100) * amount
}

console.log(percentCalc(200, 20));

// CHALLENGE 3
function divisible(dividend, divisor) {
    if ((dividend) % (divisor) == 0) {
        return true
    } return false
}

console.log(divisible(6, 3));
console.log(divisible(15, 4));

// CHALLENGE 4
// PART A
function greeting(firstName, status) {
    if (status == "friend") {
        return `Welcome ${firstName}):`
    } else if (status == "enemy") {
        return `Go away ${firstName}!`
    }
    
}

console.log(greeting("Superman", "friend"));
console.log(greeting("Lex Luther", "enemy"));

// PART B --- Extra Challenge
function greeting(firstName, status) {
    if (status == "friend") {
        return `Welcome ${firstName}):`
    } else if (status == "enemy") {
        return `Go away ${firstName}!`
    } else {
        return `Your status is unknown ${firstName}`
    }
    
}

console.log(greeting("Matilda", "acquaintance"));





