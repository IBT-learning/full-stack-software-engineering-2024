fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(response => response.json())
  .then(data => {
    console.log(data); // 
    updateThreeBlogPosts(data); // Call a function to update the DOM with the fetched data
  })
  .catch(error => console.error('Error fetching data:', error));


  function updateThreeBlogPosts(posts) {
    const postElements = [
      document.getElementById('blog-post1'),
      document.getElementById('blog-post2'),
      document.getElementById('blog-post3')
    ];
  
    for (let i = 0; i < 3; i++) {
      if (postElements[i]) {
        postElements[i].innerHTML = `
          <h2>${posts[i].title}</h2>
          <p>${posts[i].body}</p>
        `;
      }
    }
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(data => updateThreeBlogPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  });
  
  