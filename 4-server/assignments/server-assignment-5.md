# Server Assignment #5: Light and Dark Mode with Cookies

Much like the last assignment, we're going to revisit a previous assignment, [Dark mode, Light mode](../../3-web-apis/assignments/web-assignment-1.md), and build a back-end to support our existing client. This one will involve adding more code to the client as well as building a server with a new endpoint.

### Step 1: Create an express server and serve static files

Just like the last assignment, create a new express server, serve static files, and place your HTML, CSS, and JS files (from the Dark mode, Light mode assignment) into your static folder. Make sure your HTML file is called `index.html` so it can be served to `/` automatically.

At this point you should be able to go to `http://localhost:4000/` and see your app.

### Step 2: Create an endpoint to save a cookie

In your `app.js`, set up a new `.get()` endpoint that adds a cookie to the response. It should get the information from the request, either in a query string or a url parameter.

In your client-side JS, there is an event listener that fires when the user switches between light and dark mode. In that event listener, use fetch to make a request to the endpoint you just wrote. You will know this step is successful when you can open your browser's devtools, go to the "Storage" tab, look at the cookies, and see the cookie you saved.

### Step 3: Update your client to read the cookies

Now your client needs to actually read the cookie you saved. Read the cookie off the document, parse it, and use that to set the appropriate styles. This code will only need to run one time when the page loads.

Now you should be able to switch to dark mode, refresh the page, and have your preference persist.

### Extra challenges (optional)

Cookies are pretty simple so there's not a lot of complexity to exercise here. If you like, you can play around with other values you might be able to set. What if the user could choose their background color and text color independently, for a custom theme? Can you think of any other site preferences you might be able to mock up?

How about a "reset" button that will remove/disable the cookies? [This Express documentation](http://expressjs.com/en/4x/api.html#res.clearCookie) should help.
