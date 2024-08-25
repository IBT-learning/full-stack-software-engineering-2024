const body = document.querySelector("body");
const darkButton = document.getElementById("dark-btn");
const lightButton = document.getElementById("light-btn");
const banner = document.getElementById("banner");
const switchButton = document.getElementById("switch-button");


switchButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    banner.innerText = "Dark Mode";
    switchButton.innerText = "Light"
  } else {
    banner.innerText = "Light Mode";
    switchButton.innerText = "Dark";
  }
});

// darkButton.addEventListener("click", () => {
//   banner.innerText = "Dark Mode";
//   body.classList.add("dark-mode");
// });

// lightButton.addEventListener("click", () => {
//   banner.innerText = "Light Mode";
//   body.classList.remove("dark-mode");
// });
