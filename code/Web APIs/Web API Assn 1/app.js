// Select all three elements by their ids

const banner = document.getElementById("banner");
const darkButton = document.getElementById("dark-btn");
const lightButton = document.getElementById("light-btn");

// // Attach an event listener to the "dark" button

// darkButton.addEventListener('click', () => {
//   banner.textContent = "Dark Mode";
//   banner.style.color = "white";
//   document.body.style.backgroundColor = "black";
// });

// // Attach an event listener to the "light" button

// lightButton.addEventListener('click', () => {
//   banner.textContent = "Light Mode";
//   banner.style.color = "black";
//   document.body.style.backgroundColor = "white";
// });

// // Extra Challenges: Instead of black and white, change the colors
// // to dark and light gray

// darkButton.addEventListener('click', () => {
//   banner.innerText = "Dark Mode";
//   banner.style.color = "black";
//   document.body.style.backgroundColor = "darkgray";
// });

// lightButton.addEventListener('click', () => {
//   banner.textContent = "Light Mode";
//   banner.style.color = "darkgray";
//   document.body.style.backgroundColor = "lightgray";
// });

// // Add a CSS file with a class for dark mode. Instead of editing the 
// // style properties, toggle the class.

// darkButton.addEventListener('click', () => {
//   banner.textContent = 'Dark Mode';
//   banner.classList.add('dark-mode');
//   document.body.classList.add('dark-mode');
// });

// lightButton.addEventListener('click', () => {
//   banner.textContent = 'Light Mode';
//   banner.classList.remove('dark-mode');
//   document.body.classList.remove('dark-mode');
// });

// Replacing the two buttons with a single button
// and switching the button to "dark" or "light"

const controller = document.getElementById("controller")

controller.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")){
    banner.textContent = "Light Mode";
    controller.textContent = "Switch to dark mode";
    banner.classList.remove("dark-mode");
    document.body.classList.remove("dark-mode");
    controller.classList.add("controller");
    banner.style.fontSize = "3rem";
    

  } else {
    banner.textContent = "Dark Mode";
    controller.textContent = "Switch to light mode";
    banner.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    controller.classList.add("controller");
    banner.style.fontSize = "3rem";

  }
});