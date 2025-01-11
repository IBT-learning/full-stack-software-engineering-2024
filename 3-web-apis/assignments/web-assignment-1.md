# Web API Assignment #1: Dark mode, Light mode

For the Web assignments, each assignment will need its own folder. You will place at least an `index.html` and `app.js` in this folder. Some assignments will also require CSS.

### Dark mode, Light mode

Start by pasting this code into the `body` of your HTML:

```html
<h1 id="banner">Light Mode</h1>
<button id="dark-btn">dark</button>
<button id="light-btn">light</button>
```

1. In the JS, select all three of these elements using their ids and save them to variables.
1. Attach an event listener to the "dark" button that does the following things:
   1. change the `textContent` property of the banner to say "Dark Mode"
   1. change the `.style.color` property of the banner to be white
   1. change the `.style.backgroundColor` property of the `document.body` to be black
1. Repeat (but inverse) for the "light" button

#### Extra challenges

- Instead of black and white, change the colors to dark and light gray. (Easier on the eyes!)
- Add a CSS file with a class for dark mode. Instead of editing the style properties, toggle the class.
- Can you replace the two buttons with a single button?
  - Start with the button saying "switch"
  - Once that works, try changing the button to say "dark" or "light" depending on the mode

#### Refreshers

- Center the header and button on the page, both vertically and horizontally
- Change the font of the banner
- Give the buttons a font size of `1.5rem` and a padding of `0.5rem`
