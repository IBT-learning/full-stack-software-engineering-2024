// alert("Hello");
// In the JS, select all three of these elements using their ids and save them to variables.
const bannerText = document.getElementById("banner");
// const darkModeBtn = document.getElementById("dark-btn");
// const lightModeBtn = document.getElementById("light-btn");
const toggleBtn = document.getElementById("switch-btn");
const documentBody = document.body;
// Attach an event listener to the "dark" button that does the following things:
toggleBtn.addEventListener("click", () => {
  if (bannerText.innerText === "Light Mode") {
    bannerText.innerText = "Dark Mode";
    toggleBtn.innerText = "light";
  } else {
    bannerText.innerText = "Light Mode";
    toggleBtn.innerText = "dark";
  }
  documentBody.classList.toggle("dark-bg");
  bannerText.classList.toggle("white-text");
});
