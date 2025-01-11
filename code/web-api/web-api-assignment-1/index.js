const banner = document.getElementById("banner");
const switchBtn = document.getElementById("switch-btn");
// const lightBtn = document.getElementById("light-btn")
// const darkBtn = document.getElementById("dark-btn")

switchBtn.addEventListener("click", () => {
  if (banner.textContent == "Light Mode") {
    banner.textContent = "Dark Mode";
    switchBtn.textContent = "Switch to Light Mode";
  } else if (banner.textContent == "Dark Mode") {
    banner.textContent = "Light Mode";
    switchBtn.textContent = "Switch to Dark Mode";
  }
  document.body.classList.toggle("dark-mode");
});
// lightBtn.addEventListener("click", () =>{
//     banner.textContent = "Light Mode"
//     // banner.style.color = "gray"
//     document.body.classList.toggle("light-mode")
// })
