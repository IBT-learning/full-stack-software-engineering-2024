const post = async () => {

    const res = await fetch("blog.json");
    const content = await res.json();


    const mainContainer = document.getElementById('main');

    content.forEach(item => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      postElement.innerHTML = `
        <div class="post-header">
          <img src="${item.user.profilePhoto}" alt="profile picture" class="profile-picture" />
          <p>${item.user.username}</p>
          <p>01-01-2024</p>
          <p class="timestamp">Posted at 12:00pm</p>
        </div>
        <div class="post-content">
          <p>${item.body}</p>
          <img src="${item.image}" alt="No image" id="post-image" />
        </div>
      `;

      mainContainer.appendChild(postElement);
    });
}

post();
