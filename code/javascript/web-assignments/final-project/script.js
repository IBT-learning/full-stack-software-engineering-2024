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
    console.log(data);

    postElements.forEach(async (element, id) => {
      if (id < data.length && titleElements[id] && userNameElements[id]) {
        const postData = data[id];
        element.innerText = postData.body;
        titleElements[id].innerText = postData.title;

        // Fetch user data based on the post's userId
        const userData = await fetchUser(postData.userId);

        // Set the user name or username in the userNameElements
        userNameElements[
          id
        ].innerText = `${userData.name} ${userData.username}`;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

post();
