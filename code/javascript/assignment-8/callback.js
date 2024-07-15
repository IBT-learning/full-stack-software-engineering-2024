// Challenge #1: Practice .filter()

// Make an array with the numbers 1 - 10

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use .filter() to create an array with only numbers that are larger than 7

const numsOver7 = nums.filter((num) => {
  return num > 7;
});
console.log(numsOver7); // [8, 9, 10]

// Use .filter() to create an array with only numbers that are even

const evenNums = nums.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

console.log(evenNums); // [ 2, 4, 6, 8, 10 ]

// Use .filter() to create an array with only numbers that are divisible by 3

const divisibleBy3 = nums.filter((num) => {
  if (num % 3 === 0) {
    return num;
  }
});

console.log(divisibleBy3); // [ 3, 6, 9 ]

// Challenge #2: Practice .map()

// Using that same array with number 1-10

// Use .map() to create an array with the square of each number (such as [1, 4, 9, 16...])

const squareNums = nums.map((num) => {
  return num * num;
});

console.log(squareNums); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Use .map() to create an array with each number halved (such as [0.5, 1, 1.5...])

const halved = nums.map((num) => {
  return num / 2;
});

console.log(halved); // [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
