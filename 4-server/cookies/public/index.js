console.log(document.cookie)

// this is how you would manually set a cookie
// we mostly don't do this because it is very finicky!
// we will set the cookies on the backend, but read them here

// document.cookie = "firstName=Danny; SameSite=None; Secure"
// document.cookie = "lastName=Burrow; SameSite=None; Secure"

// this function will always find the value of a given key
// if a cookie by that name exists
const getCookieValue = (keyName) => {
  if (document.cookie.includes(keyName)) {
    const nameVal = document.cookie
      .split(";")
      .find((s) => s.includes(keyName))
      .split("=")
      .at(1)
    return nameVal
  } else {
    return null
  }
}

// here we read the existing cookie value and use it to set the background color
// this will happen every time the page loads
// which is how our value persists even if we refresh
const color = decodeURIComponent(getCookieValue("color"))
if (color) document.body.style.backgroundColor = color

const button = document.getElementById("color-button")
const input = document.querySelector("input[type=color]")

button.addEventListener("click", () => {
  document.body.style.backgroundColor = input.value
  // the values must be URI Encoded in order to be saved as a cookie
  fetch(`/color?bgColor=${encodeURIComponent(input.value)}`)
})
