//Challenge 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThanSeven = numbers.filter(number => number > 7);
const evenNumbers = numbers.filter(number => number % 2 === 0);
const numbersDivisible3 = numbers.filter(number => number % 3 === 0);

console.log(greaterThanSeven);
console.log(evenNumbers);
console.log(numbersDivisible3);

//Challenge 2 

const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);
const halvedNumbers = numbers.map(number => number/2);
console.log(halvedNumbers);

//Challenge 3
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

const pricesLessThan20 = prices.filter(prices => prices.price < 20);
console.log(pricesLessThan20);
const productsInStock = prices.filter(prices => prices.inStock === true);
console.log(productsInStock)
const inStockAndLessThan20 = prices.filter(prices => prices.price < 20 && prices.inStock === true);
console.log(inStockAndLessThan20);


//Challenge 4
const newSaleProducts = prices.map(prices => {
    if (prices.price > 10){
        const salePrice = prices.price - prices.price*0.25;
        return `${prices.product} are on sale for only $ ${salePrice}!`
    }
    return null;
}).filter(item => item !== null);

console.log(newSaleProducts);

const saleAd = newSaleProducts.reduce((acc, current) => acc + ' ' + current, '');

console.log(saleAd);