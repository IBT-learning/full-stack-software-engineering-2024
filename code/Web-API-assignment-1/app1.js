//select elements by their IDs
const banner = document.getElementById('banner');
const darkButton = document.getElementById('dark-btn');
const lighButton = document.getElementById('light-btn');

//add an event listener to the dark button
darkButton.addEventListener('click', () => {
    banner.textContent = 'Dark Mode';
    banner.style.color = 'white';
    document.body.style.backgroundColor = 'black';
});

//add an event listener to the light button
lighButton.addEventListener('click', () => {
    banner.textContent = 'Light Mode';
    banner.style.color = 'black';
    document.body.style.backgroundColor = 'white';
} );