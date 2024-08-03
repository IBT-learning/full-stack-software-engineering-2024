// Challenge #1: Capitalize
function capitalize(word) {
    let capitalisedWord = word.toUpperCase()
    return capitalisedWord
}
//  Log the function call to return value
console.log(capitalize("hello"))   // HELLO
console.log(capitalize("ibt-learning-africa")) // IBT-LEARNING-AFRICA
console.log(capitalize("samad kareem")) // SAMAD KAREEM


// challenge #2: Percentage Calculator
function percentCalc(amount, percentage) {
    percentageAmount = amount * (percentage/100);
    return Math.floor(percentageAmount);
}
// Log the function call to return value 
console.log(percentCalc(200, 20))  // 40
console.log(percentCalc(500, 50))  // 250
console.log(percentCalc(10000, 30)) // 3000
console.log(percentCalc(24563, 12))  // 2947

// Challenge #3: Divisible
function divisible(dividend, divisor) {
   if (result = dividend % divisor == 0) {
    return Boolean(result)
   } else {
    return Boolean(result)
   }
}
// Log the function call to return value
console.log(divisible(18, 3))  // true
console.log(divisible(35, 3))  // false
console.log(divisible(35, 4))  // false


// Challenge #4: Friend, Enemy
function greeting(firstName, status) {
    if (status === "friend") {
        return `Hello ${firstName}!`
    } else {
        return `Go away ${firstName}!`
    }
}
// Log the function call to return value
console.log(greeting("Superman", "friend")) // Hello Superman!
console.log(greeting("Lex Luthor", "enemy")) // Go away Lex Luthor!

