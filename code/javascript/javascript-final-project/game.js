function guessTheNumber() {
    let low = 1;
    let high = 100;
    let guess;
    let attempts = 0;

    alert("Think of a number between 1 and 100 and I'll try to guess it.");

    while (low <= high) {
        guess = Math.floor((low + high) / 2);
        const response = prompt(`Is your number ${guess}? (h for higher, l for lower, c for correct)`);

        attempts++;

        if (response === 'c') {
            alert(`I guessed your number ${guess} in ${attempts} attempts!`);
            if (confirm('Do you want to play again?')) {
                guessTheNumber(); // Restart the game
            } else {
                alert('Thanks for playing!');
                break;
            }
        } else if (response === 'h') {
            low = guess + 1;
        } else if (response === 'l') {
            high = guess - 1;
        } else {
            alert('Please enter "h" for higher, "l" for lower, or "c" for correct.');
        }
    }
}


guessTheNumber();
