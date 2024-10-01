const lightMode = document.getElementById("banner")
const button = document.getElementById("toggle-class")



button.addEventListener("click", ()=>{
 document.body.classList.toggle('dark-mode')
 if(document.body.classList.contains('dark-mode')){
    lightMode.innerText =" Dark " 
 }else{
     lightMode.innerText = "Light"
 }
})
