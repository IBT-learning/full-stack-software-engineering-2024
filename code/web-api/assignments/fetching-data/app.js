// Get the <ul> element
const toDoList = document.getElementById("to-do-list");
const listUrl = "https://jsonplaceholder.typicode.com/todos?userId=10";

const getResponse = async () => {
  const res = await fetch(listUrl);
  //  fetches the data from the url
  const jsonResponse = await res.json();
  // converts to json

  // Loop through the todos and create <li> for each
  jsonResponse.forEach((todo) => {
    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = todo.title;

    // create check button
    const checkButton = document.createElement("button");
    checkButton.innerText = "Check";
    checkButton.classList.add("check"); // Add margin to the button
    // This appends the check button to each list item
    listItem.appendChild(checkButton);

    // Apply styling if the todo is completed
    if (todo.completed) {
      checkButton.innerText = "Checked";
      checkButton.style.backgroundColor = "green";
      checkButton.style.color = "white";
      listItem.style.textDecoration = "line-through"; // or any other style
      listItem.style.color = "green"; // optional color change for completed items
    }
    // Add event listener to toggle completion state on button click
    checkButton.addEventListener("click", () => {
      if (listItem.style.textDecoration === "line-through") {
        // If it's already marked complete, unmark it
        checkButton.innerText = "Check";
        checkButton.style.backgroundColor = "burlywood";
        checkButton.style.color = "black";
        listItem.style.textDecoration = "none";
        listItem.style.color = "black"; // Or the default text color
      } else {
        // Mark as completed
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "green";
        checkButton.innerText = "Checked";
        checkButton.style.backgroundColor = "green";
        checkButton.style.color = "white";
      }
    });
    // Append the <li> to the <ul>
    toDoList.appendChild(listItem);
  });
};
getResponse();
