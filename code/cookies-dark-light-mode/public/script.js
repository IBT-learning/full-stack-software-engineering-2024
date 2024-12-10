// Select elements by their ids
const banner = document.getElementById('banner');
const darkButton = document.getElementById('dark-btn');
const lightButton = document.getElementById('light-btn');

// Function to set the theme and send the cookie
const setTheme = (theme) => {
    banner.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    banner.style.color = theme === 'dark' ? 'white' : 'black';
    document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';

    // Send fetch request to set the cookie
    fetch(`/set-cookie?mode=${theme}`);
};

// Attach event listener to the dark button
darkButton.addEventListener('click', () => setTheme('dark'));

// Attach event listener to the light button
lightButton.addEventListener('click', () => setTheme('light'));

// Read cookie on page load to apply saved theme
window.onload = () => {
    const theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
    if (theme) {
        const mode = theme.split('=')[1];
        setTheme(mode); 
    }
};
