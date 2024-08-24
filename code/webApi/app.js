/*const banner = document.getElementById("banner");
const darkbtn = document.getElementById("dark-btn");
const lightbtn = document.getElementById("light-btn");

darkbtn.addEventListener("click", () => {
    banner.textContent = 'Dark Mode';
    banner.style.color = 'white';
    document.body.style.backgroundColor = 'black';
  });
  lightbtn.addEventListener("click", () => {
    banner.textContent = 'light Mode';
    banner.style.color = 'black';
    document.body.style.backgroundColor = 'white';
  });*/
  const banner = document.getElementById('banner');
const modeBtn = document.getElementById('mode-btn');

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  banner.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
  modeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});