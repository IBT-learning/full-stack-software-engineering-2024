const tricks = document.getElementById("tricks");

tricks.addEventListener("click", (e) => {
  console.log("Link Clicked");
  e.preventDefault();
  window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
