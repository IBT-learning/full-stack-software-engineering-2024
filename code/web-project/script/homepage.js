const apiCall = 'https://jsonplaceholder.typicode.com/posts?userId=1'
const apiCall2 = 'https://jsonplaceholder.typicode.com/users/1'

let data = []
const fetchData = async (url) => {
 try {
    const res = await fetch (url);
    data = await res.json();
    useData(data)
  }  
  catch (error) {
    window.alert(`error: ${error}`)
  }
}

fetchData(apiCall);

const main = document.getElementById('main-container')
const userPostContainer = document.querySelector('.user-post')

let element = []
const useData = (data) => {
    data.forEach(item => {
    element +=  `
    <section id="main-container"> 
        <section class="user1">
        <div class="user1-profile">
            <div class="profile-body">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VZ-0RwKsFhDsN2O84jb_Fa-4U1h4gozvVw&s" alt="profile-picture1">
            <span>Name</span>
            <span>@username</span>
            </div>
            </div>
        <div class="user1-content">
           <div class="body">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXKzxBrv-nr-V2w6n-Hf14w-Mw-p4tD_f6GPvjOCW4CoikavWniBoh4rNfKid-VyUwH4&usqp=CAU" alt="user1-post-image">         
           <h3 class="post-title">${item.title}</h3>
           <p class="post-body">${item.body}</p>
           </div>
           <p>Posted 50mins ago | 30/09/2024</p> 
           <p><span class="material-symbols-outlined">comment</span><span>134 comments</span></p>
           <p><span class="material-symbols-outlined">favorite</span><span>230 Likes</span></p>
              </div>
              </section>              
              </section>`
         main.innerHTML = element;
    })

    data.forEach(item => {
        element = `
        <div class="user-post">
        <span class="post-heading">${item.title}</span>
        <img src="https://t4.ftcdn.net/jpg/01/66/97/25/240_F_166972516_X6XPTqu5M2U0HkJdt0KLIHE2uJ0ryT8M.jpg" alt="post-image1">
        <span class="post-text">${item.body}</span>
        <span class="timestamp">Posted 35mins ago</span>
    </div> `  
        userPostContainer.innerHTML = element;
    })
    
}


