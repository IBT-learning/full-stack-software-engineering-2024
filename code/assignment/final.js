const userName = prompt("Hello, Please insert your name")
alert(`Hello ${userName}, welcome to the game!`)

alert("Can you think of a number between 1 to 100?")

function guess (){
        for (i = 0; i <= 100; i ++){       
            let guessed = Math.floor(Math.random() * 100)
            let computerGuess = prompt (`is your number ${guessed}? If higher, input "higher", if lower, input "lower", if correct, input "correct"`)
            if (computerGuess === "higher"){
                let min = guessed * 2
                prompt (`is your number ${min}?`)
            }else if (computerGuess === "lower"){
                let max = guessed / 2
                prompt (`is your number ${max}?`)
            }else if (computerGuess === "correct"){
                alert ("Yay! I got it right!")
                break
        }
        }
        }
        


guess()
