const fetchPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/7")
    const post = await res.json()

    /*
    - select the html element where i want my fetched post to go to
    - get the content of the post out, which is in its body property
    - add it as the selected html element's text
    */
   
   const wanjiruPost = document.getElementById("fetched-post")
   wanjiruPost.innerText = post.body   //DOES IT MEAN THAT SETTING THE INNERTEXT FROM THE FETCHED DATA TAKES PRECEDENCE OVER THE TEXT I SET INITIALY IN MY HTML---COZ MY SELECTED ELEMENT STILL HAS CONTENT IN THE HTML, BUT IT REPLACED IT WITH THE ONE FROM THE FETCHED POST?
}

fetchPost()

const postUserName = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const userName = await res.json()

    const wanjiruUsername = document.getElementById("user-name")
    wanjiruUsername.innerText = userName.username   //SAME QUESTION AS THE ONE FROM MY FIRST FETCH
}

postUserName()

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
    const posts = await res.json()
    
    const updatePost = document.getElementsByClassName("post")
    
    
    posts.forEach(postsArrayElement => {
        updatePost.innerText = postsArrayElement.body
    });
}

// const container = document.getElementById("myposts")
// const innerContainer = document.getElementsByClassName("innerdiv")
// let i   //index of every object in the posts array
// for (i = 0; i < posts.length; i++) {
//     let postElement = posts[i];
//     updatePosts.innerText = postElement.body 
// }
fetchPosts()