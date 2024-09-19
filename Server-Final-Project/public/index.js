// Fetch blog data from your Express server
fetch('/api/blogs')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming you want to display only the first three entries
    const blogEntries = data.slice(0, 3);

    // Function to populate a blog post container
    const populateBlogPost = (post, containerId) => {
      const container = document.getElementById(containerId);
      container.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        ${post.image ? `<img src="${post.image}" alt="Blog Image">` : ''}
      `;
    };

    // Populate each blog post container
    populateBlogPost(blogEntries[0], 'blog-post1');
    populateBlogPost(blogEntries[1], 'blog-post2');
    populateBlogPost(blogEntries[2], 'blog-post3');
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
