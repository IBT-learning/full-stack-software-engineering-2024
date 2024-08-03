//Challenge #1 practice filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Larger than 7 array
const largeNums = nums.filter((x) => {
    if (x > 7) {
        return true;
    } else {
       return false; 
    }
})
console.log(largeNums);

//Array with even numbers
const evenNums = nums.filter( (x) => {
    if (x % 2 == 0) {
        return true;
    } else {
       return false; 
    }
}
)

console.log(evenNums);

//Array of numbers divisible by 3
const oddNums = nums.filter( (x) => {
    if (x % 3 == 0) {
        return true;
    } else {
       return false; 
    }
}
)

console.log(oddNums);
 //Challenge #2 practice map
 //Squared
  const squareNums = nums.map((x) => x**2);
    
  console.log(squareNums);

  //Halved
  const halvedNums = nums.map((x) => x/2);
  console.log(halvedNums);
 
  //Challenge #3 Using filter() to filter objects
  const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];
// < 20$
  const itemsPrices = prices.filter(product => product.price < 20);
  console.log(itemsPrices);

//products in stock
const stockedProducts = prices.filter(product => product.inStock);
console.log(stockedProducts);

// stocked products costing less than 20$
const stockedCheapItems = prices.filter(product => product.inStock && product.price < 20);
console.log(stockedCheapItems);

//Challenge#4 Using map() to map objects
  const offerPrices = prices.map(product => (product.price * 0.75))
  console.log(offerPrices);

  //Reduce prices for products costing less than 10$
   const limitedOfferPrices = prices.map(product => {
    if (product.price > 10) {
        return product.price * 0.75;
    }
    return product.price;
   })
   console.log(limitedOfferPrices);

   //Ad for sale 
   const ads = [
       "Shoes on sale for only 37.5$ .Don't miss out!",
       "Grab a pair of shoes today for only 37.5$!",
       "Limited offer on shoes .Going for 37.5$!"

   ]
   console.log(ads);