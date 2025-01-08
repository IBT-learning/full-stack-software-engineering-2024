# Database Assignment #2: Make a CRUD app with Mongoose

For this assignment, you'll set up a simple CRUD app with five endpoints for our Recipe app.

### Create a local database for your Recipe data

You'll want to start with some starter data, so before you begin...

1. pull the most recent `main` into your personal branch. You can find instructions for that on [server assignment #1](../../4-server/assignments/server-assignment-1.md)
1. open Compass, and use the `+` symbol to "add database". You can name your database and the collection both "recipes"
1. click the green "Add Data" button, and select "Import JSON or CSV file"
1. Navigate to the `recipes.json` file that is in this repository, and upload it
1. You should now see several documents with recipes!

### Set up an express server

This will be almost identical to your last assignment, but you'll install `mongoose` instead of `mongodb`

### Create a Recipe Schema

Create a Schema with the following fields:

- title: string
- author: string
- instructions: string
- ingredients: array of strings
  - to indicate an array of strings use `ingredients: [String]` or `ingredients: [{type: String, maxlength: ...}]`

What other requirements do you think should be set? What are reasonable `maxlength` values? Are they required? Should they have default values?

### Connect to the mongodb server

Now that your Schema is set, you can import it into your controller and start making queries. But first, you must connect to the database server.

Follow how it's done in the `mongoose-schemas` lesson. Remember that the connection string must end with the name of _your_ local database, not mine and not the one from the example.

Import the Recipe schema into your controller, and set up a "get all" endpoint with `await Recipe.find()`. You should now see all of your local recipe documents in Postman when you hit that endpoint.

### Create your CRUD endpoints

Set up and implement five endpoints:

- Get all (return all documents)
- Get one by ID (return a single document)
- Create a new document (add a new document to the database)
- Update an existing document by ID
- Delete an existing document by ID

### Extra challenge (optional)

Make sure you're handling all possible user errors, and sending specific messages back that would help the user understand the problem.
