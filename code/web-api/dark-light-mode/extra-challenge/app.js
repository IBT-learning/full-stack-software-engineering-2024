//In the JS, select all three of these elements using their ids and save them to variables.
const theme = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const switchButton = document.getElementById("switch-btn")


// Instead of black and white, change the colors to dark and light gray. (Easier on the eyes!)
// Add a CSS file with a class for dark mode. Instead of editing the style properties, toggle the class.
// Can you replace the two buttons with a single button?
// Start with the button saying "switch"
// Once that works, try changing the button to say "dark" or "light" depending on the mode

darkButton.addEventListener("click", () =>{
    theme.textContent = "Dark Mode";
    document.body.classList.add("dark-mode")
})

lightButton.addEventListener("click", () =>{
    theme.textContent = "Light Mode";
    document.body.classList.remove("dark-mode")
})

switchButton.addEventListener("click", () =>{
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        theme.textContent = "Dark Mode";
        switchButton.textContent = "Activate Light Mode"
    }
    
    else{
        theme.textContent = "Light Mode";
        switchButton.textContent = "Activate Dark Mode";
    }
})









