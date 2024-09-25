console.log(document.cookie)

document.cookie = "firstName=Danny; SameSite=None; Secure"
document.cookie = "lastName=Burrow; SameSite=None; Secure"

const getCookieValue = (keyName) => {
    if (document.cookie.includes(keyName)) {
        const nameVal = document.cookie
        .split(";")
        .find((s)=> s.includes(keyName))
        .split("=")
        .at(1)
    
        console.log(nameVal)
    } else {
        return null
    }
}

document.body.style.backgroundColor = decodeURIComponent(
    getCookieValue("color ")
)
const button = document.getElementById("button")
const input = document.querySelector("input[type=color]")

button.addEventListener("click", () => {
    document.body.style.backgroundColor = input.value
    fetch(`/color?bgColor=${encodeURIComponent(input.value)}`)
})
getCookieValue("firstname")