# React Assignment #4: Recipe client

You already have a server with some endpoints for a recipe app, now it's time to create a client to go with it!

For the first version, you won't need users. If you have two separate versions of your Recipe API project, use the one without user validation. If you only have one version and it has users in it, temporarily remove the validation requirement from your endpoints. This is a trivial change, you can easily put it back later.

## Requirements

Use React Router to create an application with multiple pages that share a layout.

1. A "home" page that shows all of the recipe titles
1. A "recipe" page that shows a single recipe
1. A "create" page that lets a user add a new recipe
   - go back to your schema/model to make sure you're including all of the required fields
   - if your schema currently requires a user, you can either
     - comment that out
     - change `required` to `false`
     - temporarily hard-code a valid user ID into the client
   - since we don't know how many ingredients there will be, give the user a single input field for ingredients and have them enter ingredients as a comma-separated list. Before you encode them in your request body, you'll have to convert the string into an array using [String.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
1. An "edit" page that has two-way bindings with input fields that match the schema, and saves changes to the recipe in the database
   - The "edit" page should be linked from the "recipe" page
1. The "edit" page should include an option to delete the entire recipe
   - What happens when we've deleted the recipe, but we're still on a page that doesn't exist? We should navigate back to the home page after we successfully delete. Check out the docs for [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate) for a simple way to navigate between routes.

### Extra challenge (optional)

The single-input solution for recipe ingredients is pretty clunky and error-prone. It would be much nicer to have a "dynamic" or changeable number of fields for that part of the page.

Here are two articles that might help you implement a solution:

[Building Dynamic Forms in React, FreeCodeCamp](https://www.freecodecamp.org/news/build-dynamic-forms-in-react/)

[Dynamically Adding Input Fields Using React.js, TestKarts](https://www.testkarts.com/blog/dynamic-input-create-delete)
