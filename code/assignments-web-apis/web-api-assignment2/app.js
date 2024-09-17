const listContainer = document.getElementById("to-do-list");

const getUserToDoItems = () => {
  const selectElement = document.getElementById("user-id");
  selectElement.addEventListener("change", () => {
    selectedUrl = selectElement.value;
    listContainer.innerHTML = "";
    getToDoItems(selectedUrl);
  });
};
const getToDoItems = async (url) => {
  //this function makes the api call, resolves it and calls a function that displays to screen with a forEach()
  const data1 = await fetch(url);
  const data2 = await data1.json();
  console.log(data2);
  data2.forEach((todoIteminData2) => {
    showListItems(todoIteminData2);
  });
};

const showListItems = (object) => {
  const listItem = document.createElement("li");
  const textNode = document.createTextNode(object.title);
  const completeButton = document.createElement("button");

  completeButton.innerText = "Check/Uncheck";

  completeButton.addEventListener("click", () => {
    listItem.classList.toggle("complete");
  });

  listItem.appendChild(completeButton);
  listItem.appendChild(textNode);

  listContainer.appendChild(listItem);

  // This if block below will add style based on the default 'complete' status
  if (object.completed) {
    listItem.classList.add("complete");
  }
};

getUserToDoItems();
