const userId = 1;

const getUserPosts = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const posts = await response.json();

  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await userData.json();
  const usernameElement = document.querySelectorAll(".username");
  usernameElement.forEach((el) => (el.textContent = user.username));

  const userPosts = document.getElementById("user-posts");
  userPosts.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("article");
    postElement.classList.add("post");
    postElement.innerHTML = `
                <div class="user-icon">
                    <img src="images/user1-icon.jpg" alt="User Icon">
                </div>
                <div class="post-content">
                    <div class="post-header">
                        <span class="username">${user.username}</span>
                        <span class="timestamp">2024-06-21</span>  
                        <span class="edit-icon">&#9998;</span>
                    </div>
                    <p>${post.body}</p>
                </div>
            `;
    userPosts.appendChild(postElement);
  });
};
window.addEventListener("load", getUserPosts);