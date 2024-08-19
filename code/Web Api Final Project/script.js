
const fetchData = async (userId) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const data = await response.json();
        const postBody = document.getElementById("post-body");
        postBody.innerHTML="";
        
        const postTitle = document.getElementById("post-title");
        postTitle.innerHTML='';

    
        
        data.forEach(post =>{
            createPostElement(post);
        });
    }catch(error){
        console.log("there is a problem with fetch", error);
    }
};

const createPostElement = (post) =>{
    const postBody = document.getElementById("post-body");
    const p = document.createElement('p');
    p.innerText = post.body;

    const postTitle = document.getElementById("post-title");
    const h3 = document.createElement('h3');
    h3.innerText = post.title;


    postBody.appendChild(p);
    postTitle.appendChild(h3);

}

fetchData(1);