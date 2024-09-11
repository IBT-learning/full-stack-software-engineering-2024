const banner = document.getElementById("banner");
const dark = document.getElementById("dark-btn");
const light = document.getElementById("light-btn");

dark.addEventListener("click", () => {
    banner.textContent = "Dark Mode";
    banner.style.color = "white";
    document.body.style.backgroundColor = "black";
})

light.addEventListener("click", () => {
    banner.textContent = "Light Mode";
    banner.style.color = "black";
    document.body.style.backgroundColor = "white";
})