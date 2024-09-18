# Server Assignment #3: Getting started with Postman

In this assignment, you will make a skeleton of an express server, and hit all of your endpoints with Postman.

### Step 1: Create a Postman account

Go to [postman.com](https://www.postman.com/) to create a new free account. Once your account is active, you can use the web client to create a workspace. The workspace won't be shared, so you can name it whatever you like.

In the web client, you can try making requests to remote APIs! Click the "new" button in the upper left of the screen to start a new request. It will open a tab where you can configure your request. Add a url, and select the request method from the dropdown directly to the left of the URL field

1. Make a GET request to `https://jsonplaceholder.typicode.com/users`. You should get a JSON response with many "user" objects
1. Make a GET request to `https://jsonplaceholder.typicode.com/users/5`. You should get a JSON response with a single "user" object (specifically for Chelsey Dietrich)
1. Make a POST request to `https://jsonplaceholder.typicode.com/users`. You should get a response like this: `{ id: 11 }`

### Step 2: Start using a client

The web client works for remote APIs, but because it is on the web it cannot read your `localhost`. To test local endpoints, you will need to install a client.

You have two options for clients you may use. You only _need_ one of them, but they do not compete with each other and if you would like to download them both to try out and see which you prefer, that won't hurt anything! You can even save endpoints to your remote workspace and they will sync between each of your clients.

1. There is a Desktop client you can download from [Postman](https://www.postman.com/downloads/). Just download, install, and then log in to the application.
1. You can use the [VSCode Postman Extension](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode) to run Postman right in your editor. Once you install it, there will be a new icon on the bar at the left of your VSCode window. Open it and follow instructions to log in, and then click "New HTTP Request" to start.

Whichever option you choose, open it up and try making requests to the same `jsonplaceholder` endpoints from Step 1.

### Step 3: Make an express server

Set up a new express server, following the same steps from [server assignment #2](./server-assignment-2.md)

You will make 4 new endpoints, but the endpoints are just placeholders. They don't need to actually do anything other than send a string response.

- Make endpoints for the HTTP methods: GET, POST, PUT, and DELETE
- Each endpoint can have the same url, with the path argument `"/"`
- Each endpoint should give a response that indicates which endpoint the user has reached. (For example "You called the POST endpoint")

Now, make sure you can reach your endpoints via your Postman client!
