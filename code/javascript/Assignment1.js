const Name="japheth";
console.log("Length of name:", Name.length);
console.log(`Hello my name is ${Name}`);
console.log(`When my friends see me,they shout ${Name.toUpperCase()}!`);

/*Number challenge 1*/

const number=5;
let result= (number*2 + 8)/2-number;
console.log(`Challenge 1 output is ${result}`);

/* Challeneg 2*/
/* Area of circle is = Pi x radius x radius), Math.PI= Pi, Math.power=radius x 2*/
const radius=9;
const area=Math.PI*Math.pow(radius,2);
const Roundedarea=area.toFixed(4);
console.log(`Challenge 2 output for area of circle with radius ${radius}: is ${Roundedarea}`);
