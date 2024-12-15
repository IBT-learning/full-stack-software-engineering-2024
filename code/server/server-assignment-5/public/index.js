const banner = document.getElementById("banner");
const switchBtn = document.getElementById("switch-btn");


switchBtn.addEventListener("click", () => {
    let mode
  if (banner.textContent == "Light Mode") {
    banner.textContent = "Dark Mode";
    switchBtn.textContent = "Switch to Light Mode";
    mode = "dark"
  } else if (banner.textContent == "Dark Mode") {
    banner.textContent = "Light Mode";
    switchBtn.textContent = "Switch to Dark Mode";
    mode = "light"
  }
  document.body.classList.toggle("dark-mode")
  fetch(`/cookie?mode=${encodeURIComponent(mode)}`)
});

window.addEventListener("load", () => {
    const cookies = document.cookie.split("; ")
    const modeCookie = cookies.find((row) => row.startsWith("mode="))
    if (modeCookie){
        const mode = modeCookie.split("=")[1]
        if (mode === "dark"){
            document.body.classList.add("dark-mode")
            banner.textContent = "Dark Mode"
            switchBtn.textContent = "Switch to Light Mode"
        } else {
            banner.textContent = "Light Mode"
            switchBtn.textContent = "Switch to Dark Mode"

        }
    }
})