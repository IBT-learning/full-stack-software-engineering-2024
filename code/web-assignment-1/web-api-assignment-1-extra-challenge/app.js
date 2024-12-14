const newBanner = document.getElementById("banner");

const switchButton = document.getElementById("switch-btn");

switchButton.addEventListener("click",()=>{
    console.log('Button clicked');
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        newBanner.textContent = "Switched to Light Mode";
        switchButton.textContent = "Dark";
    } else{
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        newBanner.textContent = "Switched to Dark Mode";
        switchButton.textContent = "Light";
    }
});