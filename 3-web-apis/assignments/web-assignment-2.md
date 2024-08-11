# Web API Assignment #2: Fetching data

### Make a to-do list with data from a remote API

> Note: all of the to-do items in this database are lorem ipsum, their content does not matter for this exercise

1. Create an HTML file, with `<ul id=to-do-list></ul>` in the body.
1. In a JS file, create an async function, and fetch all of the to-dos at this url: `https://jsonplaceholder.typicode.com/todos?userId=1`
   - **note:** there are 10 users in this database, you could choose any userId between 1 and 10 for the url
1. For each to-do item in the data
   1. create an `<li>` element
   1. set the text as the todo text
   1. append it to the `<ul>` on the page
1. If the item has a `completed` status of `true`, change the style in some way to make it look done. You could use `text-decoration: line-through`, or change the color, or anything you like that makes it look different.
   - **note:** you could do this by adding a class from a linked css sheet, but I don't think it's necessary!

### Extra challenges (optional)

#### Check off more items

Can you add a token (a button, icon, small image, etc) to each to-do line that listens for click events, and styles that item as complete when clicked? (Note that we have no way of making this change permanent, and it should reset when you refresh the page.)

If you are really itching for a big challenge, you could also try creating a way to "uncomplete" an item, or reset that one that has already been marked as complete. An even bigger challenge would be to do both actions with a single button that toggles a class!

#### Change users

Can you add an input field (maybe a `<select>` with `<options>`, or maybe a `<input type="number">` with the min and max set to 1-10) that we can use to change which user's to-do items we want to see? There are ten users in the database, and each one has a different set of 20 items. Changing this input field would trigger a new `fetch` to get a new set of items.

If you do this, try listening for a `change` event rather than adding a submit button.

### Refreshers

Try styling the page so it looks nice! Keep your CSS muscles flexed!
