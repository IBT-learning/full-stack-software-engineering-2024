/* 
    ARRAYS
    * list-like object
    * reference data type
    * hold multiple data types (literally anything that can be stored in JS)
    * prototype has methods to perform traversal and mutation operations
        * denoted by [ ]
        * content can be accessed by their index
*/

// create a new array literal
//            0  1  2  3  4
const nums = [1, 2, 3, 4, 5]

// Length attribute
console.log(nums.length) // 5

// access by index
console.log(nums[2]) // 3

// ASSIGNMENT

// assign by fixed index
nums[0] = "one"
nums[4] = "five"
nums[5] = "six"
nums[10] = "out of order"
// [ 'one', 2, 3, 4, 'five', 'six', _, _, _, _, 'out of order' ]
console.log(nums[8]) // undefined

// assign by dynamic index
nums[nums.length] = "this goes at the end"

// access by dynamic index and assign to a variable
let thirdPoint = nums[Math.floor(nums.length / 3)]
console.log(thirdPoint) // 'five'

// We can reassign any (or all!) members of the array
// But we can't reassign the array itself, if it's declared with const
// nums = "[1, 2, 3]" // TypeError: Assignment to constant variable.

// NESTED ARRAYS

nums[8] = ["eight", "nine", "ten"]

// This does the same thing....
console.log(nums[8]) // ["eight", "nine", "ten"]

// ... as this
const nestedArray = nums[8]
console.log(nestedArray[2]) // ["eight", "nine", "ten"]

// ARRAY METHODS
const bestFoods = ["Jollof Rice", "Texas BBQ", "Chapati", "Sushi"]

// changing (mutating) an array using array methods

// Array.push() adds new elemends to the end and returns the new length
const output = bestFoods.push("Kuku")
console.log(output) // 5

bestFoods.push("Pasta", "Burgers", ["Salmon", "Shrimp", "Scallops"])
console.log(output) // ["Jollof Rice", "Texas BBQ", "Chapati", "Sushi", "Kuku", "Pasta", "Burgers", ["Salmon", "Shrimp", "Scallops"]]

// Array.pop() removes and returns the last element
const seafood = bestFoods.pop()
console.log(seafood) // [ 'Salmon', 'Shrimp', 'Scallops' ]
console.log(bestFoods) // (the seafood array has been removed)

// Array.shift() removes and return the first element
const bestFish = seafood.shift()
console.log(bestFish) // "Salmon"
console.log(seafood) // [ 'Shrimp', 'Scallops' ]

// Array.unshift() adds specified element to the beginning of an array
bestFoods.unshift(bestFish)
console.log(bestFoods) // (now Salmon is at the beginning)

// ORDERING / INDEXING

// Array.at() is just like access by index, except it can take negative numbers
console.log(bestFoods[1]) // "Jollof Rice"
console.log(bestFoods.at(1)) // same as above
console.log(bestFoods.at(-6)) // Texas BBQ (number 6 counting from the end)

// Array.slice copies a portion of the array
const slice = bestFoods.slice(1, 3)
console.log(slice)

// with no arguments, it copies the whole thing
const copy = bestFoods.slice()
console.log(copy)

// with one argument, it slices from the given index to the end
const lastHalf = bestFoods.slice(4)
console.log(lastHalf)

const middle = bestFoods.slice(3, 6)
console.log(middle)

// SORTING

// Array.toSorted makes a sorted copy

const sortedCopy = bestFoods.toSorted()
console.log(sortedCopy)
console.log(bestFoods)

// Array.sort() sorts an array IN PLACE!

const whatIsThis = bestFoods.sort()
console.log(whatIsThis) // this is just the same thing, it's not really necessary

// Array.reverse() reverses ar array IN PLACE
bestFoods.reverse()

// Array.indexOf() finds the index of the FIRST instance
bestFoods[4] = "Sushi"
console.log(bestFoods)

const sushiIndex = bestFoods.indexOf("Sushi")
console.log(sushiIndex)

const sushiIndex2 = bestFoods.indexOf("Sushi", 3)
console.log(sushiIndex2)
