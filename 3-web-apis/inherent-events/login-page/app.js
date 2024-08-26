const button = document.getElementById("submit")
const output = document.getElementById("output")

const db = [
    {email: "dburrow@uprighted.com", password: "abc123"},
    {email: "santa@northpole.com", password: "stnick"},
    {email: "bunny@easter.com", password: "iloveeggs"}
]

button.addEventListener("click", (e) => {
    e.preventDefault()
    const email = e.target.form[0].value
    const password= e.target.form[1].value

   const currentUser =  db.filter((user) => user.email === email)

   if(currentUser.length == 0) {
       output.innerText = "user not found"
   }else {
       if (currentUser[0].password === password){
           e.target.form.innerHTML = ""
           output.innerText = "User authenticated"
       }else {
            output.innerText = "incorrect password"
       }
   }
})