# Web APIs Final Project: Blog data

We are going to revisit our blog sites from the HTML&CSS unit. Remember that the first phase of this project was simply an HTML prototype, and you are free to make any changes to it that you like at any time.

I leave it up to you how to organize your code. You may keep working on the same files you already have, or you may make new copies of your HTML and CSS files in order to preserve both versions. If you make new copies, I request that you make your first git commit _before making any additional changes_. That way when I grade your project, it will be easy for me to see what you have added as part of this assignment.

## Replace blog posts with API data

> Note: If you took the time to write actual blog posts for your blog, don't worry! We're going to replace it for now, but there will be opportunities to bring that data back for future versions of this blog site.

In this app, we will replace the text of the blog posts with lorem ipsum from the JSONPlaceholder API.

### Requirements

When I load the Home page, at least one API call should automatically happen, which fetches data from one or more of these endpoints:

- ` https://jsonplaceholder.typicode.com/posts` (this endpoint gets all 100 posts from the database)
- `https://jsonplaceholder.typicode.com/posts/1` (change the number at the end to get a single blog post by its id)

The fetched blog posts should populate the HTML elements containing the blog post text. (You can leave the timestamps and usernames as they are for now, as well as any images you may have included.)

It is up to you whether you want to hard-code a fixed number of blog entries for specific blog posts, or use a loop to generate an entry for each blog post.

### Extra challenges (optional)

#### Fill in user data

For each blog post, also fetch the associated user's data and fill in their name or username (or both.)

This is the endpoint for getting a single user by id: `https://jsonplaceholder.typicode.com/users/1`

#### Update profile page

The user data in this database doesn't have a bio or profile, or images, so you will leave those parts of the user profile page alone. However, it is possible to get all of the blog posts associated with a single user via this endpoint:

- `https://jsonplaceholder.typicode.com/posts?userId=1` (for users 1-10)

Can you replace the blog posts on the profile page with all of the posts that are actually associated with a single user?

### Refresher

The posts from JSONPlaceholder may be much shorter than the lorem ipsum that you used when you made your blog prototype. In terms of the visual style, how does it look with short posts? If you choose to update the CSS, make sure you like the way blog posts look when they are short _and_ when they are long!
