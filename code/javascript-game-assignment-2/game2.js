let high = 100;
let low = 1
guessValue = 50;

function guessGame() {
      
     while (true) {
        response = prompt("Is the guessValue high, low or exact?!")

           if (response == high) {
              low = guessValue + 1
           } else {if (response == low) {
                           high = guess -1
                          } else {
                             alert("Congratulations .You got it right!!")
                                  }
            
           }
     }

}
guessGame()