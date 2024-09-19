//select elements by their IDs
const banner = document.getElementById('banner');
const darkButton = document.getElementById('dark-btn');
const lighButton = document.getElementById('light-btn');

//add an event listener to the dark button
darkButton.addEventListener('click', () => {
    banner.textContent = 'Dark Mode';
    banner.style.color = 'white';
    document.body.style.backgroundColor = 'black';
    saveMode('dark');
});

//add an event listener to the light button
lighButton.addEventListener('click', () => {
    banner.textContent = 'Light Mode';
    banner.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    saveMode('light');
} );

// Function to save mode in a cookie
function saveMode(mode) {
  fetch(`/set-mode?mode=${mode}`);
}

// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to apply the saved mode
function applySavedMode() {
  const mode = getCookie('mode');
  if (mode) {
      if (mode === 'dark') {
          banner.textContent = 'Dark Mode';
          banner.style.color = 'white';
          document.body.style.backgroundColor = 'black';
      } else {
          banner.textContent = 'Light Mode';
          banner.style.color = 'black';
          document.body.style.backgroundColor = 'white';
      }
  }
}

// Apply the saved mode on page load
applySavedMode();



