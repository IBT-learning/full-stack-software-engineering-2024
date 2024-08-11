// challenge 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const larger = numbers.filter(num => num > 7)
console.log(larger);

const even = numbers.filter(num => num % 2 === 0)
console.log(even);

const divisor = numbers.filter(num => num % 3 === 0)
console.log(divisor);


//challenge 2
const square = numbers.map(num => num ** 2)
console.log(square);

const half = numbers.map(num => num / 2)
console.log(half);


// challenge 3
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

const lessCost = prices.filter(stockprice => stockprice.price < 20)
console.log(lessCost);

const instock = prices.filter(available => available.inStock)
console.log(instock);

const instockCostless = prices.filter(instockLess => instockLess.inStock && instockLess.price < 20)
console.log(instockCostless);


// challenge 4
const sales = prices.map(prices => ({...prices,price: prices.price * 0.75}))
console.log(sales);

const lowProduct = prices.map(low => ({
    ...low,
    price: low.price > 10 ? low.price * 0.75 : low.price
}))
console.log(lowProduct)

// extra challenge
const advert = ["we", "are", "having", "a", "sale", "for", "products", "above", "10"]
const advertise = advert.reduce((word,words) => word + " " + words)
console.log(advertise);