const fetchData = async (userId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        

        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await user.json();

        const postContainer = document.querySelector(".posts");
        postContainer.innerHTML = "";

        const userInfo = document.querySelector(".user-header-info");
        userInfo.innerHTML= `<strong>${user.name}</strong> <span>@${user.username}</span>`;
        
        data.forEach(post => {
            createPostElement(post, userData);
        });
    } catch (error) {
        console.log("There is a problem with fetch", error);
    }
};

const createPostElement = (post, user) => {
    const postContainer = document.createElement("div");
    postContainer.classList.add('user-posts');

    const postHeader = document.createElement('div');
    postHeader.classList.add('posts-header');

    const userImage = document.createElement('img');
    userImage.src = "http://t0.gstatic.com/images?q=tbn:ANd9GcTYowOx0PjjKRLjSZs4RlUReiMXQztPvGfXD32iv3W-rRX0dUc&s";  // Placeholder image

    const postInfo = document.createElement('div');
    postInfo.classList.add('posts-header-info');
    postInfo.innerHTML = `<strong>${user.name}</strong> <span>@${user.username}</span>`;
    
    const userInfo = document.querySelector(".user-header-info");
    userInfo.innerHTML= `<strong>${user.name}</strong> <span>@${user.username}</span>`;
    

    const postTitle = document.createElement('h3');
    postTitle.innerText = post.title;

    const postBody = document.createElement('p');
    postBody.innerText = post.body;

    postInfo.appendChild(postTitle);
    postInfo.appendChild(postBody);
    postHeader.appendChild(userImage);
    postHeader.appendChild(postInfo);
    postContainer.appendChild(postHeader);

    document.querySelector('.posts').appendChild(postContainer);  // Corrected the typo here
}

fetchData(1);
