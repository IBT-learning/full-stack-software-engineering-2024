const postParagragh = document.querySelector(".blogpost .post .content p");
const postTitle = document.querySelector(".post > h3");
const username = document.querySelector(".username")

// console.log(postParagragh.innerText);

const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const data = await res.json();

  data.forEach((post) => {
    showPosts(post);
    // console.log (showPosts(post));
    
  });
};

const showPosts = async (blogPost) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const data = await res.json();
  postTitle.innerText = blogPost.title;

  postParagragh.innerText = blogPost.body;

  username.innerText = data.username
  
  
//   console.log(username.innerText);
//   console.log(postParagragh.innerText);
};

fetchPosts();
