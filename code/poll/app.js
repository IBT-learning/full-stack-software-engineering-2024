const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const htmlCounter = document.getElementById("html");
const jsCounter = document.getElementById("js");
const voterName = document.getElementById("voter-name");
const warningMsg = document.getElementById("warning");

let voterList = [];

yesButton.addEventListener("click", () => voteTracker(jsCounter));

noButton.addEventListener("click", () => voteTracker(htmlCounter));

const voteTracker = (countElememt) => {
  if (voterName.value !== " ") {
    if (!voterList.includes(voterName.value)) {
      voterList.push(voterName.value);
      countElememt.innerText = Number(countElememt.innerText) + 1;
      voterName.value = "";
      warningMsg.classList.add("hidden");
    } else {
      warningMsg.classList.remove("hidden");
    }
  }
};
