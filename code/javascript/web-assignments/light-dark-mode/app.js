// 1. In the JS, select all three of these elements using their ids and save them to variables.

let banner = document.getElementById("banner");
let darkBtn = document.getElementById("dark-btn");
let lightBtn = document.getElementById("light-btn");
let darkGrey = document.getElementById("dark-grey-btn");
let lightGrey = document.getElementById("light-grey-btn");
let toggleBtn = document.getElementById("toggle");

// 2. Attach an event listener to the "dark" button that does the following things:
// change the textContent property of the banner to say "Dark Mode"
// change the .style.color property of the banner to be white
// change the .style.backgroundColor property of the document.body to be black

darkBtn.addEventListener("click", () => {
  banner.textContent = "Dark Mode";
  banner.style.color = "#fff";
  document.body.style.backgroundColor = "#000";
});

// 3. Repeat (but inverse) for the "light" button

lightBtn.addEventListener("click", () => {
  banner.textContent = "Light Mode";
  banner.style.color = "#000";
  document.body.style.backgroundColor = "#fff";
});

// Extra challenges

// Instead of black and white, change the colors to dark and light gray. (Easier on the eyes!)

darkGrey.addEventListener("click", () => {
  banner.textContent = "Dark Grey Mode";
  banner.style.color = "rgb(208, 203, 203)";
  document.body.style.backgroundColor = "rgb(133, 131, 131)";
});

lightGrey.addEventListener("click", () => {
  banner.textContent = "Light Grey Mode";
  banner.style.color = "rgb(133, 131, 131)";
  document.body.style.backgroundColor = "rgb(208, 203, 203)";
});

// Add a CSS file with a class for dark mode. Instead of editing the style properties, toggle the class.
// Can you replace the two buttons with a single button?
// Start with the button saying "switch"
// Once that works, try changing the button to say "dark" or "light" depending on the mode
// Refreshers
// Center the header and button on the page, both vertically and horizontally
// Change the font of the banner
// Give the buttons a font size of 1.5rem and a padding of 0.5rem

const toggleBtnMode = () => {
  banner.style.color = "";
  document.body.style.backgroundColor = "";

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "Switch to Light";
    banner.innerText = "Dark Mode";
  } else {
    toggleBtn.innerText = "Switch to Dark";
    banner.innerText = "Light Mode";
  }
};

toggleBtn.addEventListener("click", toggleBtnMode);

toggleBtnMode();
