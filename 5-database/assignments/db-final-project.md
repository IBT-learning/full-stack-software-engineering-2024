# Database Final Project: Blog database

Your blog currently has a server with one or more endpoints for serving data to the front-end. But right now, the data is just stored in a placeholder file. We want to set up a database to create and store actual data!

We will want a database (I suggest "BlogAPI" unless your blog has a name) with two collections, for "posts" and "users". You should already have placeholder data from earlier phases of this project, now is the time to upload that through Compass as your "posts". You don't need to create the users collection manually, it will be created automatically by our schema constructor.

## Set up your database

Install `mongoose` and `dotenv` in your project. Write a `dbConnect` function that creates the mongodb connection via mongoose, and call that function in your `app.js`.

Use dotenv! Remember the two kinds of things that must be stored in environment variables are:

- secrets (such as JWT key and SALT)
- anything related to the development environment, such as port numbers, and paths outside the package. The path to your database localhost will be one of these. Remember to include the name of your database at the end of the connection string

## Add user authentication

Even though you probably don't have a web client that includes the register and login actions, you will need those endpoints in order to create valid test users and generate tokens. We will worry about adding that functionality to the client in the next unit when we learn React!

User authentication in MongoDB is fairly straightforward, so this can be very close to what you did for [users in the recipe app](./db-assignment-3.md). You will want to put more thought into the users schema for this one, though. What will "users" on your blog have? Take a look at how you designed your blog's user profile page, what is there? A bio, a tagline, a profile photo? Do they have a handle or display name that is different from their username? Make sure everything is represented on the user schema.

Remember, not every field has to be required! In fact, only fields that a user _must_ fill out when they sign up for an account should be required.

> Note: For now, if you have photos you can serve them as static files, like we learned in the Server unit. Have your documents store the _static path_ of the image. We will learn how to handle things like user-uploaded images in a later unit.

## Create your Posts schema

Your posts need to include at least these required fields:

- body: String (this is the text of the post)
- userId: ObjectId (the user who made the post)
- createdAt: timestamp, we don't set these fields manually. See the [schemas lesson notes](../mongoose-schemas/models/Book.js) for an example

What else? Again, look at your site design to see what else is included. Do posts have titles? Images? (Any information related to the user, such as their display name, can be accessed through the userId and doesn't need to be included on this schema separately.) Take the time to think through which fields are required and which are optional.

Once your schema is created, go back to your endpoints and update them to use the schema.

Now is a good time to think about which of your endpoints need to be behind token validation. Often the GET endpoints will be public and the POST, PUT, and DELETE endpoints will require authentication. But this is your blog site and your decision!

## Test with your client!

If you have updated your endpoints without changing their functionality, you shouldn't have to make any changes to calls to your public endpoints, and your blog site should still work as it previously does.

For any endpoints you put behind token validation, you will need to add something to your `fetch` calls. They will need a second argument that looks like this:

```javascript
    fetch(`http://localhost:4000/api/...`, {
      headers: {
        authorization: token goes here...,
      },
    })
```

You will just paste in a hard-coded token here for testing purposes, but once we implement real login behavior, the client will be able to get the user's token from the cookies.

#### CORS

Depending on your browser, you may get a "Cross-Origin Resource Sharing" error in your browser. We will talk more about CORS in a later unit, but in the meantime you can probably circumvent the error with these steps

- run `npm i cors` in your npm package
- in your app.js
  - `import cors from "cors"` at the top
  - `app.use(cors())` somewhere _before_ you apply your controllers

## Thinking forward

Right now your client doesn't do a whole lot, so you might only have a couple of GET endpoints. Soon the app will need to do a lot more! Can you "write ahead" some endpoints that will be ready for the next phase of this project? What are the actions we foresee? Creating, editing, and deleting posts are obvious ones. Can you think of anything else a user might be able to do in your blog app?

What about users? Can they change their bios, display names, or anything else? (Leave profile photos for a future unit, for now let's keep using hard-coded ones, or not include them at all.) Can users delete their whole profiles?

If you're adding CRUD endpoints for users, does it make sense for those to be in the same controller as the authorization-related endpoints, `register` and `login`? Think about separation of concerns. It's okay to add more controllers if it keeps things tidy!

(You may be tempted at this point to start thinking about likes and comments, but unless you are feeling very confident with this material I will discourage you from making the project overly complicated at this phase. Likes and comments will probably require more schemas, and more thought about foreign key relationships.)

I leave it to you how much of this you want to do now, but I will warn you that React is a big topic and the next projects will be big lifts! If you write these endpoints now, later you will be glad you did.

Again, it's not necessary to implement this functionality in your client yet. Just write the endpoints and test them with Postman. Don't forget to include tokens as needed, and don't forget that your tokens expire!

## Refreshers (optional)

Unless you really love writing event listeners, I don't think that actually implementing new functionality (such as creating posts) into your client at this point will be a good use of your time. We will soon be learning a whole new approach to writing web clients.

However, some of the actions we will be implementing soon will require new designs. Take some time to think about all these user actions, and whether they're already reflected in your blog's HTML. Where will users add new posts from? Is there a field at the top of the home page, or is it a separate page? What about login? Registering a new account? Editing or deleting a post?

Now would be a great time to build new pages or adjust your existing pages to prepare for the next phases of the project. Any structural HTML you write will be usable in React, but don't worry about making the forms actually submit or anything like that.
