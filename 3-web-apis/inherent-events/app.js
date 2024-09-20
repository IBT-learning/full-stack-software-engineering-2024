const tricks = document.getElementById("tricks");

// this is a "user-defined event" (as opposed to an inherent event)
tricks.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.replace("https://youtu.be/dQw4w9WgXcQ?feature=shared");
});
