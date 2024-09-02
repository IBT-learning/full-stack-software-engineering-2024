// # JavaScript Assignment #8: Callbacks

// You will complete all of these challenges in the same file.

// ## Challenge #1: Practice .filter()

// - Make an array with the numbers 1 - 10
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// - Use `.filter()` to create an array with only numbers that are larger than 7
const greaterThanSeven = nums.filter((x) => x > 7);
console.log(greaterThanSeven);

// - Use `.filter()` to create an array with only numbers that are even
const evenNums = nums.filter((x) => x % 2 === 0);
console.log(evenNums);

// - Use `.filter()` to create an array with only numbers that are divisible by 3
const divByThree = nums.filter((x) => x % 3 === 0);
console.log(divByThree);

// ## Challenge #2: Practice .map()

// Using that same array with number 1-10

// - Use `.map()` to create an array with the square of each number (such as `[1, 4, 9, 16...]`)
const numSquared = nums.map((x) => Math.pow(x, 2));
console.log(numSquared);

// - Use `.map()` to create an array with each number halved (such as `[0.5, 1, 1.5...]`)
const numHalved = nums.map((x) => x / 2);
console.log(numHalved);

// ## Challenge #3: Using .filter() to filter objects

// Start by pasting this into your code:

// ```javascript
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];
// ```

// - Use `.filter()` to create an array with only the product objects that cost less than $20
const lessThanUSD20 = prices.filter((x) => x.price < 20);
console.log(lessThanUSD20);

// - Use `.filter()` to create an array with only the product objects that are in stock
const available = prices.filter((x) => (x.inStock = true));
console.log(available);

// - Use `.filter()` to create an array with only the product objects that are in stock AND cost less than $20
const less20InStock = prices.filter((x) => (x.inStock = true && x.price < 20));
console.log(less20InStock);

// ## Challenge #4: Using .map() to map objects

// - We're having a sale! Use `.map()` to create an array with all the same objects, but with the prices reduced by 25%
const discount25 = prices.map((x) => {
  let discount25 = x.price * 0.75;
  return { ...x, price: discount25 };
});
console.log(discount25);

// - The sale is only for products that cost more than $10. Rewrite the previous map to only change the prices for items with prices above $10.
const discountPriceAbove10 = prices.map((x) => {
  if (x.price > 10) {
    let discount25 = x.price * 0.75;
    return { ...x, price: discount25 };
  } else {
    return x;
  }
  // let discount25 = x.price * 0.75;
  // return { ...x, price: discount25 };
});
console.log(discountPriceAbove10);
// - We're making an ad for the sale. Make an array of strings that read, for example, "shoes are on sale for only $37.50!"
const salesAd = prices.map((x) => {
  const discountedPrice = (x.price * 0.75).toFixed(2); // 25% off and formatted to 2 decimal places
  return `${x.product} are on sale for only $${discountedPrice}!`;
});

console.log(salesAd);

// #### Extra challenges (optional)

// - Can you use `.reduce()` to join all the strings from the previous together into one long string?
