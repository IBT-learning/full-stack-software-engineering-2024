// Selecting the elements
const banner = document.getElementById('banner');
const modeToggleButton = document.getElementById('mode-toggle-btn');

// Initial mode state
let isDarkMode = false;

// Event listener for the button
modeToggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        // Change to light mode
        document.body.classList.remove('dark-mode');
        banner.textContent = 'Light Mode';
        modeToggleButton.textContent = 'switch';
        isDarkMode = false;
    } else {
        // Change to dark mode
        document.body.classList.add('dark-mode');
        banner.textContent = 'Dark Mode';
        modeToggleButton.textContent = 'switch';
        isDarkMode = true;
    }
});
