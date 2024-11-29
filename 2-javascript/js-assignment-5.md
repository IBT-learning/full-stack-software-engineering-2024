# JavaScript Assignment #5: Functions

You may do these challenges all together in one file, or in separate files, according to your preference. You will turn them in all together.

## Challenge #1: Capitalize

- Declare a function called `capitalize` that takes one argument, `word`
- Within the function, capitalize the word
- Return the capitalized word
- When you run `console.log(capitalize("hello"))` you should get `HELLO`

## Challenge #2: Percentage Calculator

- Declare a function called `percentCalc` that takes two arguments, `amount` and `percentage`
- Return the given percentage of the amount
- When you run `console.log(percentCalc(200, 20))` you should get `40`

## Challenge #3: Divisible

- Declare a function called `divisible` that takes two argments, `dividend` and `divisor`
- Determine whether the dividend is divisible by the divisor (meaning the division will result in a whole number with remainder)
  - Tip: Use the modulo operator
- Return true or false
- When you run `console.log(divisble(6, 3))` you should get `true`
- When you run `console.log(divisble(15, 4))` you should get `false`

## Challenge #4: Friend, Enemy

- Declare a function called `greeting` that takes in two arguments, `firstName` and `status`
- Inside the function, write a conditional that determined whether `status` is the string `"friend"` or the string `"enemy"`
- If the person is a friend, return the string that welcomes them by their name
- If the person is an enemy, return a string that tells them to go away
- When you run `console.log(greeting("Superman", "friend"))` you should get something like `Hello Superman!`
- When you run `console.log(greeting("Lex Luthor", "enemy"))` you should get something like `Go away Lex Luthor!`

#### Extra challenge (optional)

- What do you think this function should do if the second argument doesn't match `"friend"` or `"enemy"`? Think of something fun and implement it!
