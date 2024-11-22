//In the JS, select all three of these elements using their ids and save them to variables.
const theme = document.getElementById("banner")
const darkButton = document.getElementById("dark-btn")
const lightButton = document.getElementById("light-btn")


// Attach an event listener to the "dark" button that does the following things:
// change the textContent property of the banner to say "Dark Mode"
// change the .style.color property of the banner to be white
// change the .style.backgroundColor property of the document.body to be black

darkButton.addEventListener("click", () =>{
    theme.textContent = "Dark Mode"
    theme.style.color = "#ffff";
    document.body.style.backgroundColor = "#000000"; //white color
   
})

//Repeat (but inverse) for the "light" button
lightButton.addEventListener("click", () =>{
    theme.textContent = "Light Mode"
    theme.style.color = "#000000"; 
    document.body.style.backgroundColor = "#ffff";
})
