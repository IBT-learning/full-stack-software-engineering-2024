function playGame() {
    alert("Think of a number between 1 and 100, and I will try to guess it.")
  
    let lowerBound = 1
    let upperBound = 100
    let guess
    let attempts = 0
    let correct = false
  
    while (!correct) {
      guess = Math.floor((lowerBound + upperBound) / 2)
      attempts++
  
      let userResponse = prompt(`Is the number higher, lower, or exactly ${guess}? (h/l/c)`).toLowerCase()
  
      if (userResponse === 'h') {
        lowerBound = guess + 1
      } else if (userResponse === 'l') {
        upperBound = guess - 1
      } else if (userResponse === 'c') {
        correct = true
        alert(`I guessed it! The number was ${guess}. It took me ${attempts} attempts.`)
      } else {
        alert("Please enter 'h' for higher, 'l' for lower, or 'c' for correct.")
      }
    }
  
    let playAgain = prompt("Do you want to play again? (y/n)").toLowerCase()
    if (playAgain === 'y') {
      playGame()
    } else {
      alert("Thanks for playing!")
    }
  }
  
  playGame()

  // Extra Challenge
  function userGuessGame() {
    let computerNumber = Math.floor(Math.random() * 100) + 1
    let userGuess = null
    let attempts = 0
  
    while (userGuess !== computerNumber) {
      userGuess = parseInt(prompt("Guess a number between 1 and 100:"))
      attempts++
  
      if (userGuess < computerNumber) {
        alert("Higher!")
      } else if (userGuess > computerNumber) {
        alert("Lower!")
      } else if (userGuess === computerNumber) {
        alert(`Correct! The number was ${computerNumber}. It took you ${attempts} attempts.`)
      } else {
        alert("Please enter a valid number.")
      }
    }
  
    let playAgain = prompt("Do you want to play again? (y/n)").toLowerCase()
    if (playAgain === 'y') {
      chooseGame()
    } else {
      alert("Thanks for playing!")
    }
  }
  
  function chooseGame() {
    let gameChoice = prompt("Which game do you want to play? (1: Computer guesses, 2: You guess)").toLowerCase()
    if (gameChoice === '1') {
      guessNumberGame()
    } else if (gameChoice === '2') {
      userGuessGame()
    } else {
      alert("Please choose a valid game option.")
      chooseGame()
    }
  }
  
  chooseGame()
  
  
  