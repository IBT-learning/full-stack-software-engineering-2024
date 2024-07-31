const bannerEl = document.getElementById('banner');
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');
const bodyEl = document.body;

let modeSwitch = (Mode, color, background) => {
    bannerEl.textContent = Mode;
    bannerEl.style.color = color;
    bodyEl.style.background = background;
};

darkBtn.addEventListener('click', () => {
   modeSwitch('Dark Mode', 'White', 'Black');
});

lightBtn.addEventListener('click', () =>{
    modeSwitch('Light Mode', 'Black', 'White');
})


// Extra Challenges



darkBtn.addEventListener('click', () => {
    modeSwitch('Dark Mode', 'light gray', 'black')
})

lightBtn.addEventListener('click', () => {
    modeSwitch('Light Mode', 'dark', 'White')
})