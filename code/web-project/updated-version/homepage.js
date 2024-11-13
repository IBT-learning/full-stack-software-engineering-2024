const apiCall = 'https://jsonplaceholder.typicode.com/posts?userId=1'
const apiCall2 = 'https://jsonplaceholder.typicode.com/users/1'

// fetch data from api 
const fetchData = async (url) => {
 try {
    const res = await fetch (url);
     const data = await res.json();
    useData(data)
  }
  catch (error) {
    window.alert(`error: ${error}`)
  }
}
// Invoke the fetchData function 
fetchData(apiCall)
const cardContainer = document.getElementById('other-users-section')
const MainCard = document.getElementById('main-user-section')

// Populate the homepage html with title and body of post from the users
let element = []
const useData = (data) => {
    data.forEach(item => {
    element +=  `
    <div class="user-1"> 
            <div class="profile-header"> 
                <img src="images/profilepic.jpg" width="100px" height="100px" profile-image-1">
                  <p class="profile-name">Colins Andre</p>
                    <p class="username">@Cloins</p>
                     </div>
                      <hr>
                       <div class="profile-1">
                       <div class="image-1-container">
                        <img src="images/vision-plug.jpg" alt="post-image-1">
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
    `
        cardContainer.innerHTML = element;
    })

    data.forEach(item => {
        element = `  
                <div class="image-container">
                  <img src="images/basiciggy.jpg" alt="post-image">
                   <img src="images/rohi-bernard-codillo.jpg" alt="post-image">
                     </div>
                      <div class="post-title">
                       <h3 class="title">${item.title} </h3>
                        <div class="post-body">
                        <p class="body">${item.body} 
                       </p>
                    <button class="read-more-btn">Read more</button>
                  </div>
                </div>
        `  
        MainCard.innerHTML = element;
    })
}



