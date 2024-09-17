const toDoList = document.getElementById("to-do-list")
const listed = document.getElementById("lists")
const userIdSelect = document.querySelector("select")

userIdSelect.addEventListener("change", () => {
    toDo(userIdSelect.value)
})

const toDo =  async () => {
    const jsonTodo = await fetch ( `https://jsonplaceholder.typicode.com/todos?userId=${userIdSelect.value}`)
    const json = await jsonTodo.json()
    console.log(json)

    toDoList.innerHTML = ''
    json.forEach((users) => {
        const list = document.createElement("li")
        list.textContent = users.title
        toDoList.appendChild(list)

        const button = document.createElement("button")
        button.classList.add("btn")
        list.appendChild(button)
        button.addEventListener("click", () => {
            list.style.backgroundColor = "#299617"
            button.textContent = "Completed"
        })
        

        if(users.completed === true){
            list.classList.add("complete")
            button.textContent = "Completed"
            list.style.color = "white"
            
        }else{
            list.classList.add("incomplete")
            button.textContent = "Mark as complete"
            list.style.color = "white"
        }
    })

}


toDo(userIdSelect.value)