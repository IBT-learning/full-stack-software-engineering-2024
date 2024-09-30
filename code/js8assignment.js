// CHALLENGE 1
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// PART A
const large = function (x) {
    if (x > 7) {
        return true
    } else {
        return false
    }
}
console.log(nums.filter(large));

// or
console.log(nums.filter((x) => {
    if (x > 7) {
        return true
    } else {                   //using ES6 syntax
        return false
    }
}));

// or
console.log(nums.filter(x => x > 7));    //using concise syntax

// PART B
const even = function (x) {
    if (x % 2 === 0) {
        return true
    } else {
        false
    }
}
console.log(nums.filter(even));

// or
console.log(nums.filter((x) => {
    if (x % 2 === 0) {
        return true
    } else {                    //using ES6 syntax
        return false
    }
}));

// or
console.log(nums.filter(x => x % 2 === 0));   //using concise syntax

// PART C
const divisible = function (x) {
    if (x % 3 === 0) {
        return true
    } else {
        return false
    }
}
console.log(nums.filter(divisible));

// or
console.log(nums.filter((x) => {
    if (x % 3 === 0) {
        return true
    } else {                        //using ES6 syntax
        return false
    }
}));

// or
console.log(nums.filter(x => x % 3 === 0));   //using concise syntax

// CHALLENGE 2
// PART A
const sqaure = function (x) {
    return x ** 2
}
console.log(nums.map(sqaure));

// or
console.log(nums.map((x) => {
    return x ** 2     //using ES6 syntax
}));

// or
console.log(nums.map(x => x ** 2));    //using concise syntax

// PART B
const half = function (x) {
    return x / 2
}
console.log(nums.map(half));

// or
console.log(nums.map((x) => {
    return x / 2              //using ES6 syntax
}));

// or
console.log(nums.map(x => x / 2));    //using concise syntax

// CHALLENGE 3
// an array that takes objects as its values
const prices = [
    { product: "shoes", price: 50, inStock: true },           //0
    { product: "light bulb", price: 3, inStock: true },       //1
    { product: "stuffed animal", price: 15, inStock: false }, //2
    { product: "jacket", price: 75, inStock: false },         //3
    { product: "keychain", price: 4, inStock: true },         //4
  ];

// PART A
const less20 = function (x) {
    if (x.price < 20) {
        return true
    } else {
        return false
    }
}
console.log(prices.filter(less20));

// or
console.log(prices.filter((x) => {
    if (x.price < 20) {
        return true  
    } else {               //using the ES6 syntax
        return false
    }
}));

// or
console.log(prices.filter((x) => x.price < 20));  //using concise syntax

// PART B
const inStock = function (x) {
    if (x.inStock === true) {
        return true
    } else {
        return false
    }
}
console.log(prices.filter(inStock));

// or
console.log(prices.filter((x) => {
    if (x.inStock === true) {
        return true 
    } else {                //using ES6 syntax
        return false
    }
}));

// or
console.log(prices.filter(x => x.inStock === true));  //using concise syntax

// PART C
const inStock_less20 = function (x) {
    if (x.inStock === true && x.price < 20) {
        return true 
    } else {
        return false
    }
}
console.log(prices.filter(inStock_less20));

// or
console.log(prices.filter((x) => {
    if (x.inStock === true && x.price < 20) {
        return true 
    } else {              //using the ES6 syntax
        return false
    }
}));

// or
console.log(prices.filter(x => x.inStock === true && x.price < 20));   //using concise syntax

// CHALLENGE 4
// PART A
const reducedPrice = function (x) {
    x.price = x.price * 75 / 100
    return x
}
console.log(prices.map(reducedPrice));

// or
console.log(prices.map((x) => {
    x.price * 75 / 100
    return x       //ES6 syntax
}));


// PART B TODO:what is the logic for logging items that are not on sale, with their original price
const reducedPrice_more10 = function (x) {
    if (x.price > 10) {
        x.price * 75 / 100
        return x
    } else {
        return x
    }
}
console.log(prices.map(reducedPrice_more10));

// PART C TODO:how do i prevent the products not on sale from logging undefined
const ad = function (x) {
    if (x.price > 10) {
        return `${x.product}s are on sale for only $${x.price}`
    }
}
console.log(prices.map(ad));

// PART D - Extra Challenge























