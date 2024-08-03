//Challenge 1
function capitalize(word) {
    const capitalizedWord = word.toUpperCase()
    return capitalizedWord
}
console.log(capitalize("hello"))

//Challenge 2
function percentCalc(amount, percentage) {
    const result = (amount * percentage) / 100
    return result
}
console.log(percentCalc(200, 20))

//Challenge 3
function divisible(dividend, divisor) {
    const isDivisible = dividend % divisor === 0
    return isDivisible
}
console.log(divisible(6, 3))
console.log(divisible(15, 4))

//Challenge 4 and Extra Challenge
function greeting(firstName, status) {
    if (status === "friend") {
        return `Hello ${firstName}!`
    }
    else if (status === "enemy") {
        return `Go away ${firstName}!`
    }
    else {
        return `I don't know you. Do you come in peace or bring chaos?`//Extra Challenge
    }
}
console.log(greeting("Superman", "friend"))
console.log(greeting("Lex Luthor", "enemy"))
console.log(greeting("Unknown", "acquaintance"))