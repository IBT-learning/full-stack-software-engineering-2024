const banner = document.getElementById("banner");
const dark = document.getElementById("dark-btn");
const light = document.getElementById("light-btn");
const btn = document.getElementById("mode-btn");

// extra challenge #1


// dark.addEventListener("click", () => {
//     banner.textContent = "Dark Mode";
//     // banner.style.color = "white";
//     // document.body.style.backgroundColor = "DarkGray";
//     document.body.classList.toggle("dark");
// })

// light.addEventListener("click", () => {
//     banner.textContent = "Light Mode";
//     banner.style.color = "black";
//     document.body.style.backgroundColor = "LightGray";
// })


// extra challenge #2

btn.addEventListener("click", () => {
    if (btn.textContent === "Dark") {
        btn.textContent = "Light";
        banner.textContent = "Light Mode";
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        
    } else {
        btn.textContent = "Dark";
        banner.textContent = "Dark Mode";
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
}
)
