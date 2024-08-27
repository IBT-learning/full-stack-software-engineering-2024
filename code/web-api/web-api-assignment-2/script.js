const toDoList = document.getElementById("to-do-list");
const header = document.querySelector(".header");
const selectUser = document.getElementById("select-user");
const selectUserValue = selectUser.value;
const user = `https://jsonplaceholder.typicode.com/todos?userId=${selectUserValue}`;
console.log(user);

const fetchTodos = async () => {
  const res = await fetch(user);

  const toDos = await res.json();

  selectUser.addEventListener("change", () => {
    toDoList.innerHTML = "";
    // console.log(user);

    toDos.forEach((toDo) => {
      listToDos(toDo);
    });
  });
};

// const selectUser = () => {
//   const select
// }

const addHeader = () => {
  const head = document.createElement("h1");
  head.innerText = "To-do List";
  // head.classList.add("header");
  header.appendChild(head);
};
addHeader();

// const incompleteTask = (button, textContent) => {

// };

const addCompleteButton = (item, listContent, toDoMark) => {
  if (toDoMark.completed === true) {
    const completeButton = document.createElement("button");
    completeButton.textContent = "Mark as Incomplete";
    item.appendChild(completeButton);
    completeButton.classList.add("button");
    listContent.style.textDecoration = "line-through";

    completeButton.addEventListener("click", () => {
      toDoMark.completed === false;
      completeButton.textContent = "Mark as Complete";
      completeButton.classList.toggle("incomplete-button");
      listContent.style.textDecoration = "none";
    });
  }
  if (toDoMark.completed === false) {
    const completeButton = document.createElement("button");
    completeButton.textContent = "Mark as Complete";
    listContent.style.textDecoration = "none";
    completeButton.classList.add("incomplete-button");
    item.appendChild(completeButton);

    completeButton.addEventListener("click", () => {
      toDoMark.completed === true;
      completeButton.textContent = "Mark as Incomplete";
      completeButton.classList.toggle("button");
      listContent.style.textDecoration = "line-through";
    });
  }
};

const listToDos = async (toDoItem) => {
  const res = await fetch(user);

  const toDos = await res.json();
  const list = document.createElement("li");
  toDoList.appendChild(list);
  list.classList.add("to-do-item");
  const listText = document.createElement("p");
  listText.innerText = toDoItem.title;
  listText.classList.add("list-text");
  list.appendChild(listText);
  addCompleteButton(list, listText, toDoItem);

  // if (toDoItem.completed === true) {
  //   listText.style.textDecoration = "line-through";
  // }
};

fetchTodos();
