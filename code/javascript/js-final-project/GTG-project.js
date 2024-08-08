// Guess The Number
// How the game works
// Before starting to code this project, please find a partner and play this game together verbally for a few rounds.

// Alice thinks of a number
// Bob guesses a number
// Alice says "higher", "lower", or "correct"
// repeat 2 & 3 until Bob guesses correctly
// After you get a feel for the game, it's time to write a software version of the game, where the human thinks of a number between 1 and 100 and the computer tries to guess it.

// Coding the game
// You will complete this project in a JavaScript file that you will run in the browser, via an HTML file. Get input from the user using prompt() and send messages to the user using alert()

// You will need to use loops and conditionals to make this program work. Technically you could complete it without any functions, but I strongly recommend using functions to keep your code tidy and organized.

// Gameplay will work like this:

// ask the user to choose a number between 1 and 100
// ask the user something like "is the number higher than, lower than, or exactly 50?"
// continue asking that question, but modify the number based on their previous answers
// when the user says you got the number right, end the game
// The best way to narrow down your guesses is by using the binary sort algorithm. This Khan Academy article explains the algorithm and gives a useful visualization.

// Tips
// to save the player (and you) from typing too much, offer the user the option to answer h (for higher), l (for lower), or c for correct
// off-by-one errors are a risk here. Double check the distinction betweens "greater than" and "greater than or equal to", and "less than" and "less than or equal to"
// sign reversal errors are also a common mistake. Make sure you're not using > when you should be using <, and vice versa
// when you feel like your game is close to ready, ask someone to play it. Watching them play is a great way to spot bugs, poor UX, and other issues with the program
// Extra challenges
// keep track of the number of guesses we needed, and display a message with that number at the end of the game
// handle invalid/unexpected inputs from the user
// when the game is over, ask the user if they want to play again, and if so play another round. (Hint: this requires a while loop.)
// write a version of the game in which the computer chooses the number, the user guesses numbers, and the computer answers whether the guess is higher or lower
// if you finish that and want more, make the program start by giving the user a choice between the two games, and then start the game they ask for
// ... and then ask again at the end of each round


gameChoice ();


function computerGuess() {
    let lower = 1;
    let higher = 100;
    let guesses = 0;

    alert(`Think of a random number between ${lower} and ${higher} and let me guess 😄😄`)
    
    while(true){
    let guessNum = Math.floor((higher + lower)/2);
    
    prmpt = prompt(
        `Is the number higher than, lower than, or exactly ${guessNum}
h = higher, l = lower, c = correct
\n Enter h, l or c`)
    guesses++;
    
    if(prmpt === null ){//caters for cancel
        break ;
    }

     
       if(prmpt === 'c'){
            alert((`Yeyy i'm right 💃! I guessed ${guesses} time${guesses === 1 ? "" : "s"}.`));
            const playAgain= confirm("Would you love to play again?")
            {
                if(!playAgain){
                    gameChoice()
                }
        else{
              computerGuess()
            }
            break;
        }
    }

        else if(prmpt === 'h'){
            higher = guessNum - 1
                    }
        else if(prmpt === 'l'){
            lower = guessNum + 1
            }
            
        else {
            guesses--;
            alert("Wrong answer. Please enter c, h or l");
             }
        }
    }



function userGuess() {
    let guesses = 0;
    let lower = 1;
    let higher = 100;

    num = Math.floor(Math.random() * 101);
    alert(`Guess the number I've chosen 😇. Number is between ${lower} and ${higher}`)

    while(true){
    let userNum = prompt("Enter number")

    if(userNum === null){//caters for cancel
        break;
    }

    userNum = Number(userNum)
    if (isNaN(userNum) || userNum < lower || userNum > higher) {
        alert(`Please enter a valid number between ${lower} and ${higher}`);
        continue; 
    }
    guesses++;

    if (userNum > num){
        alert(`${userNum} is too high`)
    }

    else if (userNum < num){
        alert(`${userNum} is too low`)
    }

    else {
        alert(`Great you guessed correctly. You guessed ${guesses} time${guesses === 1 ? "" : "s"}.`)
        const playAgain = confirm("Would you like to play again?");
            if (playAgain) {
                userGuess(); 
            } else {
                gameChoice ();
            }
            break;
    }
    }
        
    }




function gameChoice (){
    while(true){
    const startPrompt = prompt(`Welcome to Guess The Number Game. What game would like to play?   Select 1 or 2.
        \n1. Computer Guess Game            2. User Guess Game `)

    if(startPrompt === null ){//caters for cancel
        break ;
    }

    if (Number(startPrompt) === 1){
        computerGuess();
    }
    else if (Number(startPrompt) === 2){
        userGuess();
    }
    else{
        alert('Wrong choice! Try again');
    }
}
}