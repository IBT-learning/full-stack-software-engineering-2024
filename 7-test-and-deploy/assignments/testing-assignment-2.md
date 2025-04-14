# Testing Assignment #2: Writing Automated Client Tests

In this assignment you'll use `vitest` and `react-testing-library` to write automated tests for an old assignment.

### Testing React To-Do App

Let's revisit your [React To-Do App](../../6-react/assignments/react-assignment-2.md).

You can either copy that assignment into a new folder, or just add the tests to your old assignment. Either way is fine.

To set up:

- Install `vitest`, `@testing-library/react`, and `jsdom` into the npm project.
- Add the [test configuration settings](../test-client/vite.config.js) to `vite.config.js`
- Create an`App.test.js` file.

In that file, write tests for the following behaviors:

1. Add a new item to the to-do list
   - try firing a `change` event to update the value of the input field
   - then fire whatever event submits the item to the list
   - then look for an element with that text on the `screen`
1. Mark an item as complete, and check that the display changes to reflect that

### Extra challenges (optional)

Did you add anything else to your app, such as deleting items? Anything you wrote into your project, write a test for it!
