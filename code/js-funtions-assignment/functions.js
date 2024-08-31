// Challenge #1

// Capitalize
function capitalize(word) {
    console.log(word.toLocaleUpperCase())
}

capitalize('heyy')

// Challenge #2

// Percentage Calculator
function percentCalc(amount,percentage) {
    percentAmount=amount*(percentage/100)
    console.log(percentAmount)
}

percentCalc(2000,10)

// Challenge #3

// Divisible
function divisible(dividend,divisor) {
    console.log(Boolean(dividend%divisor==0))
}

divisible(10,3)


// Challenge #4

// Friend, Enemy
function greeting(firstName, status) {
    if (status==='friend') {
        console.log(`Hello ${firstName}!`);
        
    } else if(status==='enemy'){
        console.log(`Go away ${firstName}!!!`)
    } else{
        console.log('Check status again!, Status should either be \'friend\' or \'enemy\'.');
    }
}

greeting('Danny','friend')

