// the user picks the number
// the computer tries to guess what the user's number is

let computerGuess   //computer's guess
let userResponse   //helps to adjust computer's guesses
let maxLimit = 100  //sets the max number that the computer should guess to---initially it's 100
let minLimit = 1  //sets the min number that the computer should guess to---initially it's 0
// the min and max are for the cutting off the computer's guessing range

/*
    WHAT I WANT THIS FUNCTION TO DO
    - guess the user's number
    - display the guess to the user
    - ask the user for feedback---whether it's higher or lower than the user's number or correct
    - use the feedback to cut off some numbers in order to make the guessing range smaller
    - update/change the guess based on the user's feedback
    - keep doing all the above till it guesses correctly
    
*/
   
function computerGuessing () {
    let range = (maxLimit - minLimit) + 1

    computerGuess = Math.floor(Math.random() * range) + minLimit
    alert("My guess is: " + computerGuess)
    userResponse = prompt("Is that number higher or lower than yours or is it correct?")

    if (userResponse === "h") {
     maxLimit = computerGuess
     computerGuessing()
    } else if (userResponse === "l") {
     minLimit = computerGuess
     computerGuessing()
    } else if (userResponse === "c") {
     alert("Yaay...I'm close to being human): I got it right!")
    } else if (userResponse === "") {
        alert("You didn't type in anything...")
    } else {
        alert("Invalid input! Kindly input valid text.")
    }
}
   

alert("Choose a number between 1 and 100 and store it in your mind. I want to see how close to being human I am ):")
alert("For the next questions, use h for higher, l for lower and c for correct")
computerGuessing()

let newRound = prompt("Do you want another round of the game? y for yes, n for no.")

// // while (newRound === "y") {
// //     alert("Think of another number for another round of the game")
// //     computerGuessing()
// // }


// WHEN I TRIED TO USE THE WHILE LOOP COMMENTED ABOVE, I NOTICED THE GAME NEVER ENDS UNLESS I CLOSE THE SERVER, SO OPTED FOR THE IF/ELSE. ALSO AFTER THAT SECOND ROUND, COURTESY OF THE WHILE LOOP, I NOTICED IN THE NEXT ROUND THE COMPUTER GUESSES' STOPPED CHANGING AT SOME POINT, THEY REMAINED THE SAME, SO I HAD TO KEEP CLOSING THAT SERVER AND OPENING THE PORT AGAIN

// EVEN WITH THE IF/ELSE AT SOME POINT, THE COMPUTER GUESSES THE SAME NUMBER OVER AND OVER---IS THAT OUT OF MY CONTROL OR IS IT AN ERROR FROM MY END? ALSO, HOW DO I MAKE IT KEEP STARTING THE GAME, AND NOT JUST IN THE FIRST ENCOUNTER WITH THE IF/ELSE, TILL I TELL IT NOT TO?
if (newRound === "y") {
    alert("Think of another number for another round of the game.")
    computerGuessing()
    alert("Refresh the page to start.")  //WHY DOES THIS LINE NEVER GET EXECUTED AFTER THE COMPUTER GUESSES CORRECTLY?
} else {
    alert("GAME OVER! Refresh the page in case you want to play again...")
}


// the computer picks the number
// the user tries to guess what the user's number is

let userGuess
let computerNumber
let limitMax = 100
let limitMin = 1

function userGuessing () {    
    let range = (limitMax - limitMin) + 1

    computerNumber = Math.floor(Math.random() * range) + limitMin
    
    userGuess = Number(prompt("What did you guess?"))

    if (userGuess > computerNumber) {
        alert("That's higher than my number. Try again.")
        limitMax = userGuess
        userGuessing()
    } else if (userGuess < computerNumber) {
        alert("That's lower than my number. Try again.")
        limitMin = userGuess
        userGuessing()
    } else if (userGuess === computerNumber) {
        alert("Cheers!!! You are a genius...):")
    } else if (userGuess === "") {
        alert("You didn't type in anything...(:")  // WHY IS THIS LINE NOT WORKING WHEN I TYPE NOTHING?
    } else {
        alert("ERROR!!! THAT IS NOT A NUMBER...")
    }
}

// I ALSO REALIZED AT SOME POINT WHEN I GUESS A NUMBER EG. 35 IT'LL SAY LOWER THEN WHEN I GUESS 36 IT'LL SAY HIGHER, AND THERE'S NOTHING IN BETWEEN SO I KEEP CHOOSING THE SAME NUMBERS, TILL IT RENDERS ONE CORRECT---IS THAT STILL AN ERROR ON MY END, IF YES, HOW DO I FIX THAT OR DO I ALSO HAVE NO CONTROL OVER THAT?
alert("I'll pick a number between 1 and 100, try and guess what I chose... ):")
userGuessing()

let tryAgain = prompt("Do you want to try again? y for yes, n for no")

if (tryAgain === "y") {
    alert("I'll pick another number... guess again.")
    userGuessing()
} else {
    alert("GAME OVER! Refresh the page in case you want to play again...")
}


let whichOne

function chooseGame () {
    if (whichOne === "f") {
        alert("Pick a number and I'll guess it.")
        computerGuessing()
    } else if (whichOne === "s") {
        alert("I'll pick a number, you guess it.")
        userGuessing()
    } else {
        alert("You didn't pick a game...")
    }
}

alert("I have come up with 2 games.")
alert("The first: the computer tries to guess the number you have chosen")
alert("The second: you guess the computer's number")
whichOne = prompt("Which one do you want to play? f for first, s for second")

chooseGame()

// OR

// the idea of this is to create the same function, but make it take parameters.
// choice it the param that holds what the user chooses to play

let choose

function whichGame(choice) {
    if (choice === "1") {
        alert("Pick a number and I'll guess it.")
        computerGuessing()
    } else if (choice === "2"){
        alert("I'll pick a number, you guess it.")
        userGuessing()
    } else if ((choice !== "1") && (choice !== "2")) {  // I WANT THE PLAYER TO STILL BE ABLE TO CONTINUE WITH 
        prompt("Pick 1 or 2")                           // THE GAME IN CASE THEY FILLED IN THE WRONG ENTRIES 
        whichGame()                                     // WITHOUT HAVING TO START THE GAME FROM THE TOP
    } else if (choice === "") {                         // BUT THE LAST 2 ELSE-IFS ARE GIVING ME TROUBLE
        alert("You didn't pick a game...")
    }
}

alert("I have come up with 2 games.")
alert("The first: the computer tries to guess the number you have chosen")
alert("The second: you guess the computer's number")
choose = prompt("Which one do you want to play? 1 for first, 2 for second") //this is the argument that the function will take in

whichGame(choose)

// AT SOME POINT WHEN I DON'T WANT TO PLAY THE GAME, AND I CANCEL, IT DOESN'T WORK, SO I HAVE TO CLOSE THE SERVER AND RESTART IT, HOW DO I HANDLE THAT?  








