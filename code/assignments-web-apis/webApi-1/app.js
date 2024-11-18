const banner = document.getElementById("banner");
const darkButton = document.getElementById("dark-btn");
const lightButton = document.getElementById("light-btn");
const darkLight = document.getElementById("toggle");

// darkButton.addEventListener("click", () => {
//   banner.textContent = "Dark Mode";
//     banner.classList.add("dark-mode");
//     banner.style.color = "white";
//     document.body.style.backgroundColor = "#a9a9a9";
// });

// lightButton.addEventListener("click", () => {
//   banner.textContent = "White Mode";
//   banner.style.color = "black";
//   document.body.style.backgroundColor = "#d3d3d3";
// });

//Extra Challenge
darkLight.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    banner.textContent = "Dark Mode";
    darkLight.textContent = "dark";
  } else {
    banner.textContent = "Light Mode";
    darkLight.textContent = "light";
  }
});
