# Database Assignment #1: mongodb practice

We're going to set up a very simple server, connect to the database, and add some data. I didn't show this in the lesson, but the driver methods that get the database and collection are actually "get or create" methods. That means that if you try to get a database or collection that doesn't exist, mongodb will actually create them for you. In this exercise we'll create a new database and collection through the mongodb driver.

### Set up an express server

Create a new express server just like you normally do, but also install `mongodb`. Use the `express.json()` middleware in your `app.js`.

Set up a `POST` endpoint to the path `'/'`. Make sure you can read the request body, by logging it or sending it back on the response.

### Connect to the mongodb server

1. import the mongodb driver
1. get `MongoClient` from it
1. create a new client with `MongoClient`
1. call `client.connect()` to establish your connection

### Add data to a new database

1. in your endpoint, use the client to get a database called `newDB`
1. from the database, get a collection called `newCollection`
1. on the collection, call `insertOne` with the request body as the argument
1. in Postman, make a call to this endpoint with a JSON request body of your choice (any valid JSON will do, use `{"test":"test"}` or something more interesting)

### Check Compass

If your previous steps were successful, you should be able to see `newDB` with `newCollection` and the document you created in Compass. You will probably have to refresh the view, with this symbol: 🔄

### Extra challenge (optional)

Add a few entries to your new DB (just by making further calls in Postman.) Set up an endpoint to get all of your documents.

For a further challenge, set up an endpoint to get specific documents by their id.

For an even further challenge, look up [how to update](https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/#update-a-document) and [delete](https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/#delete-a-document) documents, and implement endpoints to perform those operations
