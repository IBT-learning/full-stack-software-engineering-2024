console.log("Challenge #1: Practice .filter()");

//Make an array with the numbers 1 - 10
const array = [1,2,3,4,5,6,7,8,9,10]

// Use .filter() to create an array with only numbers that are larger than 7
const newArray1 = array.filter((x) => x > 7);

// Use .filter() to create an array with only numbers that are even
const newArray2 = array.filter((x) => x % 2 === 0);

//Use .filter() to create an array with only numbers that are divisible by 3
const newArray3 = array.filter((x) => x % 3 ===0);

console.log(" ");
console.log("Challenge #2: Practice .map()");
//Using that same array with number 1-10
//Use .map() to create an array with the square of each number (such as [1, 4, 9, 16...])
const newArray4 = array.map((x) => x * x);

//Use .map() to create an array with each number halved (such as [0.5, 1, 1.5...])
const newArray5 = array.map((x) => x/2);

console.log(" ");
console.log("Challenge #3: Using .filter() to filter objects");
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

//Use .filter() to create an array with only the product objects that cost less than $20
const newPrices = prices.filter(price => price.price < 20);

// //Use .filter() to create an array with only the product objects that are in stock
const stockItems = prices.filter(stock => stock.inStock === true);

// //Use .filter() to create an array with only the product objects that are in stock AND cost less than $20
const stockPrices = prices.filter(stock => stock.price < 20 && stock.inStock === true)

console.log(" ");
console.log("Challenge #4: Using .map() to map objects");
//We're having a sale! Use .map() to create an array with all the same objects, but with the prices reduced by 25%
const  reducedItems = prices.map(reduced => ({product: reduced.product, price: (reduced.price * 0.75).toFixed(2), inStock: reduced.inStock}));

//The sale is only for products that cost more than $10. Rewrite the previous map to only change the prices for items with prices above $10.
const selectedItems = prices.map(reduced => ({
    product: reduced.product, 
    price: reduced.price > 10 ? (reduced.price * 0.75 ).toFixed(2) : reduced.price,
    inStock: reduced.inStock}));


//We're making an ad for the sale. Make an array of strings that read, for example, "shoes are on sale for only $37.50!"
const ad = selectedItems.map(saleAd => `${saleAd.product} are on sale for only $${saleAd.price}!`
);

console.log(" ");
console.log("Can you use .reduce() to join all the strings from the previous together into one long string?");
const ads = ad.reduce((stringAcc, string) => stringAcc  + ' ' + string)





