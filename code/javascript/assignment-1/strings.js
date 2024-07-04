// Strings
// Create a constant variable and assign it a string literal with your name
// Console log the length of the string
// Console log the string template "Hello, my name is ____" but fill in the blank with the name variable.
// Console log the string template "When my friends see me they shout ____!" but fill in the blank with your name in all caps. (Use a string method to capitalize it!)

const myName = "Jade Harris";
console.log(myName.length);

const greeting = `Hello my name is ${myName}`;
console.log(greeting);

const friendlyGreeting = `When my friends see me they shout ${myName.toUpperCase()}!`;
console.log(friendlyGreeting);
