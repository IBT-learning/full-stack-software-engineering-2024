# JavaScript Assignment #2: Booleans

You may do these challenges all together in one file, or in separate files, according to your preference. You will turn them in all together.

## Challenge #1

-   Create a constant variable called `personAge` and assign it a number between 1 and 100
-   Create a constant variable called `isAdult` and assign it a _boolean expression_ determining whether that number is above or below 18
-   Create a constant variable called `isElderly` and assign it a _boolean expression_ determining whether that number is above or below 60
-   Create a template string that will read like this: `Is this person an adult? true. Is this person elderly? false` (but fill in the correct variables for true and false)
-   **TIP**: Make sure you test by changing the value of `personAge` to make sure it works for children, adults below 60, and adults over 60

#### Extra challenges (you may do either or neither or both!)

-   Make `personAge` a random number between 0 and 100. (You may want to log the number to make sure your booleans are evaluating correctly!)
-   Use a conditional statement to log "This person is a child" or "This person is an adult" or "This person is elderly" to the console.

## Challenge #2

The string function [.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) returns a boolean. It determines whether a string includes a given substring.

```js
let sentence = "This is an example sentence"
let includesExample = sentence.includes("example")
console.log(includesExample) // true
```

For this challenge

-   create a constant variable called `lyric` and assign it your favorite song lyric.
-   create a constant variable called `includesLove` and assign it a JS expression determining whether your lyric includes the word "love"
-   do the same thing with the words "heart", "life", "baby", and "yeah".
-   create and log a constant variable called `isTypical` and assign it a boolean expression determining whether ANY of the conditions are true
-   create and log a constant variable called `isVeryTypical` and assign it a boolean expression determining whether ALL of the conditions are true

#### Extra challenges

-   Use a conditional statement to log "This song is typical" or "This song is very typical" or "This song is not typical" to the console.
-   Find (or write!) a song lyric that meets each condition. Repeat the previous step for each lyric.
