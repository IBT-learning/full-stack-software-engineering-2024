// arrays - an array is a list created using square brackets []
// array of numbers
const nums = [1, 2, 3, 4, 5];
console.log(nums);
// arrays have attributes such as length, arrays are also indexed (this means position and it begins at 0)
console.log(nums.length);
console.log(nums[0]);

// array of strings
const bestFoods = ["Jollof rice", "Spaghetti", "Noodles", "Bread", "Cereal"];
console.log(bestFoods.length);
bestFoods.push("Ponded yam & efo riro"); //adds to the end of the array.
console.log(bestFoods.length);
let favFood = bestFoods.pop(); //this removes the last element in an array and returns that element.
console.log(favFood);
// shift is the opposite of pop which means it removes the first element in the array
let partyFood = bestFoods.shift();
console.log(partyFood); // Jollof rice
// unshift is the opposite of push which means it adds an element at the beginning of the array
let newFood = bestFoods.unshift("Ewa agoyin");
console.log(bestFoods);
