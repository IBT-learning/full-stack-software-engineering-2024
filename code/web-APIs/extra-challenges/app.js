const bannerEl = document.getElementById('banner');
const switchBtn = document.querySelector('.switch-btn');
const newButton1 = document.createElement('button');
const newButton2 = document.createElement('button');
newButton1.classList.add('dark-btn');
newButton2.classList.add('light-btn');
const modeColor = document.body;


switchBtn.addEventListener('click', () => {
    newButton1.textContent = 'Dark';
    newButton2.textContent = 'Light';
    document.body.appendChild(newButton1);
    document.body.appendChild(newButton2);
    switchBtn.classList.toggle('hidden');
})

newButton1.addEventListener('click', () => {
    setTimeout(() => {
    bannerEl.textContent = 'Dark Mode';
    bannerEl.style.color = '#f0f0f0';
    addModeColorToBtn('#f0f0f0', 'black')
    modeColor.style.backgroundColor = 'black';
    }, 2000);
})

newButton2.addEventListener('click', () => {
    setTimeout(() => {
    bannerEl.textContent = 'Light Mode';
    bannerEl.style.color = 'black'
    addModeColorToBtn('black', '#f0f0f0');
    modeColor.style.backgroundColor = '#f0f0f0';
    }, 2000)

})

function addModeColorToBtn(dark, white) {
    newButton1.style.background = white;
    newButton2.style.background = white;
    newButton1.style.color = dark;
    newButton2.style.color = dark;
}
