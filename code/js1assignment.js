// String operations
const myName = "Matilda"
console.log(myName.length);
console.log(`Hello, my name is ${myName}`);
const upperCaseName = myName.toUpperCase()
console.log(`When my friends see me they shout ${upperCaseName}!`); 
// or
console.log(`When my friends see me they shout ${myName.toUpperCase()}!`);

// Numbers operation
const num = 2
console.log((num * 2 + 8) / 2 - num);

// Another way to do the above operation
const result1 = (num * 2 + 8) / 2 - num   //PEMDAS
console.log(result1);

// Area of circle (22/7 R**2)
const radius = 7
const result2 = Math.PI * radius ** 2
console.log(result2.toFixed(4));

// or 
const result3 = 22 / 7 * (radius ** 2)    //PEMDAS  --- how come without the brackets it still gives the same result yet multiplication should happen before division? ie. 7 * radius ** 2, then divide the result by 22
console.log(result3.toFixed(4));