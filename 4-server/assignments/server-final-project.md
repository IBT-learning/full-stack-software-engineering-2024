# Server Final Project: Blog server

It's finally time to build a back-end for our blog sites! For this assignment, you'll create a JSON resource with blog entries, serve that JSON with an Express server, and then plug those endpoints into your existing front-end.

## Create blog data JSON

These blog entries don't have to be real or realistic, you are welcome to use lorem ipsum, copy articles from the web (with attribution) or use any other content you like. If you already wrote entries for previous versions of your blog and then had to discard those for the Web APIs final project, now is your chance to bring those back!

This is your project and your data, so it is up to you what information you want to include. Each entry must have an id, user, and body. (The body is the actual post contents.) Be sure to include any other data that you included in your mock-up, such as title, etc.

For example, it may look like this:

```json
[
  {
    "id": 27,
    "userId": 3,
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing..."
  },
  {
    "id": 28,
    "userId": 1,
    "body": "Blanditiis, voluptatum iusto minus excepturi..."
  }
]
```

If you want to also include images, add those to the static folder of your server, and include the path in your post objects, like so:

```json
{
  "id": 27,
  "userId": 3,
  "body": "Lorem ipsum dolor sit amet consectetur adipisicing...",
  "image": "images/photo123.png"
}
```

## Create an Express server

You will create a new express server with endpoints to serve your blog data, and statically serve your HTML, CSS, and JS files for your blog site.

### Statically serve your existing site

Use the `express.static` middleware to serve the version of your project that you finished for the Web API's final unit. At this point you should be able to go to `http://localhost:4000/` and see your blog, just the way it worked before.

### Serve blog data

Now it's time to add some endpoints! It's up to you to figure out what endpoints you will need. A good starting place is to look at your last version of the blog site, where you make `fetch` calls to `jsonplaceholder`. You will probably need an equivalent endpoint for each endpoint you are already using.

## Plug your new endpoints into your static JS

Now go through and replace all of the calls to `jsonplaceholder` with calls to your own API endpoints. That's it!

## Extra challenges (optional)

Your last version of this site may also be getting `user` information from `jsonplaceholder`. How can we replicate that on our local server?

One option is to add a second JSON file that includes the user data you'll need, and then create an endpoint that serves individual users. Then it's simply a matter of swapping the urls in the client JS.

Another option would be to add nested user objects to your blog posts JSON data. That would probably require some further changes to your static JS file, but would be simpler on the server side.

```json
{
  "id": 27,
  "user": {
    "name": "Leanne Graham",
    "username": "Bret",
    "profilePhoto": "images/001.png"
  },
  "body": "Lorem ipsum dolor sit amet consectetur adipisicing..."
}
```

If you don't want to tackle this, don't worry about it! We'll be learning more about handling users in the next unit, since they require special treatment anyway. You can leave your `jsonplaceholder` calls specifically for user data in this version of your project.
