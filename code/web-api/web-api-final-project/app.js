document.addEventListener('DOMContentLoaded', async () => {
    const blogPostsContainer = document.getElementById('blog-posts');
    
    try {
        // Fetch the blog posts from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // Loop through the posts and create HTML elements for each one
        posts.slice(0, 6).forEach(async post => {  // Limiting to the first 6 posts
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            // Fetch the user data for each post
            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            const user = await userResponse.json();

            postElement.innerHTML = `
                <div class="post-img">
                    <img src="couple.webp" alt="Blog Image">
                </div>
                <p class="blog-title">${post.title}</p>
                <p class="blog-summary">${post.body}</p>
                <div class="blog-profile">
                    <div class="blog-author">
                        <div class="author-pic">
                            <img src="auser-1.jpg" alt="Author">
                        </div>
                        <p>${user.name}</p>
                    </div>
                    <p>Some Date Here</p>
                </div>
            `;

            blogPostsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching the blog posts:', error);
        blogPostsContainer.innerHTML = `<p>Sorry, there was an error loading the posts. Please try again later.</p>`;
    }
});
