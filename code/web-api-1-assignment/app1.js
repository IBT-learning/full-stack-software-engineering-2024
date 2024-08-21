
// CHALLENGE 1
/* 
goal: toggle between dark/ light mode
    -select all the elements; the header and buttons
    -attach event listeners to the buttons that:
      *changes the header content to either dark mode/ light mode
      *changes the header color to either white/ dark
      *changes the background color to either dark/ white
*/

const banner = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const body = document.getElementById("body")


darkButton.addEventListener("click", () => {
    banner.textContent = "Dark Mode"
    banner.style.color = "white"
    body.style.backgroundColor = "black"
})

lightButton.addEventListener("click", () => {
    banner.textContent = "Light Mode"
    banner.style.color = "black"
    body.style.backgroundColor = "white"
})

// TODO:how to add the above to a function













