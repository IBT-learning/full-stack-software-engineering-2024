// Challenge 1: Practice .filter()
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
const Number = num.filter((x) => x > 7);
console.log(Number);

const evenNum = num.filter((x) => x % 2 === 0)
console.log(evenNum);

const divisible = num.filter((x) => x % 3 === 0)
console.log(divisible);


// Challenge 2: Praactice.map()

const squaredNum = num.map((x) => x * x);
console.log(squaredNum);

const halvedNum = num.map((x) => x / 2 )
console.log(halvedNum);

// Challenge 3: Using.filter() to filter objects

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

  const lessPricedProducts = prices.filter(item => item.price < 20)
  console.log(lessPricedProducts);

  const inStock = prices.filter(item => item.inStock % 2 == 1)
  console.log(inStock);

  const inStockAffordable = prices.filter(item => item.inStock && item.price < 20)
  console.log(inStockAffordable);

  // Challenge 4: Using.map() to map objects

  const sale = prices.map(item => ({...item, price: item.price * 0.75})) 
  console.log(sale);

  const onSale = prices.map(item => (item.price > 10 ? {...item, prices: item.price * 0.75} : item))
  console.log(onSale);

  const saleMessages = prices.filter(item => item.price > 10).map(item => 
    {
    const salePrice = (item.price * 0.75).toFixed(2);
    return `${item.product} are on sale for only $${salePrice}!`;
  });

console.log(saleMessages);