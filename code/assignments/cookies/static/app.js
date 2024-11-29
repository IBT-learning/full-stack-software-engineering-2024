const body = document.querySelector("body");
const banner = document.getElementById("banner");
const switchButton = document.getElementById("switch-button");

switchButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");

  if (isDarkMode) {
    banner.innerText = "Dark Mode";
    switchButton.innerText = "Light";
  } else {
    banner.innerText = "Light Mode";
    switchButton.innerText = "Dark";
  }

  const theme = isDarkMode ? "dark" : "light";
  fetch(`/cookie?theme=${theme}`);
});

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

document.addEventListener("DOMContentLoaded", () => {
  const mode = getCookie("newMode");
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    banner.innerText = "Dark Mode";
    switchButton.innerText = "Light";
  } else {
    banner.innerText = "Light Mode";
    switchButton.innerText = "Dark";
  }
});
