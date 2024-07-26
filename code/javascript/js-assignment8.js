// Challenge #1: Practice.filter()

const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

greaterThanSeven= x => x>7
console.log(arr.filter(greaterThanSeven))

evenArr= x => x%2==0;
console.log(arr.filter(evenArr))

console.log(arr.filter(x => x%3===0))


// Challenge #2: Practice .map()

console.log(arr.map(x => x*x))

console.log(arr.map(x => x/2))

// Challenge #3: Using .filter() to filter objects

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

  console.log(prices.filter(object => object.price <20))//prices less than $20
  console.log(prices.filter(object => object.inStock))
  console.log(prices.filter(object => object.inStock && object.price <20))

  // Challenge #4: Using .map() to map objects
  console.log("\n Discount prices\n")
  console.log(prices.map(object => ({...object, price: object.price *0.75})))//Dicount of 25%
  
  console.log("\nOnly $10 reduced to 25%\n")
const discountPriceSelected = prices.map(object => ({...object, price: object.price > 10 ? object.price *0.75 : object.price}))//Dicount of 25%
console.log(discountPriceSelected)


const SalesAds = discountPriceSelected.map(object => `${object.product} are on sale for only $${object.price.toFixed(2)}`)
  console.log(SalesAds)

  console.log(SalesAds.reduce((item, amount) => item +' '+ amount ))