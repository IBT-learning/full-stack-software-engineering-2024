const lightMode = document.getElementById("banner")
// const dark = document.getElementById("dark-btn")
// const light = document.getElementById("light-btn")
const button = document.getElementById("toggle-class")

// Extra challenges
// Instead of black and white, change the colors to dark and light gray. (Easier on the eyes!)
// Add a CSS file with a class for dark mode. Instead of editing the style properties, toggle the class.
// Can you replace the two buttons with a single button?
// Start with the button saying "switch"
// Once that works, try changing the button to say "dark" or "light" depending on the mode
// Refreshers
// Center the header and button on the page, both vertically and horizontally
// Change the font of the banner
// Give the buttons a font size of 1.5rem and a padding of 0.5rem

// dark.addEventListener("click", ()=>{
//     lightMode.textContent = "Dark Mode"
//     lightMode.style.color = "#ffff"
//     document.body.style.backgroundColor = "#000000"
    
// })

// light.addEventListener("click", ()=>{
//     lightMode.textContent = "Light Mode"
//     lightMode.style.color = "#000000"
//     document.body.style.backgroundColor = "lightgray"
// })
button.addEventListener("click", ()=>{
 document.body.classList.toggle('dark-mode')
 if(document.body.classList.contains('dark-mode')){
    lightMode.innerText =" Dark " 
 }else{
     lightMode.innerText = "Light"
 }
})
