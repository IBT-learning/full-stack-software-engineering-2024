/*
    ? Event Listeners
    Event listeners are always "listening" for user input or actions
    They are always attached to a specific element
    They always listen for a specific action or "event"
    They take a callback, and run that function when the event occurs
*/

// goal: turn the box red when we click the "Red" button
// steps: 
//      select the button
//      select the box
//      attach event listener


const redButton = document.querySelector("#red-button")
const box = document.getElementById("box")

redButton.addEventListener('click', () => console.log("The listener worked"))
redButton.addEventListener("click", () => box.classList.toggle("red"))

const opacityButton = document.getElementById("opacity-button")

opacityButton.addEventListener("click",() => box.classList.toggle("transparent"))

box.addEventListener("mouseenter", () => box.classList.add("blue"))
box.addEventListener("mouseleave", () => box.classList.remove("blue"))
