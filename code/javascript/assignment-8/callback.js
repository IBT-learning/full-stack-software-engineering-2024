// *** Challenge #1: Practice .filter()

// Make an array with the numbers 1 - 10

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use .filter() to create an array with only numbers that are larger than 7

const numsOver7 = nums.filter((num) => {
  return num > 7;
});
console.log(numsOver7); // [8, 9, 10]

// Use .filter() to create an array with only numbers that are even

const evenNums = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNums); // [ 2, 4, 6, 8, 10 ]

// Use .filter() to create an array with only numbers that are divisible by 3

const divisibleBy3 = nums.filter((num) => {
  return num % 3 === 0;
});

console.log(divisibleBy3); // [ 3, 6, 9 ]

// *** Challenge #2: Practice .map()

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

// *** Challenge #3: Using .filter() to filter objects

// Start by pasting this into your code:

const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

// Use .filter() to create an array with only the product objects that cost less than $20

const productsLessThan20 = prices.filter((product) => {
  return product.price < 20;
});

console.log(productsLessThan20); // [
//   { product: 'light bulb', price: 3, inStock: true },
//   { product: 'stuffed animal', price: 15, inStock: false },
//   { product: 'keychain', price: 4, inStock: true }
// ]

// Use .filter() to create an array with only the product objects that are in stock

const productsInStock = prices.filter((item) => {
  return item.inStock;
});

console.log(productsInStock); // [
//   { product: 'shoes', price: 50, inStock: true },
//   { product: 'light bulb', price: 3, inStock: true },
//   { product: 'keychain', price: 4, inStock: true }
// ]

// Use .filter() to create an array with only the product objects that are in stock AND cost less than $20

const stockUnder20 = prices.filter((item) => {
  return item.inStock && item.price < 20;
});

console.log(stockUnder20); // [
//   { product: 'light bulb', price: 3, inStock: true },
//   { product: 'keychain', price: 4, inStock: true }
// ]

// *** Challenge #4: Using .map() to map objects

// We're having a sale! Use .map() to create an array with all the same objects,
// but with the prices reduced by 25%
// The sale is only for products that cost more than $10.

const sale25 = prices.map((item) => {
  if (item.price > 10) {
    return {
      ...item,
      price: item.price * 0.75,
    };
  } else {
    return item;
  }
});

console.log(sale25); // [
//   { product: 'shoes', price: 37.5, inStock: true },
//   { product: 'light bulb', price: 3, inStock: true },
//   { product: 'stuffed animal', price: 11.25, inStock: false },
//   { product: 'jacket', price: 56.25, inStock: false },
//   { product: 'keychain', price: 4, inStock: true }
// ]

// Rewrite the previous map to only change the prices for items with prices above $10.
// We're making an ad for the sale. Make an array of strings that read, for example,
// "shoes are on sale for only $37.50!"

const saleAbove10 = prices
  .filter((item) => item.price > 10)
  .map((item) => {
    return `${item.product} are on sale for only $${(item.price * 0.75).toFixed(
      2
    )}!`;
  });
console.log(saleAbove10); // [
//   'shoes are on sale for only $37.50!',
//   'stuffed animal are on sale for only $11.25!',
//   'jacket are on sale for only $56.25!'
// ]

// Extra challenges
// Can you use .reduce() to join all the strings from the previous together into one long string?

const str = saleAbove10.reduce((counter, value) => {
  return counter + " " + value;
});

console.log(str); // shoes are on sale for only $37.50! stuffed animal are on sale for only $11.25! jacket are on sale for only $56.25!
