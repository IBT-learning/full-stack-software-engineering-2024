document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.pathname;

    if (url.endsWith('index.html')) {
        
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then(response => response.json())
            .then(posts => {
            
                posts.forEach((post, index) => {
                    const postElement = document.getElementById(`post-${index + 1}`);
                    if (postElement) {
                        
                        postElement.querySelector('h2').textContent = post.title;
                        postElement.querySelector('p#content-' + (index + 1)).textContent = post.body;
                      
                    }
                });
            })
            .catch(error => console.error('Error fetching posts for index:', error));

    } else if (url.endsWith('profile.html')) {
       
        const userId = 1; 

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                
                posts.forEach((post, index) => {
                    const postElement = document.getElementById(`profile-post-${index + 1}`);
                    if (postElement) {
                         
                        postElement.querySelector('h2').textContent = post.title;
                        postElement.querySelector('p#profile-content-' + (index + 1)).textContent = post.body;
                         
                    }
                });
            })
            .catch(error => console.error('Error fetching posts for profile:', error));
    }
});
