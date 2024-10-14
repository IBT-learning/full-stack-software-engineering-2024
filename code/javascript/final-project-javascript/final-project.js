// const add = (x, y) => x + y;
// console.log(add(1, 2));
function guessTheNumber() {
    // Inform the user to think of a number between 1 and 100
    alert("Think of a number between 1 and 100, and I will try to guess it!");

    let lowerBound = 1; // The lower bound of the guessing range
    let upperBound = 100; // The upper bound of the guessing range
    let guess; // The computer's current guess
    let feedback; // User's feedback on the guess

    do {
        // Calculate the guess as the midpoint of the current range
        guess = Math.floor((lowerBound + upperBound) / 2);
        
        // Prompt the user for feedback on the guess
        feedback = prompt(`Is your number higher than, lower than, or exactly ${guess}? (h/l/c)`).toLowerCase();

        // Adjust the bounds based on the user's feedback
        if (feedback === 'h') {
            lowerBound = guess + 1; // Adjust lower bound if the guess was too low
        } else if (feedback === 'l') {
            upperBound = guess - 1; // Adjust upper bound if the guess was too high
        } else if (feedback === 'c') {
            alert(`Yay! I guessed your number, which is ${guess}!`); // Correct guess
            break; // End the game
        } else {
            alert("Please enter 'h' for higher, 'l' for lower, or 'c' for correct."); // Invalid input
        }

    } while (lowerBound <= upperBound); // Continue until the bounds converge

    if (lowerBound > upperBound) {
        alert("Hmm, it seems there was a mistake! Please make sure you are honest with your answers.");
    }
}

// Start the game
guessTheNumber();
