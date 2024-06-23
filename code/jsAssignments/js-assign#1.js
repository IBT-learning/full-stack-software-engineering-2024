//CHALLENGE-1

//STRINGS
const myName = "Solomon"
//length
console.log(myName.length)
console.log(`Hello, my name is ${myName}`)
let upCaseName = myName.toUpperCase()
console.log(`When my friends see me they shout ${upCaseName}!`)

//NUMBERS
//multiply by 2, add 8, divide by 2, subtract the original nnumber
const num = 20
console.log((((num * 2) + 8) / 2) - num)

//CHALLENGE-2

//Area of a cirle is given by pi * r**2
let pi = Math.PI
let radius = 2
let area = pi*radius**2
console.log(area.toFixed(4))