const name = "Blessing";
console.log(name.length);
console.log(`Hello, my name is ${name}`);
console.log("When my friends see me they shout" + " " + name.toUpperCase()); // tempelate string
console.log(`When my friends see me they shout ${name.toUpperCase()}`); // another way of doing this

const num = 2;
const total = (num * 2 + 8) / 2 - 2;
console.log(total)

const radius = 2;
const area = Math.PI * radius **2;
console.log(area.toFixed(4));