const lightMode = document.getElementById("banner")
const dark = document.getElementById("dark-btn")
const light = document.getElementById("light-btn")

// Extra challenges
// Instead of black and white, change the colors to dark and light gray. (Easier on the eyes!)

dark.addEventListener("click", ()=>{
    lightMode.textContent = "Dark Mode"
    lightMode.style.color = "#ffff"
    document.body.style.backgroundColor = "#000000"
    
})

light.addEventListener("click", ()=>{
    lightMode.textContent = "Light Mode"
    lightMode.style.color = "#000000"
    document.body.style.backgroundColor = "lightgray"
})