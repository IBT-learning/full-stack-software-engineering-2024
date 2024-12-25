// let answer = true
// do {
//     compPlay()

//     while (true) {
//         let playMore = prompt("Do you want to play again? (type 'y' for yes or 'n' for no)")
//         if (playMore === 'y') {
//             break
//         } else if (playMore === 'n') {
//             alert("Thank you for playing!")
//             answer = false
//             break
//         } else {
//             alert("Invalid input. Please enter 'y' for yes or 'n' for no.")
//         }
//     }
// } while (answer)

let answer = true
do {
    welcome()
    while(true) {
        let game = prompt('Choose your game! (type "u" for UserPlay or type "c" for ComputerPlay) or type "q" to QUIT').toLowerCase()
        if (game === 'u') {
            playLoop(userPlay)
            break
        } else if (game === 'c') {
            playLoop(compPlay)
            break
        } else if (game === 'q') {
            answer = false
            break
        } else {
            alert('Please give a valid input')
        }
    }
} while (answer)


function welcome() {
    alert('WELCOME TO GUESS GAME')
    alert(`We have two categories\n
        - The Userplay : Where the Player Guess the Number Chosen By Computer\n
        - The ComputerPlay : Where The Computer Guess The Number Chosen By The Player`)
}


function compPlay() {
    alert('WELCOME TO GUESS THE NUMBER! \n THE COMPUTER WILL GUESS THE NUMBER CHOSEN BY THE PLAYER')
    let high = 100
    let low = 1
    alert("Choose a Number between 1 and 100")
    let compGuess = Math.floor((high + low) / 2)
    let timeGuessed = 1
    
    while (true) {

    let numAsk = prompt(`If ${compGuess} is higher than your number (type 'h') or if  ${compGuess} lower than your number (type 'l') or if ${compGuess} is correct (type 'c') ?`).toLowerCase()
    
    if (numAsk === 'l') {
        low = compGuess + 1
        compGuess = Math.floor(Math.random() * (high - low + 1)) + low
        timeGuessed++
     } else if (numAsk === 'h') {
        high = compGuess - 1
        compGuess = Math.floor(Math.random() * (high - low + 1)) + low
        timeGuessed++
     } else if (numAsk === 'c') {
        alert("Computer is correct!")
        alert(`You guessed ${timeGuessed} times before getting it correctly!`)
        break
     } else {
        alert("Please enter a valid response")
     }
    }
}


function playLoop(callback) {
    let playMore = true
    while (playMore) {
        callback()
        
        do{
            let play = prompt("Do you want to play again? (type 'y' for yes or 'n' for no)")
            if (play === 'y') {
                break
            } else if (play === 'n') {
                alert("Thank you for playing!")
                playMore = false
                break
            } else {
                alert("Please enter a valid response")
            }
        } while (play !== 'y' || play !== 'n')
    }
}


function userPlay() {
    alert('WELCOME TO GUESS THE NUMBER! \n THE USER WILL GUESS THE NUMBER CHOSEN BY THE COMPUTER')
    let high = 100
    let low = 1
    let compGuess = Math.floor(Math.random() * (high - low + 1)) + low
    let userGuess = prompt('guess the number choosen by the computer between 1 to 100')
    userGuess = Number(userGuess)
    let timeGuessed = 0

    while(true) {
        if (!(isNaN(userGuess) || !isFinite(userGuess) || userGuess < low || userGuess > high)) {
            timeGuessed++
           if (compGuess === userGuess) {
            alert("You are correct!")
            alert(`You guessed ${timeGuessed} times before getting it correctly!`)
            break
           } else if (compGuess < userGuess) {
            alert("Your guess is too high")
            userGuess = prompt('guess the number choosen by the computer between 1 to 100')
            userGuess = Number(userGuess)
           } else {
            alert("Your guess is too low")
            userGuess = prompt('guess the number choosen by the computer between 1 to 100')
            userGuess = Number(userGuess)
           }
        } else {
            alert("Please enter a valid response, choose a number between 1 and 100")
            userGuess = prompt('guess the number choosen by the computer between 1 to 100')
            userGuess = Number(userGuess)
        }
    }
}