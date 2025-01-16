document.addEventListener("DOMContentLoaded", () => {
    // Load posts for the home page
    if (document.getElementById("recent-posts")) {
        loadRecentPosts();
    }

    // Load user-specific posts for the profile page
    if (document.getElementById("user-posts")) {
        loadUserPosts(1); // Example with userId = 1
    }

    // Load user profile data if available
    if (document.querySelector(".bio")) {
        loadUserProfile(1); // Example with userId = 1
    }
});

function loadRecentPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") // Fetch the first 5 posts
        .then(response => response.json())
        .then(posts => {
            const postSection = document.getElementById("recent-posts");
            posts.forEach(post => {
                const postElement = document.createElement("article");
                postElement.classList.add("post");

                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                postSection.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
}

function loadUserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const userPostsSection = document.getElementById("user-posts");
            posts.forEach(post => {
                const postElement = document.createElement("article");
                postElement.classList.add("post");

                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                userPostsSection.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching user posts:", error));
}

function loadUserProfile(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const bioSection = document.querySelector(".bio");
            bioSection.querySelector("h2").textContent = user.name;
            bioSection.querySelector("p").textContent = `${user.name} is exploring the world one destination at a time...`;
        })
        .catch(error => console.error("Error fetching user data:", error));
}
