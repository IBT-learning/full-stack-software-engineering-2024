const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(x.filter(y => y > 7))
console.log(x.filter(y => y % 2 == 0))
console.log(x.filter(y => y % 3 == 0))
console.log(x.map(y => y * y))
console.log(x.map(y => y / 2))

const shop = [
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
];



console.log(shop.filter(shopItem => shopItem.price < 20))

console.log(shop.filter(shopItem => shopItem.inStock == true))

console.log(shop.filter(shopItem => shopItem.inStock == true && shopItem.price < 20))

console.log(shop.map(shopItem =>({ ...shopItem, price: shopItem.price * 0.75 })))



//     Step 2: Only reduce prices for products that cost more than $10
const shop1 = shop.map(shopItem => (
    shopItem.price > 10 ? { ...shopItem, price: shopItem.price * 0.75 } : shopItem
));

// Step 3: Create an array of strings for the ad
const saleAds = shop1.map(shopItem =>
`${shopItem.product} are on sale for only $${shopItem.price.toFixed(2)}!`
 );
 console.log(shop1)
 console.log(saleAds)
// Step 4: Use .reduce() to join all the strings into one long string
const adString = saleAds.reduce((acc, ad) => acc + " " + ad);

// Output the result
 console.log(adString);


