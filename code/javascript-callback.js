const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greater = nums.filter(x => x > 7 );
const divisibe2 = nums.filter(x => x % 2 == 0);
const divisible3 = nums.filter(x => x % 3 == 0);
//console.log(greater);
//console.log(divisibe2);
//console.log(divisible3);

//CHALLENGE 2
const square = nums.map(x => x * x);
const halve = nums.map(x => x/2);
//console.log(square);
//console.log(halve);

//CHALLENGE 3
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ]
  
  const less20 = prices.filter(x => x.price < 20);
  const inStock = prices.filter(x => x.inStock);
  const both = prices.filter(x => x.price < 20 && x.inStock)
  //console.log(less20);
  //console.log(inStock);
  //console.log(both);

  //CHALLENGE 4
  const sale = prices.map(x => {
    if (x.price > 10) {
 x.price * 0.75 ;
    
    }
  });
  console.log(sale);
  
  const ads = sale.map(x => `${x.product} is on sale for only $${x.price}!`);
  //console.log(ads)