// CHALLENGE 1
function capitalize(word){
 return word.toUpperCase()
}
console.log (capitalize("ibt"))

// CHALLENGE 2

function percentCalc(amount, percentage){
    let percent = percentage / 100 * amount

    return percent

}
console.log (percentCalc(400, 20))

// CHALLENGE 3
function divisible(dividend, divisor){
    if (dividend % divisor == 0 ){
        return Boolean(true)
    }else {
        return Boolean(false)
    }
}
console.log (divisible(6, 3))
console.log (divisible(15, 4))

// CHALLENGE 4
function greeting(firstName, status){
    if (firstName == "Olliver" && status == "friend"){
        return "Hello, Olliver!"
    }else if (firstName == "Damien Dhark" && status == "enemy"){
        return "Go away, Damien Dhark!"
    }else{
        return "Not familiar"
    }
}
console.log (greeting("Olliver", "friend"))
console.log (greeting("Damien Dhark", "enemy"))
console.log (greeting("Olliver", "arrow"))