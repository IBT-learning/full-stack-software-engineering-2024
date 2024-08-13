// Goal: make counters increment when buttons are clicked
// Goal: let people to vote once
// Take in their name when they vote
// Store the name in a list
// When someone votes check it against the list

const yesButton = document.getElementById("yes-button")
const noButton = document.getElementById("no-button")
const htmlCounter = document.getElementById("html")
const jsCounter = document.getElementById("js") 
const voterName = document.getElementById("voter-name")
const warning = document.getElementById("warning")

let voters = []

yesButton.addEventListener("click", () => voteTracker(jsCounter));

noButton.addEventListener("click", () => voteTracker(htmlCounter));

const voteTracker = (countElement) => {
    if (voterName.value !== "") {
      if (!voters.includes(voterName.value)) {
        voters.push(voterName.value)
        countElement.innerText = Number(countElement.innerText)  +1; 
        voterName.value = ""
        warning.classList.add("hidden")
      } else {
        warning.classList.remove("hidden")
     } 
    }
}
                                                                                                                                                                                                                                                                                                                                                   