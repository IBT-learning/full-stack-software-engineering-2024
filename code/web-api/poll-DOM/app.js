//goal: make counters increment when bottons are clicked
//select both buttons
//select both counters
//add eventlisteners to buttons
//in event listeners, increment count number

//goal: only let people vote once
//take in name of the voter
//store the name
//when someone votes, check it against the list
//if they already voted, do nothing
//if they havent voted, let them vote

//goal: voter's name should clear after voting

const yesButton = document.getElementById("yes-button")
const noButton = document.getElementById("no-button")
const htmlCounters = document.getElementById("html")
const jsCounters = document.getElementById("js")
const voterName = document.getElementById("voter-name")
const warning = document.getElementById("warning")

let voters = []
yesButton.addEventListener("click", () => voteTracker(jsCounters));

noButton.addEventListener("click", () => voteTracker(htmlCounters));

    const voteTracker = (countElement) =>{
        if(voterName.value !== ""){
            if(!voters.includes(voterName.value)){
                voters.push(voterName.value)
                countElement.innerText = Number(countElement.innerText )+1;
                voterName.value = "";
                warning.classList.add("hidden")
                console.log(voters);
        }

        else{
            warning.classList.remove("hidden")
        }
        }
    }

