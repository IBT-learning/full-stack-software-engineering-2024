//Challenge 1
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"];

for ( const word of wordList){
    console.log(word.toUpperCase());
}
 for (const word of wordList){
    const capitalizedLetter = word.slice(0,1).toUpperCase() + word.slice(1);
    console.log(capitalizedLetter);
 }
 
 const newArray = [];
 for (const word of wordList){
   
    const capitalizedLetter = word.toUpperCase()
    newArray.push(capitalizedLetter);
    
 }
 console.log(newArray);

let newString = "";
for (const word of wordList){
    const capitalizedLetter = word.toUpperCase();
    newString += capitalizedLetter + " ";
}
console.log(newString.trim());


// challenge 2 
for (let i = 1 ;i < 40 ; i ++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i +"fizzbuzz")
    } else if (i % 3 === 0){
        console.log(i + "fizz")
    } else if( i % 5 === 0 ){
        console.log(i + "buzz")
    } else {
        console.log(i);
    }
}