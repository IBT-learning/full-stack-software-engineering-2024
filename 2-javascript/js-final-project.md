# Guess The Number

## How the game works

Before starting to code this project, please find a partner and play this game together verbally for a few rounds.

1. Alice thinks of a number
2. Bob guesses a number
3. Alice says "higher", "lower", or "correct"
4. repeat 2 & 3 until Bob guesses correctly

After you get a feel for the game, it's time to write a software version of the game, where the _human_ thinks of a number between 1 and 100 and the _computer_ tries to guess it.

## Coding the game

You will complete this project in a JavaScript file that you will run in the browser, via an HTML file. Get input from the user using `prompt()` and send messages to the user using `alert()`

You will need to use loops and conditionals to make this program work. Technically you could complete it without any functions, but I strongly recommend using functions to keep your code tidy and organized.

Gameplay will work like this:

1. ask the user to choose a number between 1 and 100
1. ask the user something like "is the number higher than, lower than, or exactly 50?"
1. continue asking that question, but modify the number based on their previous answers
1. when the user says you got the number right, end the game

> The best way to narrow down your guesses is by using the binary sort algorithm. [This Khan Academy article](https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/a-guessing-game) explains the algorithm and gives a useful visualization.

## Tips

- to save the player (and you) from typing too much, offer the user the option to answer `h` (for higher), `l` (for lower), or `c` for correct
- off-by-one errors are a risk here. Double check the distinction betweens "greater than" and "greater than or equal to", and "less than" and "less than or equal to"
- sign reversal errors are also a common mistake. Make sure you're not using `>` when you should be using `<`, and vice versa
- when you feel like your game is close to ready, ask someone to play it. Watching them play is a great way to spot bugs, poor UX, and other issues with the program

## Extra challenges (optional)

- keep track of the number of guesses we needed, and display a message with that number at the end of the game
- handle invalid/unexpected inputs from the user
- when the game is over, ask the user if they want to play again, and if so play another round. (Hint: this requires a while loop.)
- write a version of the game in which the computer chooses the number, the user guesses numbers, and the computer answers whether the guess is higher or lower
  - if you finish that and want more, make the program start by giving the user a choice between the two games, and then start the game they ask for
  - ... and then ask again at the end of each round
