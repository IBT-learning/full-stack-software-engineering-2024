/* CHALLENGE #1 CAPITALIZE
- Declare a function called capitalize that takes one argument, word.
- within the function, capitalize the word
- Return the capitalized word
- When you 
console.log (capitalize("hello")) you should get HELLO
*/
function capitalize(word) 
 {return word.toUpperCase();}
 console.log(capitalize("hello"));

/* CHALLENGE #2 PERCENTAGE CALCULATOR
- Declare a function called percentCalc that take two arguments, amount and percentage
- Return the given percentage of the amount
- When you run 
console.log(percentCalc(200, 20)) you should get 40 */

function percentCalc(amount, percentage)
 {return (amount * percentage/100);}
 console.log(percentCalc(200, 20));

/* CHALLENGE #3: DIVISIBLE 
- Declare a function called divisible that takes two arguments, dividend and divisor
- Determine whether the dividend is divisible by the divisor (meaning the division will result in a whole number with remainder)
Tips: use the modulo operator
- Return true or false 
- When you run console.log(divisible(15,4)) you should get false */

function divisible(dividend, divisor) {
    return dividend % divisor === 0}
     console.log(divisible(15,4));
    console.log(divisible(20,2)); // i use even number

/* CHALLENGE #4: FRIEND, ENEMY
- Declare a function called "greeting" that take in two arguments, "firstName" and "status"
- Inside the function, write a conditional that determined whether "status" is the string "friend" or the string "enemy"
-if the person is a friend, return the string that welcomes them by their name.
- if the person is an enemy, return a string that tells them to go away
- when you run 
console.log(greeting("Superman", "friend")) 
you should get something like Hello Superman!
- when you run
console.log(greeting("Lex Luthur", "enemy")) 
you should get something like "Go away Lex Luthor!"
*/
function greeting(firstName, status)

 {if (status === "friend") 
    { return `Hello ${firstName}!`}

else 

if (status === "enemy") 
    {return `Go away ${firstName}!`} 

else 

{ return `Unkown status for ${firstName}`}

 }
    
console.log(greeting("Lex Luthur", "enemy"));
console.log(greeting("Superman", "friend"))







