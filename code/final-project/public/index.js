const postText = document.getElementById("post-text")
const username = document.getElementById("username")
const image = document.getElementById("prop")
const postJson = async() => {
     const res = await fetch ("./blog.json")

     const json = await res.json()

            postText.innerHTML = `<p> ${json.body} </p>`
            username.innerHTML = `<h4> ${json.id}</h4>`
            image.src = json.image
}

postJson()