# React Assignment #2: To-do app

We are going to make a simple to-do list using react! This can look very similar to the to-do app you wrote using Web APIs. Feel free to revisit that assignment to reuse some of the HTML and CSS. However, this one will be significantly more complex. Rather than just loading elements from a static remote resource, we'll have a text input field we will use to add elements to the list.

## Create a React Project

Revisit the [instructions from the previous assignment](./react-assignment-1.md) for a reminder on how to start a new React project.

## Write a to-do list

I'm not going to give you a lot of details on how to implement this app, part of the challenge will be to design the solution yourself.

#### Requirements:

- there is an input field on the page
- when I submit a value from the input field, it will be added to the to-do list
- there is a way to mark an item as "completed"
- when I mark an item as completed, the display will change

#### Test data:

You'll probably want to start with some beginning data to work with while you develop. You will always be able to take this out later. I suggest this data structure, but feel free to adjust it as your app calls for.

```javascript
const tasks = [
  { id: 1, task: "make dinner", completed: true },
  { id: 2, task: "wash the dishes", completed: false },
  { id: 3, task: "finish homework", completed: false },
]
```

### Extra challenges (optional)

You can mark an item as completed, but can you undo that action? If your current solution doesn't allow this, try to come up with one that does.

In addition to a way to mark an item as complete, can we delete an item from the list entirely?
