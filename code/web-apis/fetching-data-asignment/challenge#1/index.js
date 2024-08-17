

const todoList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=6")
  const toDo = await res.json();
  console.log(toDo);

  const toDoList = document.getElementById("to-do-list")
  
  toDo.forEach(item => {
      const li = document.createElement("li")
      li.textContent = item.title
      toDoList.appendChild(li)

      if(item.completed){
        li.classList.add('completed')

      }
  });

}
todoList()