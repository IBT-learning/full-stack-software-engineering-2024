// Fetch all blog posts from JSONPlaceholder API
async function fetchBlogPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        // Select the blog posts container
        const blogContainer = document.getElementById('blog-posts');

        // Limit the number of posts displayed (optional)
        const maxPosts = 10;
        const limitedPosts = posts.slice(0, maxPosts);

        // Loop through the posts and create HTML elements
        limitedPosts.forEach(async (post) => {
            // Fetch the user associated with the post
            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            const user = await userResponse.json();

            // Create blog post elements
            const postElement = document.createElement('article');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <div class="post-header">
                    <img src="images/profilepic.jpg" alt="User Image" class="user-icon">
                    <h3>Let's Tour the World</h3>
                    <span>${new Date().toLocaleDateString()}</span>
                </div>
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `;

            // Append the post to the container
            blogContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Call the function to fetch and display posts on page load
window.onload = fetchBlogPosts;
