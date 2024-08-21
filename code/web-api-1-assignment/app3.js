// PART B - Extra Challenge
// 2.
// these style won't be applied unless I take off the inline css first

const banner = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const body = document.getElementById("body")

darkButton.addEventListener("click", () => {
    banner.textContent = "Dark Mode"
    body.classList.toggle("darkmode")
 
 })
 
 lightButton.addEventListener("click", () => {
     banner.textContent = "Light Mode"
     body.classList.toggle("darkmode")
    //  banner.style.color = "darkgray"
    //  body.style.backgroundColor = "white"
 })

// TODO:how to add the above to a function
// TODO:how to toggle the changes when the button are clicked only once