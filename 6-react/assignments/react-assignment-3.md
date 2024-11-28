# React Assignment #3: Random quotations

In this project, we'll use a free public API to generate random quotes by topic.

The documentation for the API can be found [here](https://quoteslate.vercel.app/). The endpoints we will be using are "Get Available Tags" and "Get a Quote by Tags". Take a moment before you begin to familiarize yourself with the endpoints. They are both GET endpoints, so you will be able to hit them with your browser.

The simplest version of this app can be done within the `App` component, with no further components. You are free to create more components if you would like to flex your muscles!

## Fetch remote data in your app

Your app will need to use `useEffect` twice:

- Fetch "Get Available Tags" once when the app loads
- Fetch "Get a Quote by Tags" whenever a new tag is selected

Use a `<select>` element with one `<option>` for each tag that you got from the API call. Listen for changes on the `<select>` element, and when a new tag is selected from the drop-down list, save that tag to state. This should automatically cause a new random quote to be fetched.

> Tip: You will need three separate state variables here

Take a little time to style this page nicely. Remember, we are back in the front-end, it's always worth the effor to spend time giving an app a clean, professional appearance with a clear user interface.

### Extra challenges (optional)

Choose any of these challenges to tackle, if you like.

#### Select multiple tags

The endpoint that gives us a random quote will work with multiple, comma-separated tags. The HTML select element has a [multiple attribute](https://www.w3schools.com/tags/att_select_multiple.asp) that allows users to select multiple items from a dropdown list. Can you adjust our API call to work with multiple tags?

It is possible to select a combination of tags that will return no quotations. (For example, `empathy,fear` will have no quotes.) Make sure the page can handle this outcome!

#### Get multiple quotes

Look at the last endpoint in the API documentation. You can see that it's possible to get multiple quotes at the same time. Start by getting three quotes instead of one. Now try one or both of the following challenges:

- Now that there are multiple quotes on the page, use a Quote component to display each quote. (It's okay if the component is very simple!)
- Introduce another input field where the user can select the number of quotes they would like to see. The API will support up to 50 at a time, I recommend offering the user no more than 10.

#### Get quotes by author

You'll notice the API offers two endpoints for getting quotes by author. There are too many authors in the database for a drop-down menu to work. Can you create a user input field where the user can search for authors, and then find quotes by a given author?

This is definitely the trickiest one of the extra challenges. The API doesn't provide a way to search by partial match, so you'll have to choose between making the user type the author's name exactly as it appears in the database (including spaces) or providing the user with an author-search that is a separate step from generating quotes.

(If you finish this challenge, can you combine it with the previous challenges, and get multiple quotes by an author, or search for quotes by tag and author?)
