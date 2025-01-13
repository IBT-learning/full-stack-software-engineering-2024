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
  // Create container for each blog post and add a class list
  const postContainer = document.createElement("div");
  postContainer.classList.add("post");

  // Create the title element
  const titleElement = document.createElement("h3");
  titleElement.innerText = blogPost.title;

  // Create the element for the main blog-content
  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  // Create the body element that you will add to the main content element
  const bodyElement = document.createElement("p");
  bodyElement.innerText = blogPost.body;
  bodyElement.classList.add("content-p");

  // Create the image element for the content
  const blogImage = document.createElement("img");
  blogImage.src = `http://localhost:4000/${blogPost.blogImg}`;
  blogImage.alt = "Blog Image";
  blogImage.classList.add("content-img");

  // Place the body and the image inside the contentElement
  contentElement.appendChild(bodyElement);
  contentElement.appendChild(blogImage);

  // Create a div for the user information
  const userElement = document.createElement("div");
  userElement.classList.add("poster");

  // Create an image element for the user icon
  const userIcon = document.createElement("img");
  userIcon.classList.add("icon");
  userIcon.src = `http://localhost:4000/${blogPost.posterIcon}`;
  userIcon.alt = "Poster Icon";

  // Create a span element fpr the username
  const userName = document.createElement("span");
  userName.innerText = blogPost.blogWriter;

  // Place both the user icon and the user image in the user-info div
  userElement.appendChild(userName);
  userElement.appendChild(userIcon);

  // Place all the post divs inside the individual postContainer
  postContainer.appendChild(titleElement);
  postContainer.appendChild(userElement);
  postContainer.appendChild(bodyElement);
  // postContainer.appendChild(blogImage);

  // Create a larger container for all the blog containers
  document.querySelector(".blog-post").appendChild(postContainer);
};

fetchPosts();
