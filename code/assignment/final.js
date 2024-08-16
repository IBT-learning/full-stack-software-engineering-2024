const userName = prompt("Hello, Please insert your name")
alert(`Hello ${userName}, welcome to the game!`)

alert("Can you think of a number between 1 to 100?")

function guess (){
        let replay
        do{
        let guessed = Math.floor(Math.random() * 100)
        let computerGuess = prompt (`is your number lower than, higher than, or exactly 50? If higher, input "h", if lower, input "l", if correct, input "c"`)
        let attempts = 1
        if (computerGuess !== "h" && computerGuess !== "l" && computerGuess !== "c" ){
            alert ("please enter a valid input")
            computerGuess = prompt (`is your number lower than, higher than, or exactly 50? If higher, input "h",\nif lower, input "l", if correct, input "c"`)
        }

        while (true){
             if (computerGuess === "h"){
                guessed = guessed + Math.floor(Math.random() * 10)
                attempts++
                computerGuess = prompt(`is your number ${guessed}? If higher, input "h",\nif lower, input "l", if correct input "c"`)
            }
            else if (computerGuess === "l"){
                guessed = guessed - Math.abs(Math.floor(Math.random() * 20 - 10))
                attempts++
                computerGuess = prompt(`is your number ${guessed}? If higher, input "h",\nif lower, input "l", if correct input "c"`)
            }
            else if (computerGuess === "c"){
                alert (`Yay! I got it right with ${attempts} attempts`)
                break
            }
        } 
        replay = prompt("Would you like to play again? Input 'yes' or 'no'")
        }while (replay === "yes")

        alert("It was a good game!")

        }
        
        
    



guess()
