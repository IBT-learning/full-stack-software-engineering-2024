//Strings 
const myName = "Rea";
console.log(myName.length);
console.log("Hello, My name is " + myName);

const myNameCaps = myName.toUpperCase();
console.log("When my friends see me they shout " + myNameCaps +"!");


//Numbers
//Challenge 1 
const number = 200;
var newNumber = number * 2;
newNumber = newNumber + 8;
newNumber = newNumber / 2;
newNumber = newNumber - number;
console.log(newNumber);

//Challenge 2
function findArea(radius){
    const area = Math.PI * Math.pow(radius, 2);
    const roundedArea = area.toFixed(4);
    return roundedArea;
}

console.log(findArea(5));

//Challenge 3
