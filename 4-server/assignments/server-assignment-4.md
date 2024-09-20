# Server Assignment #4: Locally stored to-do list

For this assignment, you'll use your [Web APIs assignmnent #2](../../3-web-apis/assignments/web-assignment-2.md) to-do list as your starting place. We will create our own to-do list and fetch that data instead of using jsonplaceholder.

The client will be almost identical, you will only need to make minor changes to the JS code.

### Step 1: Statically serve your to-do app on an Express app

Set up a new express server, following the same steps from [server assignment #2](./server-assignment-2.md)

Add a folder called `public` or `static` and place the HTML, CSS, and JS files from your to-do project in that folder. Remember that only files named `index.html` will automatically be served to the home route by `express.static`. If you change the names of your JS or CSS files, remember to update their paths in the HTML file.

Use the `express.static` middleware to serve your project. At this point you should be able to go to `http://localhost:4000/` and see your to-do app.

### Step 2: Create new to-do data

We are replacing jsonplaceholder in this app, so we need new to-do data to serve. Write some new JSON and save it to your static folder. Your data structure should match what you see [in the jsonplaceholder data](https://jsonplaceholder.typicode.com/todos?userId=1).

Your entries can be as serious or silly as you like. You only need a few entries, but make sure some items have `"completed": false` and some have `"completed": true`.

It must be valid JSON, when you save the file with a `.json` extension your editor should show you if there are any formatting problems. Remember valid JSON has double quotes around all keys and all strings, and has no trailing commas.

### Step 3: Create an endpoint to serve your JSON

Set up a new endpoint that uses `.sendFile` to serve your JSON file.

You should be able to hit that endpoint in your browser or in Postman, and see the JSON you wrote.

### Step 4: Update your client to use our custom data

Instead of making your call to jsonplaceholder, change the url to your custom endpoint. If you didn't do the extra challenges from the todo assignment, that's it! Your client should still work, but show your new data.

### Extra challenges (optional)

#### Change users

If you set up a way to select different users, you won't be quite done yet! What needs to change in order for your app to work the same way it did before? Your endpoint will now need to do more than just `.sendFile`. It will need to read the JSON and filter it by user. I recommend going back to the [crud server lesson]('../../../crud-server/app.js') to see how we used the `fs` library to read files.

Things to keep in mind:

- Make sure your data actually includes multiple users!
- When you pass query strings, you can access those on `req.query`
- If you used a `select` with `options`, how did you create the options? Did you hard-code them? How does the client know how many users there are, and what their ids are? Maybe you need another endpoint for this? I leave it up to you how to solve this problem!
- If you used an number input, how did you set the min and max? How would your client know which user ids exist, and what happens if we select a user id that doesn't exist in your data set? You could solve this by changing to a `select` with `options`, or by responding to `null` or `undefined` values, or some other way! It's up to you!

#### Updating the data with the server

If you added a way mark items are complete, that should still work the same in this version, and reset when you refresh the page. It is not important to learn how to use `fs` to update our JSON, because very soon we will learn how to use a real database instead. For this assignment, it is fine to leave the json how it is.

If you really want to, you could try to add a `PUT` endpoint that updates the `completed` field on your todo item. Reference the [Fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch?utm_medium=firefox-desktop&utm_source=firefox-suggest&utm_campaign=firefox-mdn-web-docs-suggestion-experiment&utm_content=treatment#setting_the_method) to see how to use `fetch` with other HTTP methods.
