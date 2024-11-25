let minNumber = 1
let maxNumber = 100 
let guess
let response

prompt("Think of a number between 1-100, I will try guess it");

function guessNumber() {
    while (minNumber <= maxNumber) {
        guess = Math.floor((minNumber + maxNumber) / 2);
        response = prompt(`Is the number higher than, lower than, or exactly ${guess}? (Respond with 'h=higher', 'l=lower', or 'c=correct')`).toLowerCase();

        if (response === "h") {
            minNumber = guess + 1;
        } else if (response === "l") {
            maxNumber = guess - 1;
        } else if (response === "c") {
            alert(`I guessed it! The number is ${guess}.`);
            break;
        } else {
            alert("Please respond with 'h=higher', 'l=lower', or 'c=scorrect'.");
        }
    }
}


guessNumber()