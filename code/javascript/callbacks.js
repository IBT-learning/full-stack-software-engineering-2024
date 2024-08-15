const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

list = numbers.filter((numbers) => numbers > 7);
console.log(list);

evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
console.log(evenNumbers);

threeList = numbers.filter((numbers) => numbers % 3 === 0);
console.log(threeList);

const squares = numbers.map((numbers) => numbers * numbers);
console.log(squares);

const halves = numbers.map((numbers) => numbers / 2);
console.log(halves);

const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

const cheap = prices.filter((product) => product.price < 20);
console.log(cheap);

const instock = prices.filter((product) => product.inStock === true);
console.log(instock);

const specific = prices.filter(
  (product) => product.price < 20 && product.inStock === true
);
console.log(specific);

const sale = prices.map((product) => ({
  ...product,
  price: product.price * 0.75,
}));
console.log(sale);

const adjustedsale = prices.map((product) =>
  product.price < 20 ? { ...product, price: product.price * 0.75 } : product
);
console.log(adjustedsale);

const saletwo = prices.map((product) =>
  product.price < 10 ? { ...product, price: product.price * 0.75 } : product
);
console.log(saletwo);

const advert = prices.map((product) => {
  return `${product.product} for sale at ${product.price * 0.75}`;
});
console.log(advert);

salesad = [
  "shoes for sale at 37.5",
  "light bulb for sale at 2.25",
  "stuffed animal for sale at 11.25",
  "jacket for sale at 56.25",
  "keychain for sale at 3",
];

const longad = salesad.reduce((acc, salesad) => acc + " " + salesad, 0);
console.log(longad);
