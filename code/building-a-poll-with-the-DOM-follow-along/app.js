/* 
1. goal: make counters incrememnt when buttons are clicked:
    -select both buttons
    -select both counters
    -add event listeners to buttons
    -in event listener, increment count number
*/

/* 
2. goal: only let people vote one time:
    -take in their name when they vote
    -store the name in a list
    -when someone votes, check it against the list
    -if they already voted, do nothing
    -if they haven't voted, let them vote
*/

// select both buttons
const yesButton = document.getElementById("yes-button")
const noButton = document.getElementById("no-button")

// select both counters
const htmlCounter = document.getElementById("html")
const jsCounter = document.getElementById("js")

// select voter names
const voterName = document.getElementById("voter-name")

// select the warning
const warning = document.getElementById("warning")

// store the voter names in a list
let voters = []

// add event listeners to buttons
yesButton.addEventListener("click", () => {
    voterTracker(jsCounter)
})
noButton.addEventListener("click", () => {
    voterTracker(htmlCounter)
})

// because it's not good practice to repeat code, we'll create a function that does the same thing when the yes/ no button is clicked
const voterTracker = (countElement) => {
    if (voterName.value !== "") {
        if (!voters.includes(voterName.value)) {
            (voters.push(voterName.value));
            countElement.innerText = Number(countElement.innerText) + 1
            voterName.value = ""  //clears the text/voter name in the input after they have voted ie. clicked either the yes/ no button
            warning.classList.add("hidden")  //if they have not voted the hidden span will be added meaning it will not show as it's been 'added to continue hiding'
        } else {
            warning.classList.remove("hidden") //if they have voted the hidden span will be removed meaning it will show as it's been removed from hiding
        }
    }
    
}












