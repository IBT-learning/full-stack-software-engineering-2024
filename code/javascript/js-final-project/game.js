function chooseGame() {
    const gameChoice = prompt("Choose a game: (1) Computer guesses your number (2) You guess the computer's number");

    if (gameChoice === '1') {
        computerGuessTheNumber();
    } else if (gameChoice === '2') {
        UserGuessTheNumber();
    } else {
        alert("Invalid choice. Please enter 1 or 2.");
        chooseGame();
    }
}

chooseGame();




function computerGuessTheNumber () {
    alert("Pick a number and I will guess it. Let's go!")
    let min = 1
    let max = 100
    let status = false
    let guess;
    let attempt = 0
    

    while(!status){
        let guess =Math.floor((min + max)/2)
        attempt++;
        let userResponse= prompt(`Is the number higher than, lower than, or exactly ${guess} \n Enter h for higher than, l for lower than and c for correct`)


    if(userResponse === "l"){
        max = guess - 1
    }else if(userResponse === "h"){
        min = guess + 1
    }else if(userResponse === "c"){
        status = true
        alert(`Woooooh! I guessed the number in ${attempt} attempts and your nunber is ${guess}`)
    }else
        alert("Please enter h for higher, l for lower, or c for correct")
    }
    
    if(confirm("Would you love to paly again?")){
        computerGuessTheNumber()
    }else{
        chooseGame()
    }
}

computerGuessTheNumber()


//User guesses the number

function UserGuessTheNumber(){
    alert("I will pick a number and you will guess it. Let's go!")
    const num = Math.floor(Math.random() * 101)
    let guess;
    let attempt = 0


    while(guess  !==num){
        guess = Number(prompt("Guess a number between 1 and 100"))
        attempt++;

        if(guess < num){
            alert(`${guess} is too low`)
        }else if(guess > num){
            alert(`${guess} is too high`)
        }else if (guess === num){
            alert(`Whoooo! You guessed me right! You guessed in ${attempt} attempts.`)
        } else if (guess > 100 || guess < 0 || guess !=number){
            alert(`Invalid input.${guess} `)
        }
    };
    if(confirm(" Please Click OK if you would you love to play again")){
        UserGuessTheNumber();
    }else{
        chooseGame();
    }
    
}
UserGuessTheNumber();