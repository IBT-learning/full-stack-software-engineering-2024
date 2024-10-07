// JavaScript Assignment #8: Callbacks

// Challenge #1: Practice .filter()
number=[1,2,3,4,5,6,7,8,9,10]

// Use .filter() to create an array with only numbers that are larger than 7
const num=number.filter(number=> number>7)
console.log(num)

// Use .filter() to create an array with only numbers that are even
const evenNumber=number.filter(number => number%2===0)
console.log(evenNumber);

// Use .filter() to create an array with only numbers that are divisible by 3
const divNumber=number.filter(number => number%3===0)
console.log(divNumber);

// Challenge #2: Practice .map()

// Use .map() to create an array with the square of each number (such as [1, 4, 9, 16...])
const squaredNum= number.map(number=>number**2)
console.log(squaredNum);

// Use .map() to create an array with each number halved (such as [0.5, 1, 1.5...])
const halvedNum=number.map(number=>number/2)
console.log(halvedNum);


// Challenge #3: Using .filter() to filter objects
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]

// Use .filter() to create an array with only the product objects that cost less than $20
const newPrice=prices.filter(prices=>prices.price<20)
console.log(newPrice);

// Use .filter() to create an array with only the product objects that are in stock
const inStock=prices.filter(prices=>prices.inStock===true)
console.log(inStock)

// Use .filter() to create an array with only the product objects that are in stock AND cost less than $20
const lowStocks=prices.filter(prices=>{
    return prices.price<20 && prices.inStock===true
})
console.log(lowStocks);

// Challenge #4: Using .map() to map objects
// We're having a sale! Use .map() to create an array with all the same objects, but with the prices reduced by 25%
const reducedPrice=prices.map(prices=>prices.price*0.75)
console.log(reducedPrice);

// The sale is only for products that cost more than $10. Rewrite the previous map to only change the prices for items with prices above $10.
const productPrice=prices.map(prices=>{
    if (prices.price>10){
        return prices.price= prices.price*0.75
    }
    return prices.price
})
console.log(productPrice);

// We're making an ad for the sale. Make an array of strings that read, for example, "shoes are on sale for only $37.50!"
const adSales =prices.map(prices=>{
    return `${prices.product} are on sale for only $${prices.price}!`
})
console.log(adSales);


// Extra challenges (optional)
// Can you use .reduce() to join all the strings from the previous together into one long string?
const joinStrings=adSales.reduce((accumulator,currentValue)=>accumulator+currentValue)
console.log(joinStrings);
