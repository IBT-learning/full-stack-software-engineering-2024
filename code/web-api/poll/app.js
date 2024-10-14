// alert("Hello");
// Goal: <1> Increase counter each time button is clicked
// Solution: Select button, select counter, add event listener to counter
const yesButton = document.querySelector(".yes-btn");
const jsCounter = document.getElementById("js");
const noButton = document.querySelector(".no-btn");
const htmlCounter = document.getElementById("html");

// Goal: <2> Allow one vote per person
// Solution: Request for voter name, store name in list, check name against list before voting is allowed
const voterName = document.querySelector("#voter-name");
let voters = [];
let warning = document.querySelector(".hidden");

// let jsLikeValue = 0;
// yesButton.addEventListener("click", function () {
//   jsLikeValue++;
//   jsCounter.textContent = jsLikeValue;
// });

// best to use second solution because having a global variable isn't best practice
// this will work if start value > 0
yesButton.addEventListener("click", function () {
  voteTracker(jsCounter);
});
noButton.addEventListener("click", function () {
  voteTracker(htmlCounter);
});
const voteTracker = function (countElement) {
  if (voterName.value !== "") {
    if (!voters.includes(voterName.value)) {
      //the exclamation mark means if the person's name is not on our list
      voters.push(voterName.value);
      countElement.innerText = Number(countElement.innerText) + 1;
      warning.classList.add("hidden");
    } else {
      warning.classList.remove("hidden");
    }
  }
  voterName.value = "";
};
