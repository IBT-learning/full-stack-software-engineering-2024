const todoList = async () => {
    const res = await fetch("http://localhost:4000/todo")
    const toDo = await res.json();
    const toDoList = document.getElementById("to-do-list")
  
  
  
    toDo.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item.title
        toDoList.appendChild(li)
  
          const button = document.createElement("button")
          button.textContent = '☑️';
          button.style.marginLeft = "10px"
  
          button.addEventListener('click', ()=> {
              li.classList.toggle('completed')
          })
          li.appendChild(button)
    });
  
  }
  todoList()