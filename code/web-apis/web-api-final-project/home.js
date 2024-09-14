
const post = async () => {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const content = await res.json();
    
    
    const mainContainer = document.getElementById('main');
    
    content.forEach(item => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      
      postElement.innerHTML = `
        <div class="post-header">
          <img src="" alt="profile picture" class="profile-picture" />
          <p>Username:  ${item.userId}</p>
          <p>Date: 01-01-2024</p>
          <p class="timestamp">Posted at 12:00pm</p>
        </div>
        <div class="post-content">
          <p>${item.body}</p>
          <img src="https://picsum.photos/600/400" alt="No image" id="post-image" />
        </div>
      `;
      
      mainContainer.appendChild(postElement);
    });
}

post();
console.log("good");