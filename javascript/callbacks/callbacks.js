//CHALLENGE 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const  LargerThanSeven = numbers.filter(num => num > 7);
console.log('Numbers larger than 7:', LargerThanSeven);


const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 


const divisibleByThree = numbers.filter(num => num % 3 === 0);
console.log(divisibleByThree); 

//challenge 2
const squares = numbers.map(num => num * num);
console.log(squares);  


const halved = numbers.map(num => num / 2);
console.log(halved);


//challenge 3
const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];
  
//$20
  const underTwenty = prices.filter(item => item.price < 20);
console.log(underTwenty); 


const inStock = prices.filter(item => item.inStock);
console.log(inStock); 


const inStockUnderTwenty = prices.filter(item => item.inStock && item.price < 20);
console.log(inStockUnderTwenty); 


//challenge 4
const reducedPrices = prices.map(item => 
    ({
    ...item,
    price: item.price * 0.75
  }));
  console.log(reducedPrices);
  
  
  const discountedPrices = prices.map(item => ({
    ...item,
    price: item.price > 10 ? item.price * 0.75 : item.price
  }));
  console.log(discountedPrices);

  
  const saleAd = discountedPrices.map(item => `${item.product} are on sale for only $${item.price.toFixed(2)}!`);
console.log(saleAd);
