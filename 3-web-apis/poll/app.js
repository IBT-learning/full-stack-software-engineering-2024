// goal: make counters incrememnt when buttons are clicked
// select both buttons
// select both counters
// add event listeners to buttons
// in event listener, increment count number

// goal: only let people vote one time
// take in their name when they vote
// store the name in a list
// when someone votes, check it against the list
// if they already voted, do nothing
// if they haven't voted, let them vote

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const htmlCounter = document.getElementById("html");
const jsCounter = document.getElementById("js");
const voterName = document.getElementById("voter-name");
const warning = document.getElementById("warning");

let voters = [];

yesButton.addEventListener("click", () => voteTracker(jsCounter));
noButton.addEventListener("click", () => voteTracker(htmlCounter));

const voteTracker = (countElement) => {
  if (voterName.value !== "") {
    if (!voters.includes(voterName.value)) {
      voters.push(voterName.value);
      countElement.innerText = Number(countElement.innerText) + 1;
      voterName.value = "";
      warning.classList.add("hidden");
      console.log(voters);
    } else {
      warning.classList.remove("hidden");
    }
  }
};
