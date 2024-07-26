let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let htmlCounter = document.getElementById("html");
let jsCounter = document.getElementById("js");
let userName = document.getElementById("name");
let userAlert = document.getElementById("user-alert");

let userList = [];

yesBtn.addEventListener("click", () => {
  voteTracker(jsCounter);
});

noBtn.addEventListener("click", () => {
  voteTracker(htmlCounter);
});

const voteTracker = (userVote) => {
  if (userName.value !== "") {
    if (!userList.includes(userName.value)) {
      userList.push(userName.value);
      userVote.innerText = Number(userVote.innerText) + 1;
      userName.value = "";
      userAlert.classList.add("hide");
    } else {
      userAlert.classList.remove("hide");
    }
  }
};
