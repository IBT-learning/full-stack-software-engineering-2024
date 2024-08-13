// Challenge 1
// Create an array with the numbers 1 - 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);


// Filter numbers that are larger than 7
const largerThanSeven = numbers.filter(num => num > 7);
console.log(largerThanSeven);

// Numbers that are even
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Numbers that are divisible by 3
const divisibleByThree = numbers.filter(num => num % 3 === 0);
console.log(divisibleByThree);

// Challenge 2
console.log("Challenge 2");

// Use .map() to create an array with the square of each number
const squareOfNum = numbers.map(num => num ** 2);
console.log(squareOfNum);

// Use .map() to create an array with each number halved
const halvedNum = numbers.map(num => num / 2);
console.log(halvedNum);

// Challenge 3
console.log("Challenge 3");

const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
]

// Use .filter() to create an array with only the product objects
// that cost less than $20

const productsLessThan20 = prices.filter(item => item.price < 20);
console.log(productsLessThan20);

// Use .filter() to create an array with only products objects in stock

const productsInStock = prices.filter(item => item.inStock)
console.log(productsInStock);

// Use .filter() to create an array with only the product objects
// that are in stock AND cost less than $20

const productsInStockAndLessThan20 = prices.filter(
    item => item.inStock && item.price < 20);
console.log(productsInStockAndLessThan20);

// Challenge 4  
// Use .map() to create an array with all same objects,
// but with the prices reduced by 25%

console.log("Challenge 4");

const reducedPrices = prices.map(item => {
  return {...item, price: item.price * 0.75}}
);
console.log(reducedPrices);

// Rewrite previous map, only change items with prices above $10

const promoProductsPrices = prices.map(item => {
  return {...item,
    price: item.price > 10 ? item.price * 0.75 : item.price};
});
console.log(promoProductsPrices);

// Make an array of strings of a Sales Ad

const salesAd = promoProductsPrices.map(item => {
  return `${item.product} are on sale for only $${item.price.toFixed(2)}!`;
});
console.log(salesAd);