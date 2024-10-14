// Challenge: Make the colour of the box red when button is clicked
/*
  1. Select the box
  2. Select the button
  3. Add Event Listener to button
    Syntax: element.addEventListener(event, callback, options);
      element: The HTML element you want to attach the event listener to. This is usually selected using methods like document.querySelector, document.getElementById, etc.
      event: A string representing the type of event to listen for (e.g., "click", "keydown", "submit", etc.).
      callback: A function that will be executed when the event occurs. This function can also take an optional event object as its parameter, which contains information about the event.
      4. Add class of style in css file to button
*/
const firstBox = document.querySelector("#box");
const redButton = document.getElementById("red-button");
redButton.addEventListener("click", function () {
  firstBox.classList.add("red-box"); //This makes the background-color of the box red
});

const secondBox = document.querySelector("#box-2");
const toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", function () {
  secondBox.classList.toggle("purple-box");
  secondBox.classList.toggle("box-circle");
});
