// const postParagragh = document.querySelector(".content p");
// const postTitle = document.querySelector(".post > h3");
// const username = document.querySelector(".username")

// console.log(postParagragh.innerText);

const fetchPosts = async () => {
  const res = await fetch("http://localhost:4000/blogs");
  const data = await res.json();

  data.forEach((post) => {
    showPosts(post);
    // console.log (showPosts(post));
  });
};

const showPosts = (blogPost) => {
  const postContainer = document.createElement("div");
  postContainer.classList.add("post-container");

  const titleElement = document.createElement("h3");
  titleElement.innerText = blogPost.title;

  const bodyElement = document.createElement("p");
  bodyElement.innerText = blogPost.body;

  const userElement = document.createElement("div");
  userElement.classList.add("poster");
  
  const userName = document.createElement("span");
  userName.innerText = blogPost.blogWriter;
  
  const userIcon = document.createElement("img");
  userElement.classList.add("icon");
  userIcon.src = `http://localhost:4000/${blogPost.posterIcon}`;
  userIcon.alt = "Poster Icon"
  
  userElement.appendChild(userName)
  userElement.appendChild(userIcon)
  
  const blogImage = document.createElement("img");
  userElement.classList.add("content");
  blogImage.src = `http://localhost:4000/${blogPost.blogImg}`;
  blogImage.alt = "Blog Image"
  
  postContainer.appendChild(titleElement);
  postContainer.appendChild(bodyElement);
  postContainer.appendChild(userElement);

  document.querySelector(".content").appendChild(postContainer);

  // postTitle.innerText = blogPost.title;

  // postParagragh.innerText = blogPost.body;

  // username.innerText = blogPost.blogWriter

  // username.innerText = data.username

  //   console.log(username.innerText);
  //   console.log(postParagragh.innerText);
};

fetchPosts();
