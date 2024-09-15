const api = "http://localhost:4000/post-data";

let postElements = document.querySelectorAll(".post-content");
let titleElements = document.querySelectorAll("#post-title");
let userNameElements = document.querySelectorAll("#user-name");

const post = async () => {
  try {
    const reply = await fetch(api);
    if (!reply.ok) {
      throw new Error("Failed to fetch posts data");
    }

    const data = await reply.json();
    console.log("Fetched posts data:", data);

    data.forEach((postData, index) => {
      if (index >= postElements.length) return;

      postElements[index].innerText = postData.body;
      titleElements[index].innerText = postData.title;

      const user = postData.user;
      if (user) {
        userNameElements[index].innerText = `${user.name}`;
      } else {
        userNameElements[index].innerText = "User data missing";
      }
    });
  } catch (error) {
    console.error("Error fetching posts data:", error);
  }
};

post();
