const fetchToDos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
  const toDos = await res.json()
  console.log(toDos)
}



const toDoList = document.getElementById('to-do-list')

toDos.forEach(toDos => {
    const listItem = document.createElement('li')
    listItem.textContent = toDos.title

    if (toDos.completed) {
        listItem.classList.add('completed')
    }
    toDoList.appendChild(listItem)
});

