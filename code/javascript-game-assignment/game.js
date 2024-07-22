let refNum = 65;
let guess;
function guessNum() {
    
    while (guess !== refNum) {

        const guess = prompt("Guess a number between 1 and 100");
        if (guess > refNum) {
            alert("Higher");
            
        } else {if (guess < refNum) {
                alert("Lower");

                } else {
                        alert("Congratulations. Game over!");
                              }
               };
               
        
    }
}
guessNum();