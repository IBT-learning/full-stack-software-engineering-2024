const bannerEl = document.getElementById('banner');
const switchBtn = document.querySelector('.switch-btn');
const newButton1 = document.createElement('button');
const newButton2 = document.createElement('button')
const modeColor = document.body;


switchBtn.addEventListener('click', () => {
    newButton1.textContent = 'Dark';
    newButton2.textContent = 'Light';
    document.body.appendChild(newButton1);
    document.body.appendChild(newButton2);
    switchBtn.classList.toggle('hidden');
})

newButton1.addEventListener('click', () => {
    bannerEl.textContent = 'Dark Mode';
    bannerEl.style.color = '#f0f0f0';
    modeColor.style.backgroundColor = 'black';
})

newButton2.addEventListener('click', () => {
    bannerEl.textContent = 'Light Mode';
    bannerEl.style.color = 'black';
    modeColor.style.backgroundColor = '#f0f0f0';
})
