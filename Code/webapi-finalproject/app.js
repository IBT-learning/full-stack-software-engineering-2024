// Fetch all blog posts from JSONPlaceholder API
async function fetchBlogPosts() {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NzkzNmY0MmI3MDJlNTBlZjFkZTVhMzIiLCJpYXQiOjE3Mzc5Njc3OTIsImV4cCI6MTczODA1NDE5Mn0.s8KtWVInCPzkpVhY0S_Rp2UrWhOA8YYI3y7OaneIspY';

        const response = await fetch('http://localhost:4000/post', {
            headers: {
                authorization: `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await response.json();

        // Select the blog posts container
        const blogContainer = document.getElementById('blog-posts');

        // Limit the number of posts displayed (optional)
        const maxPosts = 10;
        const limitedPosts = posts.slice(0, maxPosts);

        // Loop through the posts and create HTML elements
        for (const post of limitedPosts) {
            // Fetch the user associated with the post
            const userResponse = await fetch("http://localhost:4000/user/login/67936f42b702e50ef1de5a32", {
                headers: {
                    authorization: `Bearer ${token}`
                },
            });

            if (!userResponse.ok) {
                throw new Error('Failed to fetch user');
            }

            const user = await userResponse.json();

            // Create blog post elements
            const postElement = document.createElement('article');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <div class="post-header">
                    <img src="images/profilepic.jpg" alt="User Image" class="user-icon">
                    <h3>${user.username}</h3>
                    <span>${new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <h4>${post.title}</h4>
                <p>${post.content}</p>
            `;

            // Append the post to the container
            blogContainer.appendChild(postElement);
        }
    } catch (err) {
        console.error('Error fetching blog posts:', err);
    }
}

fetchBlogPosts();