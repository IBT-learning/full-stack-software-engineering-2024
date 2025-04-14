

const fetchPost1 = async () => {
    const res = await fetch("http://localhost:4000/blogroutes/myjson/1")
    const post = await res.json()

    /*
    - select the html element where i want my fetched post to go to
    - get the content of the post out, which is in its body property
    - add it as the selected html element's text
    */
   
   const thembilePost = document.getElementById("1")
   thembilePost.innerText = post.body
}


const fetchPost2 = async () => {
    const res = await fetch("http://localhost:4000/blogroutes/myjson/2")
    const post = await res.json()

    const wanjiruPost = document.getElementById("2")
    wanjiruPost.innerText = post.body 
}


const fetchPost4 = async () => {
    const res = await fetch("http://localhost:4000/blogroutes/myjson/4")
    const post = await res.json()

    const ifunanyaPost = document.getElementById("4")
    ifunanyaPost.innerText = post.body 
}

fetchPost1()
fetchPost2()
fetchPost4()

