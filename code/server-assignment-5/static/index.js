// 1. In the JS, select all three of these elements using their ids and save them to variables.

let banner = document.getElementById("banner");
let darkBtn = document.getElementById("dark-btn");
let lightBtn = document.getElementById("light-btn");
let darkGrey = document.getElementById("dark-grey-btn");
let lightGrey = document.getElementById("light-grey-btn");
let toggleBtn = document.getElementById("toggle");

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const applyThemeFromCookie = () => {
  const theme = getCookie("theme");

  if (theme) {
    switch (theme) {
      case "dark":
        banner.textContent = "Dark Mode";
        banner.style.color = "#fff";
        document.body.style.backgroundColor = "#000";
        toggleBtn.innerText = "Switch to Light";
        document.body.classList.add("dark-mode");
        break;
      case "light":
        banner.textContent = "Light Mode";
        banner.style.color = "#000";
        document.body.style.backgroundColor = "#fff";
        toggleBtn.innerText = "Switch to Dark";
        document.body.classList.remove("dark-mode");
        break;
      case "dark-grey":
        banner.textContent = "Dark Grey Mode";
        banner.style.color = "rgb(208, 203, 203)";
        document.body.style.backgroundColor = "rgb(133, 131, 131)";
        toggleBtn.innerText = "Switch to Light Grey";
        break;
      case "light-grey":
        banner.textContent = "Light Grey Mode";
        banner.style.color = "rgb(133, 131, 131)";
        document.body.style.backgroundColor = "rgb(208, 203, 203)";
        toggleBtn.innerText = "Switch to Dark Grey";
        break;
      default:
        break;
    }
  }
};

// Apply theme on page load
document.addEventListener("DOMContentLoaded", applyThemeFromCookie);

const setThemeOnServer = (theme) => {
  fetch(`/set-theme?theme=${theme}`).then((response) =>
    response
      .text()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      })
  );
};

// 2. Attach an event listener to the "dark" button that does the following things:
// change the textContent property of the banner to say "Dark Mode"
// change the .style.color property of the banner to be white
// change the .style.backgroundColor property of the document.body to be black

darkBtn.addEventListener("click", () => {
  banner.textContent = "Dark Mode";
  banner.style.color = "#fff";
  document.body.style.backgroundColor = "#000";
  setThemeOnServer("dark");
});

// 3. Repeat (but inverse) for the "light" button

lightBtn.addEventListener("click", () => {
  banner.textContent = "Light Mode";
  banner.style.color = "#000";
  document.body.style.backgroundColor = "#fff";
  setThemeOnServer("light");
});

// Extra challenges

// Instead of black and white, change the colors to dark and light gray. (Easier on the eyes!)

darkGrey.addEventListener("click", () => {
  banner.textContent = "Dark Grey Mode";
  banner.style.color = "rgb(208, 203, 203)";
  document.body.style.backgroundColor = "rgb(133, 131, 131)";
  setThemeOnServer("dark-grey");
});

lightGrey.addEventListener("click", () => {
  banner.textContent = "Light Grey Mode";
  banner.style.color = "rgb(133, 131, 131)";
  document.body.style.backgroundColor = "rgb(208, 203, 203)";
  setThemeOnServer("light-grey");
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
    setThemeOnServer("dark");
  } else {
    toggleBtn.innerText = "Switch to Dark";
    banner.innerText = "Light Mode";
    setThemeOnServer("light");
  }
};

toggleBtn.addEventListener("click", toggleBtnMode);

toggleBtnMode();
