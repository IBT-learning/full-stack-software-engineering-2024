// Function to fetch and display to-dos

const fetchToDoList = async () => {
  try {
    const response = await fetch("/todos");
    const toDos = await response.json();

    // Select the <ul> element where to-dos will be displayed
    const toDoList = document.getElementById('to-do-list');

    // Clear any existing items in the list
    toDoList.innerHTML = "";

    // Loop through each to-do item and Create an <li> element
    toDos.forEach(toDo => {
      const listItem = document.createElement('li');

      // Set the text as the to-do text
      listItem.textContent = "To-Do";

      // If the item is completed, style it differently
      if (toDo.completed) {
        listItem.classList.add('completed');
      }

      // Append the <li> to the <ul>
      toDoList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching to-dos:', error);
  }
}

fetchToDoList();