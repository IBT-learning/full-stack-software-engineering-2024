// In a JS file, create an async function, and fetch all of the to-dos at this url: https://jsonplaceholder.typicode.com/todos?userId=1

const api = " https://jsonplaceholder.typicode.com/todos?userId=1";

const toDoList = async () => {
  const reply = await fetch(api);
  const data = await reply.json();

  // create an <li> element
  const element = document.getElementById("to-do-list");

  data.forEach((item) => {
    let wrapper = document.createElement("div");
    let listItem = document.createElement("li");
    let toggle = document.createElement("button");
    let emoji = document.createElement("span");

    // set the text as the todo text
    listItem.innerText = item.title;

    updateList(listItem, toggle, emoji, item.completed);

    // single button that toggles
    toggle.addEventListener("click", () => {
      item.completed = !item.completed;
      updateList(listItem, toggle, emoji, item.completed);
    });

    wrapper.appendChild(listItem);
    wrapper.appendChild(emoji);
    wrapper.appendChild(toggle);

    // append it to the <ul> on the page
    element.appendChild(wrapper);
  });
};

const updateList = (listItem, toggle, emoji, completed) => {
  if (completed) {
    listItem.style.color = "green";
    toggle.innerText = "Unresolved";
    emoji.innerText = "✔🟢";
  } else {
    listItem.style.color = "red";
    toggle.innerText = "Resolved";
    emoji.innerText = "❌🔴";
  }
};

toDoList();
