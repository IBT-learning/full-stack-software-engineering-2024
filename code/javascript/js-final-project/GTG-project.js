const input = document.getElementById("guess-button");
const result = document.getElementById("result");

let lower = 1;
let higher = 100;
let GuessNum;

function generateNum() {
  GuessNum = Math.floor((lower + higher) / 2);
}

input.addEventListener("click", () => {
  while (true) {
    generateNum();
    const guessPropmt = prompt(
      `Is the number higher than, lower than, or exactly ${GuessNum}?. Enter 'h', 'l' or 'c'`
    );
    if (guessPropmt) {
      if (guessPropmt === "c") {
        alert("You're correct");
        break;
      } else if (guessPropmt === "l") {
        higher = Number(GuessNum) - 1;
        alert("Number is lower");
      } else if (guessPropmt === "h") {
        lower = Number(GuessNum) + 1;
        alert("Number is higher");
      } else {
        alert("Wrong answer. Try again!");
      }
    }
  }
  result.textContent = `Number is ${midNum}`;
});
