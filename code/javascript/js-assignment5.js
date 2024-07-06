// Challenge #1: Capitalize
const capitalize = (word) => {
    return word.toUpperCase();
};

console.log(capitalize('hello'));


// Challenge #2: Percentage Calculator
const percentCalc = (amount, percentage) => {
    return amount * (percentage / 100);
};

console.log(percentCalc(200, 20));

// Challenge #3: Divisible
const divisible = (dividend, divisor) => {
    result = dividend % divisor;
    if(result == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(divisible(6, 3));
console.log(divisible(15, 4));


// Challenge #4: Friend, Enemy
const greeting = (firstName, status) => {
    if(status === 'friend'){
        return `Hello ${firstName}!`;
    }
    else if(status === 'enemy'){
        return `Go away ${firstName}!`;
    } else{
        return `Where are you from ${firstName}!`;
    }
};

console.log(greeting('Superman', 'friend'));
console.log(greeting('Lex Luthor', 'enemy'));
console.log(greeting('Stranger', 'stranger'));