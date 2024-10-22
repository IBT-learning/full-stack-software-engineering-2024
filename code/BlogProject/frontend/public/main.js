const cardContainer = document.getElementById("other-users-section");
const MainCard = document.getElementById("main-user-section");
const top_El = document.querySelector(".popular");

const api = "http://localhost:5000/api/post/getposts";

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    useData(data.data);
    useData2(data.data);
  } catch (error) {
    console.error(`error: ${error}`);
  }
};
// dynamically populate popular posts html with api data
let popular = [];
const useData2 = (posts) => {
  posts.map((post) => {
    popular += `
  <div class="popular">
      <div class="side-title">${post.title} </div>
      <div class="side-body">
        ${post.body}
       </div>
      <hr />
      </div>
    `;
    top_El.innerHTML = popular;
  });
};
// Populate the homepage html with title and body of post from the users
let element = [];
const useData = (posts) => {
  posts.map((post) => {
    element += `
    <div class="user-1"> 
            <div class="profile-header"> 
                <img src="../assets/images/profilepic.jpg" width="100px" height="100px" profile-image-1">
                  <p class="profile-name">${post.user.profilename} </p>
                    <p class="username">@${post.user.username} </p>
                     </div>
                      <hr>
                       <div class="profile-1">
                       <div class="image-1-container">
                        <img src=${post.image} alt="post-image-1">
                       </div>
                      <div class="post-content">
                     <div class="user-1-post-title">
                     ${post.title}
                    </div>
                   <div class="user-1-post-body">
                   ${post.body}
                </div>
              </div>
            </div>
        </div>
    `;
    cardContainer.innerHTML = element;
  });
  // dynamically populate main users content using the data from the server
  posts.map((post) => {
    element = `  
          <div class="image-container">
          <img src="./images/vision-plug.jpg" alt="post-image"> 
              <img src=${post.image} alt="post-image">
                </div>
                <div class="post-title">
                  <h3 class="title">${post.title} </h3>
                  <div class="post-body">
                  <p class="body">${post.body} 
                  </p>
              <button class="read-more-btn">Read more</button>
            </div>
          </div>
        `;
    MainCard.innerHTML = element;
  });
};

fetchData(api);
