const yesButton = document.getElementById("yes-button")
const noButton = document.getElementById("no-button")
const htmlCounter = document.getElementById("html")
const jsCounter = document.getElementById("js")
const voter = document.getElementById("voter")
let votersList = []
let warning = document.querySelector("#warning")

yesButton.addEventListener("click", () => voterTracker(jsCounter))
noButton.addEventListener("click", () => voterTracker(htmlCounter))

const voterTracker = (counter) => {
    if(voter.value !== ""){
        if(!votersList.includes(voter.value)){
            votersList.push(voter.value)
            counter.textContent = Number(counter.textContent) + 1
            voter.value = ""
            warning.classList.add("hidden")
            console.log(votersList);
        } else{
            warning.classList.remove("hidden")
        }
    
    }
    
}