//fetching data via API call

const postsContainer = document.getElementById("posts");
const jsonUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";

// Function to fetch blog posts
const getBlogPosts = async() => {
  const res = await fetch(jsonUrl);
  const posts = await res.json();

  // Loop over the posts and populate the HTML
  posts.forEach((post, index) => {
    // Find the correct HTML post container
    const postElement = document.getElementById(`post${index + 1}`);
      if (postElement) {
      // Populate the text content with the post body
        const postContent = postElement.querySelector("p");
        postContent.textContent = post.body;

       // Optionally fetch the user data and populate the user's name
        fetchUserData(post.userId, postElement);
      }
    });    
  }
  
// Extra challenge
// Fetch user data and populate the username
const fetchUserData = async(userId, postElement) => {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userResponse.json();
      
  const userElement = postElement.querySelector('.user');
   if (userElement) {
      userElement.textContent = user.username;
  }    
}

// Automatically fetch the blog posts when the page loads
getBlogPosts();
