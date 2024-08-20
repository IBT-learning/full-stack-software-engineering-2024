const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const banner = document.getElementById("banner")


    darkButton.addEventListener("click", () => {
        banner.innerText = "Dark Mode"
        banner.classList.toggle("dark")
    })
    
    lightButton.addEventListener ("click", () => {
        banner.innerText = "Light Mode"
        banner.classList.toggle("light")
    })

