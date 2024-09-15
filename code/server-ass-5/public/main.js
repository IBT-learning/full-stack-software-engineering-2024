// get elements from ./index.html to the dom
const container = document.querySelector(".container");
const darkBtn = document.querySelector(".dark_button");
const lightBtn = document.querySelector(".light_button");
const banner = document.querySelector("banner_switch");
const theme = document.getElementById("theme");

console.log(document.cookie);

// get the value of cookie out from the backend server
const getCookieValue = (keyName) => {
  if (document.cookie.includes(keyName)) {
    const cookieValue = document.cookie
      .split(";")
      .find((s) => s.includes(keyName))
      .split("=")
      .at(1);
    return cookieValue;
  } else {
    return null;
  }
};

// set the value of cookie on the request body to the const darkMode
const darkMode = decodeURIComponent(getCookieValue("darkTheme"));
if (darkMode) addDarkTheme();

// set the value of cookie on the request body to const lightMode
const lightMode = decodeURIComponent(getCookieValue("lightTheme"));
if (lightMode) addLightTheme();

// event handler for the dark button
// background color changes to dark after clicking event
// save the cookie value to the browser
darkBtn.addEventListener("click", () => {
  console.log("clicked");
  addDarkTheme();
  fetch(`/dark?mode=${encodeURIComponent("#22223b")}`);
});

// event handler for the light button
// background color changes to light after clicking event
// save the cookie value to the browser
lightBtn.addEventListener("click", () => {
  console.log("clicked");
  addLightTheme();
  fetch(`/light?mode=${encodeURIComponent("#f8f9fa")}`);
});

// add dark theme styles to the selected element
function addDarkTheme() {
  theme.style.background = darkMode;
  container.style.color = "#f8f9fa";
  container.style.border = "2px solid #f8f9fa";
  addModeColorToBtn("#f8f9fa", darkMode);
}

// add light theme styles to the selected element
function addLightTheme() {
  theme.style.background = lightMode;
  container.style.color = "#22223b";
  container.style.border = "2px solid #22223b";
  addModeColorToBtn("#22223b", lightMode);
}

// add light and dark color to the button elements
function addModeColorToBtn(dark, light) {
  lightBtn.style.background = dark;
  darkBtn.style.background = dark;
  lightBtn.style.color = light;
  darkBtn.style.color = light;
}
