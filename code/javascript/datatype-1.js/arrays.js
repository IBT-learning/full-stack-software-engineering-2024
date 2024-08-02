//              0  1  2   3  4
const numbers =[1, 2, 3, 4, 5]
console.log(numbers)

console.log(numbers.length)
console.log(numbers[0])

// Assign by fixed Index
numbers[0]="one"
numbers[4]="five"
numbers[5]="six"
numbers[10]="out of order"
// [ 'one', 2, 3, 4, 'five', 'six', <4 empty items>, 'out of order'; non-consecutive indexes ]


//Assign by Dyanamic Index
numbers[numbers.length]="this goes at the end"

console.log(numbers)

let thirdPoint= numbers[Math.floor(numbers.length/3)]

console.log(thirdPoint)

// We can reassign any or al members of the array, but not the array itself if its declared with "const"
//  

//Nested Arrays

numbers[8]=["eight", "nine", "ten"]

// this does the same thing
console.log(numbers[8][2])

//...as this
const nestedArray=[8]
console.log(nestedArray[2])

//Array Methods

//changing an array using array methods

//Array Push

const bestFoods =["Jollof rice" , "Texas BBQ", "Chapati", "Sushi"]

bestFoods.push("Kuku")


bestFoods.push("Pasta", "Burgers", ["Salmon", "Shrimps", "Scallops"])


//Array Pop() removes and returns the last element

const seafood=bestFoods.pop()
console.log(seafood)
console.log(bestFoods)

//Array shift() removes and returns the first element

const bestFish=seafood.shift()
console.log(bestFish)
console.log(seafood)

//Array.unshift() adds specified element to the begining of an aray

bestFoods.unshift(bestFish)
console.log(bestFoods)

//Array.at() is just like access to index, excepts that it accepts negative integers

console.log(bestFoods[1])
console.log(bestFoods.at(-2))

//Array.slice() copies a portion of the array

const slice = bestFoods.slice(1, 3)
console.log(slice)

//with no arguments it copies the whole thing

const copy = bestFoods.slice()
console.log(copy)

// with one argument it slices from given index to the end

const lastHalf =bestFoods.slice(4)
console.log(lastHalf)


const middle = bestFoods.slice(3, 6)
console.log(middle)

//Sorting

//Array.toSorted makes a sortedcopy

const sortedCopy=bestFoods.toSorted()
console.log(sortedCopy)
console.log(bestFoods)


//Array.sort() sorts everything IN PLACE

//const whatIsThis =bestFoods.sort()
//console.log(whatIsThis)
//console.log(bestFoods)

//Array.reverse () reverses an array IN PLACE

bestFoods.reverse()
console.log(bestFoods)

//Array.indexOf () finds the Index of the FIRST Instance

bestFoods[4]="Sushi"
console.log(bestFoods)

const sushiIndex=bestFoods.indexOf("Sushi")
console.log(sushiIndex)

const sushiIndex2=bestFoods.indexOf("Sushi", bestFoods.indexOf("Sushi") + 1)
console.log(sushiIndex2)





