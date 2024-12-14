const newBanner = document.getElementById("banner");

const darkButton = document.getElementById("dark-btn");

const lightButton = document.getElementById("light-btn");


darkButton.addEventListener("click",()=>
    newBanner.textContent = "Dark Mode"
);

darkButton.addEventListener("click",()=>
    newBanner.style.color = "white"
);

darkButton.addEventListener("click",()=>
    document.body.style.backgroundColor = "gray"
);


lightButton.addEventListener("click",()=>
    newBanner.textContent = "Light Mode"
);


lightButton.addEventListener("click",()=>
    newBanner.style.color = "white"
);

lightButton.addEventListener("click",()=>
    document.body.style.backgroundColor = "lightgray"
);

// Extra Challenge
// darkButton.addEventListener('click', () => {
//     newBanner.textContent = 'Dark Mode';
//     document.body.classList.add('dark-mode');
// });

// lightButton.addEventListener('click', () => {
//     newBanner.textContent = 'Light Mode';
//     document.body.classList.remove('dark-mode');
// });



