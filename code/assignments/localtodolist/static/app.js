
const getData = async () => {
  const todo = document.getElementById("to-do-list");
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=4"
  );
  const data = await response.json();
  console.log(data);

  data.forEach((item) => {
    const list = document.createElement("li");
    list.innerText = item.title;

    if (item.completed === false) {
      list.style.color = "blue";
    }
    todo.appendChild(list);
  });
};
getData();
