const fetchPosts = async () => {
  const res = await fetch("http://localhost:4000/4C/posts/", {
    headers: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Nzg4ZTIzOTUyZGI0YmJjZDRiMzU1N2YiLCJ1c2VybmFtZSI6Ik1hdGlsZGEgTmphdSIsImlhdCI6MTczNzAyNDc1MCwiZXhwIjoxODIzNDI0NzUwfQ.MsACEe3y8rjrABaLM09zELD9MA2xujI3KcxowwxkdXw",
    },
  })
  const posts = await res.json()

  console.log(posts)

  const allPosts = document.getElementById("posts")
  posts.forEach((post) => {
    const postElement = document.createElement("div")
    postElement.innerHTML = `<h3>${post.id}</h3>
    <p>${post.body}</p>`
    allPosts.appendChild(postElement)
  })
}

fetchPosts()
