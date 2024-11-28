const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const banner = document.getElementById("banner")
const body = document.querySelector("body")


    const colorValue = (keyName) => {
        if (document.cookie.includes(keyName)) {
            const colorVal = document.cookie
            .split("; ")
            .find((s) => s.includes(keyName))
            .split("=")[1]
            return colorVal
        }else {
            return null
        }

    }


    const storedColor = colorValue("color")
    if (storedColor){
        document.body.style.backgroundColor = decodeURIComponent(storedColor)
        if (storedColor === "#505050"){
            body.classList.add("dark")
            body.classList.remove("light")
            banner.innerText = "Dark Mode"
        }else if (storedColor === "#cccccc"){
            body.classList.add("light")
            body.classList.remove("dark")
            banner.innerText = "Light Mode"
        }
    }
     

    darkButton.addEventListener("click", () => {
        banner.innerText = "Dark Mode"
        body.classList.toggle("dark")
        fetch(`mode?banner=${encodeURIComponent("#505050")}`)

    })
    
    lightButton.addEventListener ("click", () => {
        banner.innerText = "Light Mode"
        body.classList.toggle("light")
        fetch(`mode?banner=${encodeURIComponent("#cccccc")}`)
    })
