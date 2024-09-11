const userIdApi = "https://jsonplaceholder.typicode.com/posts?userId=7";
const userAPI = "https://jsonplaceholder.typicode.com/users/7";

// Select HTML element (container)
const userPost = document.querySelectorAll("#post-container");

const fetchUserPosts = async () => {
  try {
    // Fetch data
    const postsApi = await fetch(userIdApi);
    // Save response to variable
    const reply = await postsApi.json();

    userPost.forEach((container, index) => {
      if (index < reply.length) {
        const post = reply[index];

        // Create the post card
        const postCard = document.createElement("div");

        // Create the post title
        const postTitle = document.createElement("h3");
        postTitle.innerText = post.title;

        // Create the post content
        const postText = document.createElement("p");
        postText.className = "content";
        postText.innerText = post.body;

        // Append elements
        postCard.appendChild(postTitle);
        postCard.appendChild(postText);
        container.appendChild(postCard);
      }
    });

    // Show any errors
  } catch (error) {
    console.error("Error fetching Posts", error);
  }
};

fetchUserPosts();

// Display User information
const userInfo = async () => {
  const userData = await fetch(userAPI);
  const reply = await userData.json();
  console.log(reply);

  // Inject name
  const name = document.querySelectorAll("#name");
  name.forEach((element) => {
    element.innerText = reply.name;
  });

  // Inject city
  const city = document.getElementById("city");
  city.innerText = reply.address.city;

  // Inject username
  const userName = document.getElementById("user-name");
  userName.innerText = reply.username;
};

userInfo();
