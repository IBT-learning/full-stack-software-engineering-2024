const posts = document.querySelectorAll(".post-text");
const usernames = document.querySelectorAll(".user-name");
const nameOfUser = document.createElement("small");
const userPosts = document.querySelector("#profile-post-container");

const getLoremPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonOutput = await res.json();
  //since JsonOutput returns an array and a forEach() acts on nodelist returned by document.querySelectorAll()
  getLoremUserIds();
  posts.forEach((post, index) => {
    post.textContent = "";
    post.append(jsonOutput[index].body);
  });
};

getLoremPosts();

const getLoremUserIds = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonOutput2 = await res.json();
  console.log(jsonOutput2);
  usernames.forEach((username, index) => {
    username.textContent = "";
    username.append(
      jsonOutput2[index].username,
      " ",
      "(",
      jsonOutput2[index].name,
      ")"
    );
  });
};

const getSingleUserData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const jsonOutput3 = await res.json();
  //   console.log(jsonOutput3);
  userPosts.textContent = "";
  jsonOutput3.forEach((postEntry) => {
    const postElements = `
      <li class="post">
        <img src="pexels.jpg" alt="User Icon" class="user-icon" />
        <small class="post-date">2024-02-20</small>
        <p class="post-text profile-post-text">${postEntry.body}</p>
      </li>
    `;

    userPosts.insertAdjacentHTML("beforeend", postElements);
  });
};

getSingleUserData();
