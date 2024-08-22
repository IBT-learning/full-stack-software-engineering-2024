const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const banner = document.getElementById("banner")
const body = document.querySelector("body")


    darkButton.addEventListener("click", () => {
        banner.innerText = "Dark Mode"
        body.classList.toggle("dark")
    })
    
    lightButton.addEventListener ("click", () => {
        banner.innerText = "Light Mode"
        body.classList.toggle("light")
    })

