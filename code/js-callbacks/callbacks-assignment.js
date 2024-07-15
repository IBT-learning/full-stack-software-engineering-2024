// Challenge #1: Practice.filter()
// number array from 1-10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// array with only numbers greater than 7
const firstArray = numbers.filter(x => (x > 7))
console.log(firstArray) // [ 8, 9, 10 ]

// array with only numbers that are even 
const secondArray = numbers.filter(y => (y % 2 == 0))
console.log(secondArray) // [ 2, 4, 6, 8, 10 ]

// array with only numbers divisible by 3
const thirdArray = numbers.filter(z => (z % 3 == 0))
console.log(thirdArray) // [ 3, 6, 9 ]

// Challenge #2: Practice .map()
// array with square of each numbers in the array
const fourthArray = numbers.map(x => (x ** 2))
console.log(fourthArray) // [ 1,  4,  9, 16, 25, 36, 49, 64, 81, 100 ]

// array with each numbers halved
const fifthArray = numbers.map(y => (y * 0.5))
console.log(fifthArray) // [ 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 ]

// Challenge #3: Using .filter() to filter objects
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

// array with products object less than $20
const productArray1 = prices.filter(product => (product.price < 20)) 
console.log(productArray1)

// array with only products that are in stock
const productsInStock = prices.filter(product => product.inStock === true)
console.log(productsInStock)

// array with only products that are in stock and less than $20
const productsArray = prices.filter(product => (product.inStock === true && product.price < 20))
console.log(productsArray)

// Challenge #4: Using .map() to map objects

// array with same object but with 25% price reduction
const salesDiscountArray = prices.map(product => {
   return {...product, price: product.price - (product.price * 0.25)}
})
console.log(salesDiscountArray)

// array with same object but with products that are in stock
const discountedSales = prices.map(product => {
    if (product.price > 10) {
      return {...product, price: product.price * 0.75}
    } else {
      return {...product, price: product.price}
    }
})
console.log(discountedSales)

// array of string that logs out a string
const adForSale = salesDiscountArray.map(product => {

  return `${product.product} are on sale for only $${product.price}`
})
console.log(adForSale)
/*
['shoes are on sale for only $37.5',
  'light bulb are on sale for only $2.25',
  'stuffed animal are on sale for only $11.25',
  'jacket are on sale for only $56.25',
  'keychain are on sale for only $3'] 
*/

// Extra Challenges
const longString = adForSale.reduce(
  (accumulatedval, eachString) => 
    accumulatedval + eachString + ", ", []
)
console.log(longString)
/*
shoes are on sale for only $37.5, 
light bulb are on sale for only $2.25, 
stuffed animal are on sale for only $11.25, 
jacket are on sale for only $56.25, 
keychain are on sale for only $3,
*/s