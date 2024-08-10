// Challenge #1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const largerThanSeven = numbers.filter(num => num > 7)
console.log("Numbers greater than 7:", largerThanSeven) 

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log("Even numbers:", evenNumbers)

const divisibleByThree = numbers.filter(num => num % 3 === 0)
console.log("Numbers divisible by 3:", divisibleByThree)

// Challenge #2
const squares = numbers.map(num => num * num)
console.log("Squares of numbers:", squares)

const halves = numbers.map(num => num / 2)
console.log("Halves of numbers:", halves)

// Challenge #3
const prices = [
  { product: "shoes", price: 50, inStock: true },
  { product: "light bulb", price: 3, inStock: true },
  { product: "stuffed animal", price: 15, inStock: false },
  { product: "jacket", price: 75, inStock: false },
  { product: "keychain", price: 4, inStock: true },
];

const cheapProducts = prices.filter(item => item.price < 20)
console.log("Products costing less than $20:", cheapProducts)

const inStockProducts = prices.filter(item => item.inStock)
console.log("Products in stock:", inStockProducts)

const inStockAndCheapProducts = prices.filter(item => item.inStock && item.price < 20)
console.log("Products in stock and costing less than $20:", inStockAndCheapProducts)

// Challenge #4
const salePrices = prices.map(item => ({
  product: item.product,
  price: item.price * 0.75,
  inStock: item.inStock
}))
console.log("Products with prices reduced by 25%:", salePrices)

const conditionalSalePrices = prices.map(item => ({
  product: item.product,
  price: item.price > 10 ? item.price * 0.75 : item.price,
  inStock: item.inStock
}))
console.log("Products with prices reduced by 25% (for items above $10):", conditionalSalePrices)

const saleMessages = conditionalSalePrices.map(item => 
  `${item.product} are on sale for only $${item.price.toFixed(2)}!`
)
console.log("Sale messages:", saleMessages)

// Extra challenge
const adMessage = saleMessages.reduce((acc, msg) => acc + " " + msg)
console.log("Final ad message:", adMessage)
