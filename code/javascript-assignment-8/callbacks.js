// Challenge 1

const numbers = [1,2,3,4,5,6,7,8,9,10]

const oddNumbers = numbers.filter((x) => {
    if (x % 2 == 1){
        return true;
    } 
    return false;
})
console.log(oddNumbers)

const evenNumbers = numbers.filter((x) => {
    if(x % 2 == 0){
        return true;
    }
    return false;
} )
console.log(evenNumbers);

const numbersDivBy3 = numbers.filter((x) =>{
    if (x % 3 == 0) {
       return true;
    }
    return false;
})
console.log(numbersDivBy3);

// Challenge 2
const doubleNumbers = numbers.map((x) => x * 2);
console.log(doubleNumbers);

const halfNumbers = numbers.map((x) => x/2);
console.log(halfNumbers);

//Challenge 3

const prices = [
    { product: "shoes", price: 50, inStock: true },
    { product: "light bulb", price: 3, inStock: true },
    { product: "stuffed animal", price: 15, inStock: false },
    { product: "jacket", price: 75, inStock: false },
    { product: "keychain", price: 4, inStock: true },
  ];

const priceLessThan20 = prices.filter((item) => {
    if(item.price < 20){
    return true;
}
return false;
})
console.log(priceLessThan20)

const productsInStock = prices.filter((item) => {
    if(item.inStock == true) {
        return true;
    }
    return false;
})
console.log(productsInStock)

const InStockAndLess = prices.filter((item) => {
    if((item.inStock == true) && (item.price < 20)) {
        return true;
    }
    return false;
})
console.log(InStockAndLess)

// Challenge 4
const salePrices = prices.map((item) => {
    if(item.price > 10) {
        return {...item, price: item.price / 2};
    }
    else if(item.price < 10) {
        return item
    }
});
console.log(salePrices)

const salesAd = salePrices.map((item) =>`${item.product} are on sale for only ${item.price}`)
console.log(salesAd)

//Extra Challenge
const salesAdString = salesAd.reduce((a,b)=> a + b + ' ' , '');
console.log(salesAdString);



