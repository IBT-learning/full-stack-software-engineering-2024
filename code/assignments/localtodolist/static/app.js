
const getData = async () => {
  const todo = document.getElementById("to-do-list");
  const response = await fetch("http://localhost:4001/todo");
  const data = await response.json();
  todo.innerHTML = "<h1>To Do List</h1>";

  data.forEach((item) => {
    const list = document.createElement("li");
    list.innerText = item.title;

    if (item.completed === false) {
      list.style.color = "blue";
    }
    todo.appendChild(list);
  });
};
window.addEventListener("load", getData);
