// Fetch blog posts from the server
async function fetchBlogPosts() {
    try {
      const response = await fetch('/api/blogs');  
      const blogPosts = await response.json();
  
       
      const container = document.querySelector('.container');
  
       
      container.innerHTML = '';
  
       
      blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
  
         
        const title = document.createElement('h2');
        title.textContent = post.title;   
        postDiv.appendChild(title);
  
         
        const authorDate = document.createElement('p');
        authorDate.innerHTML = `Posted by <a href="profile.html">${post.user}</a> on ${post.date}`;  
        postDiv.appendChild(authorDate);
  
        
        const body = document.createElement('p');
        body.textContent = post.body;
        postDiv.appendChild(body);
   
        const readMore = document.createElement('a');
        readMore.href = '#';   
        readMore.textContent = 'Read more';
        postDiv.appendChild(readMore);
  
        
        container.appendChild(postDiv);
      });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  }
  
   
  fetchBlogPosts();
  