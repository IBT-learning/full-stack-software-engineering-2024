// Challenge #1

function capitalize(word){
    // return word.toUpperCase() //Either this,
    let capWord = word.toUpperCase() // or this will give us the same result
    return capWord

    
}
console.log(capitalize("hello"));

// Challenge #2

function percentCalc(amount, percentage){
   let calc = (percentage/100) * amount
   return calc
}

console.log(percentCalc(200, 20));

// Challenge #3

function divisible(dividend, divisor){
    if (dividend % divisor === 0){
        return true
    } else if(dividend % divisor !== 0){
        return false
    }
}
console.log(divisible(15, 3));
console.log(divisible(35, 4));

// Challenge #4

function greeting(firstName, status){
    if(status == "friend"){
        return `Welcome ${firstName}, I'm happy to see you!`
    } else if(status == "enemy"){
        return `Go away ${firstName}`
    } else{
        // Extra challenge
        return `Hello ${firstName}, I hope you're not a frenemy?`
    } 
        
    
}
console.log(greeting("Rumaysa", "friend"));
console.log(greeting("Bode", "enemy"));
console.log(greeting("Muhibah", "neighbour"));