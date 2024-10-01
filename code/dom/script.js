// Select the elements using their IDs
const banner = document.getElementById('banner');
const toggleButton = document.getElementById('toggle-btn');

// Check current mode
let isDarkMode = false;

// Function to toggle mode
function toggleMode() {
    if (isDarkMode) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        banner.textContent = 'Light Mode';
        toggleButton.textContent = 'dark';
    } else {
        // Switch to dark mode
        document.body.classList.add('dark-mode');
        banner.textContent = 'Dark Mode';
        toggleButton.textContent = 'light';
    }
    isDarkMode = !isDarkMode;
}

// Attach event listener to the button
toggleButton.addEventListener('click', toggleMode);
