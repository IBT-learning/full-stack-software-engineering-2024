const banner = document.getElementById("banner")
const dark= document.getElementById("dark-btn")
const light= document.getElementById("light-btn")

dark.addEventListener("click", function() {
    banner.textContent = "Dark Mode"
    banner.style.color = "white"
    document.body.style.backgroundColor = "black"
})

light.addEventListener("click", function() {
    banner.textContent = "Light Mode"
    banner.style.color = "black"
    document.body.style.backgroundColor = "white"
})

dark.addEventListener("click", function() {
    banner.textContent = "Dark Mode"
    banner.style.color = "#D3D3D3"
    document.body.style.backgroundColor ="#636363"
})

light.addEventListener("click", function() {
    banner.textContent = "Light Mode"
    banner.style.color = "#636363"
    document.body.style.backgroundColor = "#D3D3D3"
})