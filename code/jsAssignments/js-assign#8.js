// JavaScript Assignment #8: Callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Challenge #1: .filter()
const largerThanSeven = nums.filter((num) => num > 7);
console.log(largerThanSeven);

const evenNums = nums.filter((num) => num % 2 == 0);
console.log(evenNums);

const divByThree = nums.filter((num) => num % 3 == 0);
console.log(divByThree);

// Challenge #2: .map()
const squareNum = nums.map((num) => num ** 2);
console.log(squareNum);

const halvedNum = nums.map((num) => num * 0.5);
console.log(halvedNum);

// Challenge #3: .filtering objects with filter()
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

const lessThan20 = prices.filter((item) => item["price"] < 20);
console.log(lessThan20);

const inStock = prices.filter((item) => item["inStock"] == true);
console.log(inStock);

const lessThan20AndinStock = prices.filter(
  (item) => item["price"] < 20 && item["inStock"] == true
);
console.log(lessThan20AndinStock);

// Challenge #4: mapping objects with .map()

const reducedPrices = prices.map((item) => ({
  ...item,
  price: item.price * 0.75,
}));
//the spread operator is used to simplify copy the elements of iterable or propertiees from an object into a new context (context here is {})
//within the context, we can also override (if same with the first copied iterable) or add properties or even merge more than one iterable.
console.log(reducedPrices);

const someDiscountedPrices = prices.map((item) => {
  if (item["price"] > 10) {
    return { ...item, price: item["price"] * 0.75 };
  } else {
    return item;
  }
});

console.log(someDiscountedPrices);

const ad = someDiscountedPrices
  .filter((item) => item["price"] > 10)
  .map((item) => `${item.product} are on sale for $${item.price.toFixed(2)}.`);
console.log(ad);

// Extra Challenge

const longAd = ad.reduce((acc, string) => acc + " " + string);
console.log(longAd);
