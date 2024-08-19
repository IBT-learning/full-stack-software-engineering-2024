const api = "https://jsonplaceholder.typicode.com/posts";

let postElements = document.querySelectorAll(".post-content");
let titleElements = document.querySelectorAll("#post-title");
let userNameElements = document.querySelectorAll("#user-name");

const fetchUser = async (userId) => {
  const userApi = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const reply = await fetch(userApi);
  return await reply.json();
};

const post = async () => {
  try {
    const reply = await fetch(api);
    const data = await reply.json();

    // For each post, populate with the API details
    postElements.forEach(async (element, id) => {
      const postData = data[id];
      element.innerText = postData.body;
      titleElements[id].innerText = postData.title;
      const userData = await fetchUser(postData.userId);
      userNameElements[id].innerText = `${userData.name} ${userData.username}`;
    });

    // Console log any errors
  } catch (error) {
    console.error(error);
  }
};

post();
