/*ARRAYS - An array is just a fancy name for lists. we put all kinds of stuff in an array. eg integers, another array, strings
Arrays can also be typed vertically or horizontally*/

/*We can reassign any or all members of the array but we can't reassign the array, if it's declared with a const */


const arr = [1, 2, "hello", [4, 5]]
console.log(arr)
//array attributes - they have some things in common with strings
console.log(arr.length)  //the length attribute
console.log(arr[2])  // arrays also are indexed so we can access values based on indexes

console.log('------------------ ARRAY ASSIGNMENT BASED ON INDEX -------------------------------------------')

// Array Assignment of values based on fixed index (we know the index and we determine where value should go)
arr[2] = "Solomon"
console.log(arr)   // arrays are mutable. A new array is not created in memory
arr[5] = "Peter"  //can add an item to any position other than the existing. Can be for consecutive and non consecutive, an emtpty item is created which meas that that space is availabe to be utilized. If we read any of the empty index we will get undefined.
console.log(arr)
console.log(arr[4])  //this returns undefined because there is nothing there. I is important to give it value to avoid errors
arr[4] = 7
console.log(arr)
/*So we have seen so far the most simple way to change an array by assigning based on index. But it is not the most used
way and one of the reason this is not the most used is that when working with arrays, we might want to be changing sutff 
within the array dynamically, ie, as our program executes and also we would in many cases not even be able to know the index
of a value in an array. Therefore it is convenient that there is a more useful way
*/
console.log('------------------ DYNAMIC ASSIGNMENT TO ARRAY -------------------------------------------')
// ARRAY ASSIGNMENT DYNAMICALLY TO THE END OF ARRAY: basically means using the syntax for arr lenggth as index to 
//assign values at the end of an array

//Case 1: Use of the length of the array as index if we are not sure anymore
arr[arr.length] = "this value goes to the end of array"
console.log(arr)

/* 
ACCESSING ARRAY VALUES
Just adding value is not the only things we do on array. It is a collection so other times too we want use the value
it contains. Suppose we want to extract and use the mindpoint value. We know that for an array 
of 7 items, the mid value would be the value at index 3, we can go about it by the following*/

// arr.length/2   i could use this directly but because sometimes what we want to perform would not provide whole number
//we decided to use the Math.floor() to wrap this value for midpoint. thirPoint is array.length/3, fourthPoint
console.log("-----------------------------------------------------------------")
console.log(arr.length)  //arr length is 7 but 7/2 is 3.5, we used Math.floor to get whole number.
console.log(arr.length/2)
console.log(Math.floor(arr.length/2))
let midpoint = arr[Math.floor(arr.length/2)]
console.log(midpoint)
console.log("-----------------------------------------------------------------")
console.log(arr[3][0])  //this would display 4

const nestedarr = arr[3]
console.log(nestedarr[0])   //this would display 4 as well

//ARRAY METHODS: What we learnt for dynamic is not very practical, instead we use array methods to perform operations

console.log('------------------ .push() -------------------------------------------')

/* Push() - When used, it adds its argument to the end of the array. and returns the new length of the array. See how
 we wrapped them console.log() because if used wrongly, we will keep adding to the list */

const bestFood = ['Jollof rice', "Amala", "Beans", 'Kenke', "Yam"]  //this is an array literal (at point of definition)

bestFood.push(['Pasta', 'Burgurs', ['Salmon', 'Shrimp','Scallop']])
console.log(bestFood)

console.log(bestFood.push('Bread'))  //this returns the length of the new array according to the definition of push
console.log(bestFood)

console.log('------------------ .pop() -------------------------------------------')

/*.pop()- the pop method removes the last element from an array and returns that element. This method changes the
length of the array */

const foodType = bestFood.pop()  //this is useful because we usually need to use that value
console.log(bestFood)
console.log(foodType)

/* .shift()- removes the first element from the array and returns that removed element. This method also changes the
length of the array. */
console.log('------------------ .shift() -------------------------------------------')

const firstFood = bestFood.shift()
console.log(bestFood)
console.log(firstFood)  //useful return. remember, to be able to use a value later, best collect in a variable


