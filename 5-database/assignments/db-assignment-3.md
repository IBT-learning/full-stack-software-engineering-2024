# Database Assignment #3: Add users to your recipe app

You have already written a CRUD app for recipes. Now let's add user authentication, so that anybody can read recipes but only certain users can add, update, or delete recipes. The goal is that when registered users create a recipe, they will "own" that recipe, so that only they are allowed to modify or delete it.

### Add users to your app

Add a `User` model and a `users.js` controller with endpoints for creating an account, and for logging in. (So far this will look very similar to what's in the [user-auth lesson notes](../user-auth/), and that's okay!) It's up to you whether you want to define any additional fields on the user schema, beyond `email` and `password`.

### Add token validation

Create a middleware that validates tokens, (this will also look very similar to the lesson,) and then apply that middleware _only_ to your Create, Update, and Delete endpoints (that part will be somewhat different from the lesson example!)

Make sure your validation is fully working, and only valid users can access the restricted endpoints, before you proceed to the next step.

### Now for the interesting part...

If only users who created a recipe can make changes, that means our Schema needs to be updated to start recording who created each recipe. Each Recipe will have a `createdBy` field that stored an ObjectId, which represents a user in the database. (This is called a "foreign key", where a key from another collection is stored as a field on our documents.)

1. Add a field to the Recipe schema that looks like this:
   - `createdBy: mongoose.Schema.ObjectId` (it doesn't need more because we don't need to specify any other constraints on this field)
1. Change your Create endpoint to add the validated user's `_id` to the Recipe object before you save it.
   - How do you know what the validated user's `_id` is? Try adding the user object to the `req` during the `tokenValidation` middelware. Remember that middlewares always have access to the request and response objects, and can modify them! Those modifications will then be received by the next function in the call stack.
1. Change your Update endpoint to check whether the validated user matches the `createdBy` field on the recipe.
   - Remember to include sensible error handling. What do you think would be the right HTTP status code for a request on a recipe the user doesn't own?
1. Change your Delete endpoint to do the same thing!

> NOTE: You will need multiple users in your database to thoroughly test these endpoints

### Extra challenges

##### Cookies

In the next lesson I will demonstrate how to add the user's JWT to a browser cookie, but you already know everything you need to figure that out on your own! Don't worry too much about testing it, but if you like you could just open up any of your web-api assignments and have them manually make a fetch with your credentials, then check to see if your JWT is in Storage > Cookies

##### Get all by user

Try adding a new GET endpoint that returns all of the recipes that were created by a certain user. You will need to use `.find()` with a query object, similar to the query objects we use for `.findOne()`
