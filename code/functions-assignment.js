//challenge 1 : capitalize
function capitalize (word) {
    return word.toUpperCase();
}

console.log(capitalize("hello"))

//challenge 2 : percentage calculator
function percentCalc (amount, percentage) {
    return (amount / 100) * percentage
}

console.log(percentCalc(200, 20))

//challenge 3 : divisible
function divisible (dividend, divisor) {
    if (dividend % divisor === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(divisible(6, 3))
console.log(divisible(15, 4))

//challenge 4 : freind, enemy
function greeting (firstName,status) {
    if (status === "friend") {
        return(`Hello ${firstName}!`);
    }
    else if (status === "enemy") {
        return(`Go away ${firstName}!`);
    }
    else {
        return(`Hey ${firstName} reveal your status, are you an "enemy" or a "friend"!`);
    }
}

console.log(greeting("Superman", "friend"))
console.log(greeting("Lex Luthor", "enemy"))
console.log(greeting("Anonymous", "unknown"))

