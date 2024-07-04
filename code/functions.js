// Challenge #1 Capitalize

function capitalize(word) {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }
    return word.toUpperCase();
}

console.log(capitalize("hello")); 
console.log(capitalize("mercy"));
console.log(capitalize ("world"));


// Chaleenge 2 Percentage Calculator
function percentCalc(amount, percentage) {
    return (amount * percentage) / 100;
}
 
console.log(percentCalc(200, 20));
console.log(percentCalc(300, 8));
console.log(percentCalc(180, 30));
console.log(percentCalc(100, 50));
console.log(percentCalc(600, 2));

// Challenge #3 Divisible

function divisible(dividend, divisor) {
    return dividend % divisor === 0;
}
console.log(divisible(6, 3))
console.log(divisible(15, 4))
console.log(divisible(60, 2))
console.log(divisible(27, 9))
console.log(divisible(78, 17))
console.log(divisible(36, 4))
console.log(divisible(45, 10))


// Challenge #4: Friend, Enemy
function greeting(firstName, status) {
    if (status === "friend") {
        return `Hello, ${firstName}! Welcome, my friend.`;
    } else if (status === "enemy") {
        return `Go away, ${firstName}!`;
    } else {
        return `Hello, ${firstName}.The best thing about a boolean is even if you are wrong, you are only off a bit`;
    }
}

console.log(greeting("Superman", "friend"));
console.log(greeting("Lex Luthor", "enemy"));
console.log(greeting("Nyokabi", "workmate")); 
console.log(greeting("Danny", "teacher"));
 