console.log('------------------ .unshift() -------------------------------------------')

/* .unshift() - adds the specified elements to the begining of an array. Also returns the new length of the array*/

bestFood.unshift('egusi')
console.log(bestFood)
const itReturns = bestFood.unshift('egusi')
/*it is best to assign it to a const and console.log it and also console.log  the arr else each time you try to 
know the lenght we add anotheritem to the begining of the array */
console.log(itReturns) 
console.log(bestFood)

console.log('------------------ .at() -------------------------------------------')

/* .at() - it takes an integer value and returns the item at that index. can take +ve and -ve integers that count back */

const indx = 2
console.log(`An index of ${indx} contains ${bestFood.at(indx)} in the array`)

console.log('------------------ .slice() -------------------------------------------')

/* .slice() -  the slice method returns a shallow copy of a portion of an array into a new array object selected from
start to end (end not included) where start and end represent the index of items in the array. Original array will not be 
 */

const animals = ['elephant', 'bison', 'duck', 'camel', 'ant']
console.log(animals.slice())  //can take zero arguments, 1 or 2 arguments. We can use variable to store the value for use
console.log(animals.slice(2)) 
console.log(animals.slice(2, 4))
console.log(animals.slice(1, 5))
console.log(animals.slice(-2))
console.log(animals)

/* Shallow copy - of an object is a copy whose properties share the same references (point to the same 
underlying values) as those of the source object from which the copy was made. As a result, when we change
either the source or the copy, we may also cause the other object to change too. That behavior contradicts with the
behavior of deep copy, in which the source and the copy are completely independent. */

console.log('------------------ .sort and toSorted() -------------------------------------------')

/* .sort() - array instances that call sort() sorts the array elements in place and returns references to the same
array, now sorted. The default sort order is  ascending, built upon converting the elements into strings, then 
comparing their sequences of UTF-16 code unit values. Note: the time and space complexity of the sort cannot be
guaranteed as it depends on the implementation. To sort the elements in an array without mutating the original
array, use .toSorted(). Also, with using .sort() direct, the output isn't always useful because even with numbers, the 
sorting is based on the begining number e.g 1,3,20, 100 will sort to 1, 10, 100, 20, 3 wjich makes no sense. We shall
see later that we can use a function to tell how the sort should be */

const tempSorted = animals.toSorted()
console.log(tempSorted)

console.log(animals.sort())  //Does not need to use a var to store the output because it changes the original object sort

console.log(animals)

console.log('------------------ .reverse() -------------------------------------------')

/* .reverse() - this reverses an array in place and returnsthe reference to the same array, the first array element
becoming the last, and the last array element becoming the first. In other words, elements order in the array will be
turned torwards the direction opposite to that previously stated. Note: To reverse the elements in an array without
mutating the original, use .toReversed()*/

console.log('------------------ .find() general comment -------------------------------------------')

/* .find() - the find method returns the first element in the provided array that satisfies the provided testing 
function. If no values satisfy the function, 'undefined' is returned.

- if we need the index of the found element in the array use .findIndex()
- if we need to find the index of a value use .indexOf(): Similar to findIndex but checks each element for equality 
  with the value instead of using a testing function.
- if we need to find if a value exists in an array use .includes(),it also checks each element for equality with the
  the value instead of using a test function.
- if we need to find if any element satisfies the provided testing function, use .some()
- if we need to find all elements that satisfy the provided testing function, use .filter()
We shall look at some of these find-related methods in details as we progress.*/

console.log('------------------ .indexOf() -------------------------------------------')

console.log(animals)
animals
// .indexOf() syntax: .indexOf(searchElement) or .indexOf(searchElement, fromIndex). Returns first occurence after 
//reading all the values in the array. So must first do a comparison of all array elements, taking note of what is where

console.log(animals.push('duck'))
console.log(animals)
const duckIndex = animals.indexOf('duck')
console.log(duckIndex)
const duckIndex2 = animals.indexOf('duck', duckIndex + 1)//start checking from index after specified index ie 4
console.log(duckIndex2)

