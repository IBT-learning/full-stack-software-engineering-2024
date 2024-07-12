console.log("CHALLENGE #1");
const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]

//Write a for..of loop that logs each word in the array. // Now, within the loop, capitalize each word
for (list of wordList){
    const capWords = list.toUpperCase();
    console.log(capWords)
}
console.log("");

console.log("Extra challenges 1");
//Try capitalizing only the first letter. There is no string method that does this, so you will need to utilize .slice()
const newArray = []; //a new array to add each capitalized word to it
let capStringWords = "";

for ( let i = 0; i < wordList.length; i++) {
    const capFirstWords = wordList[i][0].toUpperCase() + wordList[i].slice(1);

    //adding each capitalized word to the newArray
    newArray.push(capFirstWords);
    capStringWords += capFirstWords + " "; //Add each capitalized word to a string instead of (or in addition to) an array
}
console.log(newArray);

console.log(capStringWords);



console.log("");
console.log("CHALLENGE #2");
//Write a loop that will execute exactly 10 times. You can do this with either a while loop or a "classic" for loop
// you can log "true" and "false", or if you prefer, "yes" and "no"

for (let num = 1; num <= 10; num++){
    if(num % 3 == 0){
        console.log(`${num} is divisible by 3? yes`);
    }
    else {
        console.log(`${num} is divisible by 3? no`)}
}
console.log("");

//trying alternative methods
let num = 0;
while(num < 10){
    num++;
        console.log(`Number ${num} is divisible by 3? ${num % 3 == 0}`); 
}
console.log("");

console.log("Extra challenges 2");
for (let num = 1; num <= 40; num++) {
    if (num % 3 == 0 && num % 5 == 0 ){
        console.log(`${num} - FizzBuzz`);
    }
    else if(num % 3 == 0){
        console.log(`${num} - Fizz`);
    }
    else if (num % 5 == 0){
        console.log(`${num} - Buzz`)}
    else{
        console.log(`${num} - number is neither Fizz, Buzz nor FizzBuzz`);
    }
}


console.log("");














