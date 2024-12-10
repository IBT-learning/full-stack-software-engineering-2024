const postText = document.getElementById("post-text")
const username = document.getElementById("username")
const image = document.getElementById("prop")

const postJson = async() => {
     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzRjMzhhM2Y2ZTU2ODg1MWE1MTUwN2UiLCJpYXQiOjE3MzMwNDg1MzQsImV4cCI6MTczMzM5NDEzNH0.hPwowZDmtd0EVlzAhqmS4izU1n0p1WBNKgj0tyNePRM"
     const res = await fetch ("./public/blog.json", {
          
          headers: {
               authorization: `${token}`,
     },
     })
     const json = await res.json()

            postText.innerHTML = `<p> ${json.body} </p>`
            username.innerHTML = `<h4> ${json.id}</h4>`
            image.src = json.image
            console.log(json)
}

postJson()