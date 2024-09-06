let banner = document.getElementById("banner");
let modeButton = document.getElementById("mode-btn");

function mode() {
  if (banner.textContent === "Light Mode") {
    banner.textContent = "Dark Mode";
    document.body.classList.add("dark-mode");
    modeButton.textContent = "Light";
  } else {
    banner.textContent = "Light Mode";
    document.body.classList.remove("dark-mode");
    modeButton.textContent = "Dark";
  }
}

modeButton.addEventListener("click", mode);
