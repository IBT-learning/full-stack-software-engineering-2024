//CHALLENGE 1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const greater = nums.filter(x => x > 7)
console.log(greater)

const even = nums.filter(x => x % 2 == 0)
console.log (even)

const divisible = nums.filter(x => x % 3 == 0)
console.log (divisible)

//CHALLENGE 2
const square = nums.map(x => x**2)
console.log (square)

const halves = nums.map(x => x / 2)
console.log (halves)

//CHALLENGE 3
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];


  function isLessThan20(produce){
    return produce.price < 20
  }
  const filtering = prices.filter(isLessThan20)
  console.log(filtering)


  function stock(produce){
     return produce.inStock == true
  }
  const trulyInStock = prices.filter(stock)
  console.log(trulyInStock)


  function stockPrice(produce){
        return produce.inStock == true && produce.price < 20
  }
  const conjoin = prices.filter(stockPrice)
  console.log(conjoin)

  //CHALLENGE 4
  
  function sale(productPrice){
      if(productPrice.price > 10){
        const percentage = (productPrice.price * 25) / 100
        return percentage
      }else{
          return productPrice.price
      }
  }
  const salePrice = prices.map(sale)
  console.log (salePrice)
  
  const sales = [`Shoes are on sale for only $${salePrice[0]}]\n`, `Stuffed animals are on sale for only $${salePrice[2]}\n`,
    `Jackets are on sale for only $${salePrice[3]}`]
  console.log(sales)

  const add = sales.reduce((a, b) => a + b)
  console.log (add)