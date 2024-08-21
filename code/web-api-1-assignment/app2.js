// PART B - Extra Challenge
// 1.

const banner = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const body = document.getElementById("body")


darkButton.addEventListener("click", () => {
    banner.textContent = "Dark Mode"
    banner.style.color = "white"
    body.style.backgroundColor = "black"
})

darkButton.addEventListener("click", () => {
    banner.textContent = "Dark Mode"
    banner.style.color = "lightgray"
    body.style.backgroundColor = "black"
})

lightButton.addEventListener("click", () => {
    banner.textContent = "Light Mode"
    banner.style.color = "darkgray"
    body.style.backgroundColor = "white"
})

// TODO:how to put this in a function
