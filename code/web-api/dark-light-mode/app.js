//In the JS, select all three of these elements using their ids and save them to variables.
const theme = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")
const switchButton = document.getElementById("switch-btn")


// Attach an event listener to the "dark" button that does the following things:
// change the textContent property of the banner to say "Dark Mode"
// change the .style.color property of the banner to be white
// change the .style.backgroundColor property of the document.body to be black

darkButton.addEventListener("click", () =>{
    theme.textContent = "Dark Mode";
    document.body.classList.add("dark-mode")
    
    // In-line styles for ques2
    // theme.style.color = "white";
    // document.body.style.backgroundColor = "black";
   
})

lightButton.addEventListener("click", () =>{
    theme.textContent = "Light Mode";
    document.body.classList.remove("dark-mode")

    //In-line styles for ques2
    // theme.style.color = "black"
    // document.body.style.backgroundColor = "white"
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









