const webpost = "https://jsonplaceholder.typicode.com/posts"
const webuser = "https://jsonplaceholder.typicode.com/users"
const pro = "https://jsonplaceholder.typicode.com/posts?userId=1"

async function name() {

    const postFetch = await fetch(webpost)
    const data = await postFetch.json()

    const userFetch = await fetch(webuser)
    const userData = await userFetch.json()

    const profileFetch = await fetch(pro)
    const profileData = await profileFetch.json()

    console.log(userData);
    

    const contents = document.querySelectorAll(".content")
    const title = document.querySelectorAll(".title")

    console.log(data);
    

    if (document.title === "Homepage") {
        const poster = document.querySelectorAll(".username")
        for (let i = 0, j = 0; i < contents.length; i++) {
            if (i === 0) {
            poster[i].innerHTML = `<p>username:${userData[i].username}</p> <p>name:${userData[i].name}</p>`
            title[i].textContent = data[j].title
            contents[i].textContent = data[j].body
            } else if (i === 1) {
                j = 10
                poster[i].innerHTML = `<p>username:${userData[i].username}</p> <p>name:${userData[i].name}</p>`
                title[i].textContent = data[j].title
                contents[i].textContent = data[j].body
            } else {
                j = j + 9
                poster[i].innerHTML = `<p>username:${userData[i].username}</p> <p>name:${userData[i].name}</p>`
                title[i].textContent = data[j].title
                contents[i].textContent = data[j].body
            }
        }
    } else  if (document.title === "Profile") {
        for (let i = 0; i < contents.length; i++) {
            title[i].textContent = profileData[i].title
            contents[i].textContent = profileData[i].body
        }
    }
}
  

name()