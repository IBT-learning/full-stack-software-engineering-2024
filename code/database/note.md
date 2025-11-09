/ (project root)
├── app.js                  # Backend server setup - Starts server, connects DB, sets routes
├── db.js                   # Database connection - Connects to the database
├── controllers/            # API route handlers -  Contains route logic
│   └── user.js             # Example route handler for user-related logic
├── models                  # Mongoose schemas for DB
│   └── Blog.js             # Example: Blog schema
│   └── User.js             # Example: User schema
├── middleware              # Holds custom middleware functions (e.g for auth, validation)
│   └── auth.js             # Example: Authentication middleware
│   └── logger.js           # Example: Logging middleware
├── public/                 # Frontend files
│   ├── index.html          # Main webpage
│   ├── styles.css          # CSS for the webpage
│   ├── script.js           # JavaScript for dynamic interactions
│   └── images/             # Folder for images
│       └── pic.png
└── .env                    # Environment variables

-------------------------------
1. What Should Be in app.js?
    The file should contain:

    Setup for Express server with necessary configurations.
    Middleware configuration, such as express.json() to handle request bodies.
    Database connection through blogDB() for MongoDB connection.
    Router integration to connect routes (like user.js) to the app.
    Start the server by listening on the specified port (process.env.SERVER_PORT or default 4000).

2. What Should Be in db.js?
    The file should contain:

    MongoDB Connection Setup using Mongoose.
    Import dotenv/config to load environment variables.
    Define the database URL (DB_URL) from the environment.
    Create a function (blogDB) that establishes the MongoDB connection via mongoose.connect().
    Handle connection errors with a try-catch block to log any errors.
    Export:
    Export the blogDB function and mongoose so they can be used in app.js or other parts of the app.
    This modular structure helps keep your connection logic separate and easier to manage.

3. What Should Be in controllers/user.js?
    The file should contain:

    CRUD endpoints for users.
    Integration with your user schema/model (we'll create one if not already done).
    Use of express.Router() for modular routes.

4. What Should Be in models/user.js:
    Defines the structure of user data (e.g., username, email, password).
    Specifies validation rules (e.g., required fields, unique constraints).
    May include custom methods (e.g., for password hashing or comparison).
    Exports the User model to be used in controllers for CRUD operations.

    models/blog.js:
    Defines the structure of blog post data (e.g., title, body, userId).
    Links each post to a user by storing the userId (reference to the User model).
    Includes any additional fields like images, timestamps, etc.
    Exports the Blog model to be used in controllers for CRUD operations.

5. What Should Be in Authentication Middleware ( auth.js)
    Purpose: Ensures the user is authenticated before accessing certain routes.
    What it contains:
    A function that checks the incoming request for a valid token (often a JWT).
    If the token is valid, the request proceeds; if not, the server responds with an error (e.g., 401 Unauthorized).
    Example Usage: Protects routes like creating, updating, or deleting blog posts.

    

