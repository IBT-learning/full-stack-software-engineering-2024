// goal: make counters increment when buttons are clicked
// select both buttons
// select both counters
// add event listeners to buttons
// in event listener, increment counter

// goal: only let people vote once
// take in the name when they vote
// store the name in a list
// when someone votes, check it against the list
// if they already voted, do nothing
// if they haven't voted, let them vote

const yesButton = document.getElementById("yes-button")
const noButton = document.getElementById("no-button")
const voterName = document.getElementById("voter-name")
const jsCounter = document.getElementById("js")
const htmlCounter = document.getElementById("html")
const warning = document.getElementById("warning")

let voters = []
yesButton.addEventListener("click", () => {voteTracker(jsCounter)})

noButton.addEventListener("click", () => {voteTracker(htmlCounter)})

const voteTracker = (countElement) => {
    if (voterName.value !== ""){
        if (!voters.includes(voterName.value)){
            voters.push(voterName.value)
            console.log(voters)
            Number(countElement.innerText++)
            warning.classList.add("hidden")
        }
        else {
            warning.classList.remove("hidden")
        }
    }
    
}