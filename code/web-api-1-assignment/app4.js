// PART B - Extra Challenge
// 3.

const banner = document.getElementById("banner")
const switchButton = document.getElementById("btn")
const body = document.getElementById("body")

switchButton.addEventListener("click", () => {
    // banner.textContent = "Dark Mode"
    body.classList.toggle("darkmode")
 
 })
 
// switchButton.addEventListener("click", () => {
//     banner.textContent = "Light Mode"
//     body.classList.toggle("lightmode")
//  })

// TODO:how to add the above to a function
// TODO:how to toggle the changes when the button are clicked only once