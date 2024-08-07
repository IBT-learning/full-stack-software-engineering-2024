// Select elements by their ids
const banner = document.getElementById('banner');
const darkButton = document.getElementById('dark-btn');
const lightButton = document.getElementById('light-btn');

// Attach event listener to the dark button
darkButton.addEventListener('click', () => {
banner.textContent = 'Dark Mode';
banner.style.color = 'white';
document.body.style.backgroundColor = 'black';
});

// Attach event listener to the light button
lightButton.addEventListener('click', () => {
banner.textContent = 'Light Mode';
banner.style.color = 'black';
document.body.style.backgroundColor = 'white';
});
