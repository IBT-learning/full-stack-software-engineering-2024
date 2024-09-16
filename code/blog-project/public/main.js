const api1 = "http://localhost:4000/main/userposts";
const api2 = "http://localhost:4000/main/userposts/new";

const cardContainer = document.getElementById("other-users-section");
const MainCard = document.getElementById("main-user-section");
const userPostsUrl = document.querySelector(".endpoint-1");
const newPostUrl = document.querySelector(".endpoint-2");
const top_El = document.getElementById("other-content");

// event handler fire the endpoint to fetch data from the server
userPostsUrl.addEventListener("click", () => {
  console.log("clicked");
  fetchData(api1);
});

// event handler fires to the endpoint to fetch data from the server
newPostUrl.addEventListener("click", () => {
  console.log("clicked");
  fetchData2(api2);
});

// fetch data from api1
const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    useData(data);
  } catch (error) {
    console.error(`${error}:data not found`);
  }
};
// fectch data from api2
const fetchData2 = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    useData2(data);
  } catch (error) {
    console.error(`${error}:data not found`);
  }
};

// dynamically populate popular posts html with api data
let popularPosts = [];
const useData2 = (data) => {
  data.map((item) => {
    popularPosts += `
        <div class="side-title">${item.title} </div>
        <div class="side-body">
          ${item.body}
        </div>
        <hr />
      `;
    top_El.innerHTML = popularPosts;
  });
};

// Populate the homepage html with title and body of post from the users
let element = [];
const useData = (data) => {
  data.forEach((item) => {
    element += `
    <div class="user-1"> 
            <div class="profile-header"> 
                <img src="images/profilepic.jpg" width="100px" height="100px" profile-image-1">
                  <p class="profile-name">Colins Andre</p>
                    <p class="username">@Cloins</p>
                     </div>
                      <hr>
                       <div class="profile-1">
                       <div class="image-1-container">
                        <img src=${item.image} alt="post-image-1">
                       </div>
                      <div class="post-content">
                     <div class="user-1-post-title">
                     ${item.title}
                    </div>
                   <div class="user-1-post-body">
                   ${item.body}
                </div>
              </div>
            </div>
        </div>
    `;
    cardContainer.innerHTML = element;
  });
  // dynamically populate main users content using the data from the server
  data.forEach((item) => {
    element = `  
          <div class="image-container">
          <img src="./images/vision-plug.jpg" alt="post-image"> 
              <img src=${item.image} alt="post-image">
                </div>
                <div class="post-title">
                  <h3 class="title">${item.title} </h3>
                  <div class="post-body">
                  <p class="body">${item.body} 
                  </p>
              <button class="read-more-btn">Read more</button>
            </div>
          </div>
        `;
    MainCard.innerHTML = element;
  });
};
