# Server Assignment #2: My First Express Server

### Setup

Look at the [npm notes](../npm-notes.md) for instructions on setting up your npm project. The only dependency you will need to install for this assignment is `express`.

Once your npm project is set up with express, in your `app.js`

1. import express
1. create the `app` object using the `express` function you imported
1. set up your listener on port 4000
1. when you start your server, you should see the message from your listener

### Create endpoints

For this assignment you will set up each of the following endpoints:

1. `/` — your home endpoint. Send an html `<h1>` header with a banner for your page
1. `/about` — send a short sentence about yourself
1. `/greet/:userName` — send a template string that greets each person by name
1. `/favorite` — utilize query strings at this endpoint
   - if a query string `fave` is included...
   - send a template string that says "My favorite thing is" and include the value of the query string
   - example: `http://localhost:4000/favorite?fave=eating` will produce "My favorite thing is eating"
   - if `fave` is not included in the query string, send a sensible message instead

You should be able to hit all of these endpoints on your `localhost`

### Extra challenge (optional)

Can you re-write the `/favorite` endpoint to handle an arbitrary number of query parameters? You will have to read the keys as well as the values. (Remember `req.query` is an object you can loop over.)

`http://localhost:4000/favorite?color=orange&food=stew` — "My favorite color is orange. My favorite food is stew."
