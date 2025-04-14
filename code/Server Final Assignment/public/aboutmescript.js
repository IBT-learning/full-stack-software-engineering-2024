document.addEventListener("DOMContentLoaded", async () =>{
    
    const path = window.location.pathname;
    const username = path.substring(1); //Remove "/"

    try {
        const response = await fetch(`/api/${username}`);
        if(!response.ok){
            throw new Error ("User not found");
        }

        const user = await response.json();
        console.log(user); 

        if (!user.username) {
            throw new Error("Username not defined for this user");
        }
    
        const postContainer = document.querySelector(".posts");
        postContainer.innerHTML = "";
        
        const userInfo = document.querySelector(".user-header-info");
        userInfo.innerHTML= `<strong>${user.name}</strong> <span>@${user.username}</span>`;

        const userLocation = document.querySelector(".location");
        userLocation.innerHTML = `${user.city}, ${user.country}`;

        const profilePicture = document.querySelector(".profile-picture");
        profilePicture.src = user.profilePicture;

        user.blogPosts.forEach(blogPost =>{
            createPostElement(user, blogPost);
        });
    } catch (error) {
        console.log("There is a problem with fetch", error);
    }
});

const createPostElement = (user, post) => {
    const postContainer = document.createElement("div");
    postContainer.classList.add('user-posts');

    const postHeader = document.createElement('div');
    postHeader.classList.add('posts-header');

    const userImage = document.createElement('img');
    userImage.src = user.profilePicture;

    const postInfo = document.createElement('div');
    postInfo.classList.add('posts-header-info');
    postInfo.innerHTML = `<strong>${user.name}</strong> <span>@${user.username}</span>`;
    
    const userInfo = document.querySelector(".user-header-info");
    userInfo.innerHTML= `<strong>${user.name}</strong> <span>@${user.username}</span>`;
    

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
};

