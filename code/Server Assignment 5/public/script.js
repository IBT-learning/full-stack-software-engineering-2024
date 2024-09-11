let banner = document.getElementById("banner");
let modeButton = document.getElementById("mode-btn");

function oldCookie(name){
  let cookies = document.cookie.split(';');
  for (let cookie of cookies){
    cookie = cookie.trim();
    if (cookie.startsWith(name + '=')){
      return cookie.split('=')[1];
    }
  }
  return null
}

function setPreference() {
  const modeValue = oldCookie('mode');
  if (modeValue === "dark"){
    banner.textContent = "Dark Mode";
    document.body.classList.add("dark-mode");
    modeButton.textContent = "Light";
  } else {
    banner.textContent = "Light Mode";
    document.body.classList.remove("dark-mode");
    modeButton.textContent  ="Dark";
  }
}

function mode() {
  let modeValue;

  if (banner.textContent === "Light Mode") {
    banner.textContent = "Dark Mode";
    document.body.classList.add("dark-mode");
    modeButton.textContent = "Light";
    modeValue = "dark";
  } else {
    banner.textContent = "Light Mode";
    document.body.classList.remove("dark-mode");
    modeButton.textContent = "Dark";
    modeValue = "light";
  }

  fetch(`/cookie?mode=${modeValue}`).then(response=>{
    if (response.ok){
      console.log("cookie has been set.");
    } else {
      console.error("failed to set the cookie.");
    }
  })
  .catch(error => console.error("error with fetch"));
}

modeButton.addEventListener("click", mode);

window.addEventListener('load', setPreference);
