const fetchData = async () => {
    try {
        // Fetch all posts from the API
        const response = await fetch(`users.json`);
        const allPosts = await response.json();

        // Shuffle and select 10 random posts
        const selectedPosts = allPosts.sort(() => 0.5 - Math.random()).slice(0, 10);

        const postContainer = document.querySelector(".posts");
        postContainer.innerHTML = "";

        // Loop through the selected posts and fetch user data for each post
        for (let user of selectedPosts){
            createUserPosts(user);
        }
    } catch (error) {
        console.log("There is a problem with fetch", error);
    }
};

const createUserPosts = (user) => {
    for (let post of user.blogPosts){
        const postContainer = document.createElement("div");
        postContainer.classList.add('user-posts');
    
        const postHeader = document.createElement('div');
        postHeader.classList.add('posts-header');
    
        const userImage = document.createElement('img');
        userImage.src = "http://t0.gstatic.com/images?q=tbn:ANd9GcTYowOx0PjjKRLjSZs4RlUReiMXQztPvGfXD32iv3W-rRX0dUc&s";  // Placeholder image
    
        const postInfo = document.createElement('div');
        postInfo.classList.add('posts-header-info');
        postInfo.innerHTML = `<strong>${user.name}</strong> <span>@${user.username}</span>`;
    
        const postTitle = document.createElement('h3');
        postTitle.innerText = post.title;
    
        const postBody = document.createElement('p');
        postBody.innerText = post.content;
    
        postInfo.appendChild(postTitle);
        postInfo.appendChild(postBody);
        postHeader.appendChild(userImage);
        postHeader.appendChild(postInfo);
        postContainer.appendChild(postHeader);
    
        document.querySelector('.posts').appendChild(postContainer);
    }
    
};

// Call fetchData to load the posts when the page loads
fetchData();
