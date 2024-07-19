// Challenge #1 .filter

const nums = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]
const biggerNums = nums.filter((b) => b > 7)
console.log(biggerNums);

const evenNums = nums.filter((b) => b % 2 == 0)
console.log(evenNums);

const oddNums = nums.filter((b) => b % 3 == 0)
console.log(oddNums);

// Challenge #2 .map

const numSquared = nums.map((a) => a ** 2)
console.log(numSquared);

const halfNum = nums.map((a) => a / 2)
console.log(halfNum);

// Challenge #3 

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

  const affordableProducts = prices.filter((x) => x.price < 20)
  console.log(affordableProducts);

  const productsInStock = prices.filter((x) => x.inStock == true)
  console.log(productsInStock);

  const cheapProductsInStock = prices.filter((x) => x.price < 20 && x.inStock == true)
  console.log(cheapProductsInStock);

//   Challenge #4
const sale = prices.map((goods) => goods.price * 0.75)
console.log(sale);

const salePrices = prices.map((goods) => {
    if(goods.price > 10){
        return goods.price * 0.75
    } else{
        return goods.price
    }
    })
console.log(salePrices);

const saleAds = prices.map((goods) => {
    if(goods.price > 10){
        return `${goods.product} are available for only $${(goods.price * 0.75).toFixed(2)}`
    } else{
        return `${goods.product} are available for only $${(goods.price).toFixed(2)}`
    }
    })
console.log(saleAds);

// Extra Challenge

const allAds = saleAds.reduce((x, y) => x + ", " + y)
console.log(allAds);