# React Assignment #1: Controlling data with State

In this react assignment you will practice using the useState hook to create and update state variables within a component.

## Create a React Project

- navigate your command line to the place where you want to create this project
- `npm create vite`
  - The first time you run this command, npm will ask if you want to globally install vite. Just say yes!
- follow the prompts, input:
  - name of your project
  - React
  - JavaScript
- then follow the instructions in the terminal
  - `cd <name of your project>`
  - `npm install` or `npm i`
  - `npm run dev`
- open up the folder you just created and make the following changes
  - remove CSS in both `src/index.css` and `src/App.css`
  - remove everything between the `<>...</>` fragment in `App.jsx`
  - remove unused imports in `App.jsx`
- now you have a blank react app and you're ready to start coding!

## Write a Mood Board

The app will show a series of emojis. Somewhere on the page will be a string that reads "You are feeling {something} today". When you click on an emoji, the {something} will be replaced with a descriptive word. (How can you use state variables to accomplish this?)

Create a new component, and then load that component into the `App`. In the component (inside the component function but not inside the return) paste the following constant variable:

```javascript
const moods = [
  { emoji: "😊", description: "happy" },
  { emoji: "😴", description: "sleepy" },
  { emoji: "🤔", description: "thoughtful" },
  { emoji: "😄", description: "excited" },
  { emoji: "😌", description: "peaceful" },
]
```

> Feel free to add more emojis if it seems fun!

Now, using a loop, render each of these emojis along with an `onClick` event listener. When the emoji is clicked, it should update a state variable with that emoji's description, and the statement on the page should update.

Now that we're back in the front-end, it's time to keep flexing our CSS skills! Can you use flexbox to make the emojis nicely aligned, spaced, and centered on the page?

## Extra challenge (optional)

This component displays one person's mood. Could you reuse it to display several different people, each with their own mood state? Try passing a prop into the component and displaying a person's name as part of the mood statement, such as "Ani is feeling excited today" and "Ayo is feeling sleepy today."
