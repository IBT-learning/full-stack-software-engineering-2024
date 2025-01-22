document.addEventListener('DOMContentLoaded', () => {
    // Identify the current page
    const currentPage = window.location.pathname;
  
    // Common functionality for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      if (link.href.includes(currentPage)) {
        link.classList.add('active'); 
      }
    });
  
    // Functionality for Index Page
    if (currentPage.includes('index.html')) {
      // Example: Alert when "Read more" is clicked
      const readMoreLinks = document.querySelectorAll('.post a');
      readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault(); 
          alert('Feature coming soon!');
        });
      });
    }
  
    // Functionality for Profile Page
    if (currentPage.includes('profile.html')) {
      // Example: Greet the user dynamically
      const profileHeader = document.querySelector('.profile-header h2');
      if (profileHeader) {
        const userName = profileHeader.textContent;
        console.log(`Welcome to the profile page, ${userName}!`);
      }
  
      // Example: Toggle visibility of posts
      const recentPostsHeader = document.querySelector('.profile-content h3');
      const postsContainer = document.querySelector('.profile-content .post');
  
      if (recentPostsHeader && postsContainer) {
        recentPostsHeader.addEventListener('click', () => {
          const isVisible = postsContainer.style.display !== 'none';
          postsContainer.style.display = isVisible ? 'none' : 'block';
        });
      }
    }
  
    
  });
  