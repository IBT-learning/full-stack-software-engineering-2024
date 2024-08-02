// classic for loop
// syntax
// for (variable declaration, condition for execution of code block, runs after code block execution){
//      code block
//}
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// for..of loop is a type of for loop
/* syntax is 
  for (element of iteriable){
    element is a new variable created in code block
    iteriable is variable that already exist
}
*/
let word = "prestidigitation";

for (letter of word) {
  console.log(letter);
}

// loop with a conditional in it
let daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
for (day of daysOfWeek) {
  if (day === "Sat") {
    console.log("Saturday");
  } else if (day === "Wed") {
    console.log("Wednesday");
  } else {
    console.log(`${day}day`);
  }
}

// nested loop is a loop with a loop in it
const vowels = "aeiou";

justVowels = []; //create an empty array
for (letter of word) {
  //for each letter of word (variable which value is prestidigitation)
  for (vowel of vowels) {
    // for each vowel in vowels (string aeiou)
    if (letter === vowel) {
      //if the letter in word is equiivalent to the vowel in vowels
      justVowels.push(letter); //push the letter into the array
    }
  }
}
console.log(justVowels);
