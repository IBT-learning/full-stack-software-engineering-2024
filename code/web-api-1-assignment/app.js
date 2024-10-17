// CHALLENGE 1
/* 
goal: toggle between dark/ light mode
    -select all the elements; the header and buttons
    -attach event listeners to the buttons that:
      *changes the header content to either dark mode/ light mode
      *changes the header color to either white/ black
      *changes the background color to either black/ white

      *change the colors to dark gray and light gray. (Easier on the eyes!)
*/

const banner = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const body = document.querySelector("body")
const switchButton = document.getElementById("toggle")


function toggleMode () {

    body.classList.toggle("darkmode")

    if (body.classList.contains("darkmode")) {
        banner.textContent = "Dark Mode"
        banner.style.color = "lightgray"
        body.style.backgroundColor = "black"
        switchButton.textContent = "Dark"
    } else {
        banner.textContent = "Light Mode"
        banner.style.color = "darkgray"
        body.style.backgroundColor = "white"
        switchButton.textContent = "Light"
    }
}


switchButton.addEventListener("click", () => {
    toggleMode()
})

