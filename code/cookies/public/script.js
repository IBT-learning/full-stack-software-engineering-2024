// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set theme based on cookie
window.addEventListener('load', () => {
  const savedTheme = getCookie('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

// Toggle between light and dark mode
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  const theme = isDarkMode ? 'dark' : 'light';

  // Save the selected theme using fetch
  fetch(`/set-theme?theme=${theme}`)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

// Reset theme cookie and remove dark mode
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  fetch('/reset-theme')
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.body.classList.remove('dark-mode');
    })
    .catch(error => console.error('Error:', error));
});
