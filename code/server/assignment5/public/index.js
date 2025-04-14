const lightMode = document.getElementById("banner")
const button = document.getElementById("toggle-class")

function theme() {
  const modeVal = getCookieValue("mode");  
  if (modeVal) {
      if (modeVal === "Dark") {
          document.body.classList.add('dark-mode');  
      } else {
          document.body.classList.remove('dark-mode');  
          lightMode.innerText = "Light";
      }
  } else {
      lightMode.innerText = "Light";  
  }
  console.log("Current Mode from Cookie:", modeVal);
}


button.addEventListener("click", ()=>{
    let mode;
  document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        lightMode.innerText =" Dark " 
        mode = "Dark"
    }else{
        lightMode.innerText = "Light"
        mode = "Light"
    }
    
    fetch(`/cookie?mode=${encodeURIComponent(mode)}`)
    .then(res => res.text())
    .then(data => {
        console.log("data");
    })
})

const getCookieValue = (keyName) => {
  const cookieString = document.cookie
      .split("; ")
      .find(row => row.startsWith(keyName));
  return cookieString ? decodeURIComponent(cookieString.split("=")[1]).trim() : null; 
}
 theme()