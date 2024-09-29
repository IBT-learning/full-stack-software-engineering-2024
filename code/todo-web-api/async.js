let web = "https://jsonplaceholder.typicode.com/todos?userId="

async function getUserId() {
    const form = document.createElement("form")
    const input = document.createElement("input")
    form.id = "todo"
    input.id = "numberInput"
    input.type = "number"
    input.min = 1
    input.max = 10
    input.name = "userid"
    input.required = true

    form.appendChild(input)
    document.body.appendChild(form)

    input.addEventListener('input', async () => {
        let userId = input.value
        await todo(userId)
    })
    
}
async function todo(user) {
    api = web + user

    const list = await fetch(api);
    const data = await list.json();
    const orderlist = document.querySelector("#to-do-list")

    orderlist.innerHTML = ""

    data.forEach(todo => {

        const li = document.createElement("li");
        const button = document.createElement("button");
 
        li.innerText = todo.title
        li.classList.add(todo.completed ? "completed" : "not-completed");
        button.innerText = todo.completed ? "Done✅! click to Undo"  : "Undo❌! click to Done"

       

        button.addEventListener('click', () => {
           if (todo.completed) {
            li.classList.toggle("completed");
            li.classList.toggle("not-completed");
            todo.completed = !todo.completed;
            button.innerText = todo.completed ? "Done✅! click to Undo"  : "Undo❌! click to Done"
           }
           else {
            li.classList.toggle("not-completed");
            li.classList.toggle("completed");
            todo.completed = !todo.completed;
            button.innerText = todo.completed ? "Done✅! click to Undo"  : "Undo❌! click to Done"
           }

        })

        li.appendChild(button);
        orderlist.appendChild(li);


    })};


getUserId()



// data.then((res) => {
//     console.log(res);
//     res.forEach((item) => {
//         console.log(item.title);
//     });