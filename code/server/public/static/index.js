//In the JS, select all three of these elements using their ids and save them to variables.
const theme = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const switchButton = document.getElementById("switch-btn")
const bgColor = document.getElementById("bg-Color")
const resetButton = document.getElementById("reset-btn")

// Step #3
const getCookieVal = (keyName) => {
    if (document.cookie.includes(keyName)){
        const nameVal = document.cookie
        .split(";")
        .find((s) => s.includes(keyName))
        .split('=')
        .at(1)

        return nameVal
    }
    else{
        return null
    }
}

function applyCookie() {
    const cookieMode = getCookieVal("theme");  

    if (cookieMode === "dark") {
        document.body.classList.add("dark-mode");  
        theme.textContent = "Dark Mode";           
        switchButton.textContent = "Activate Light Mode"; 
    } else {
        document.body.classList.remove("dark-mode");
        theme.textContent = "Light Mode";            
        switchButton.textContent = "Activate Dark Mode"; 
    }
}

window.addEventListener("DOMContentLoaded", applyCookie);

switchButton.addEventListener("click", () =>{
    document.body.classList.toggle("dark-mode")

    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";

    if(document.body.classList.contains("dark-mode")){
        theme.textContent = "Dark Mode";
        switchButton.textContent = "Activate Light Mode"
    }
    
    else{
        theme.textContent = "Light Mode";
        switchButton.textContent = "Activate Dark Mode";
    }

    fetch(`/cookie?name=theme&value=${mode}`) //cookie stores the user's theme preference (dark or light mode), allowing the app to rem this choice even after the user refreshes the page or navigates away.
})

function preference() {
    const bgColor = document.getElementById("bg-Color").value;


    document.body.style.backgroundColor = bgColor;
    document.cookie = `bgColor=${bgColor}; path=/`;
}

function applyTheme() {
    const bgColor = getCookieVal("bgColor");
    if (bgColor) {
        document.body.style.backgroundColor = bgColor;
    }
}

bgColor.addEventListener("change", preference);

resetButton.addEventListener("click", () => {
    document.cookie = "bgColor=; expires=Thu, 21 Jan 1970 23:59:59 UTC; path=/";
    document.body.style.backgroundColor = "";
});







