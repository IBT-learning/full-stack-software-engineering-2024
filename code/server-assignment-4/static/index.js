// Correct API URL to fetch your local data
const api = "http://localhost:4000/data";

const toDoList = async () => {
  try {
    const reply = await fetch(api);
    if (!reply.ok) {
      throw new Error(`HTTP error! Status: ${reply.status}`);
    }

    const data = await reply.json();

    // Get the <ul> element from the DOM
    const element = document.getElementById("to-do-list");

    data.forEach((item) => {
      let wrapper = document.createElement("div");
      let listItem = document.createElement("li");
      let toggle = document.createElement("button");
      let emoji = document.createElement("span");

      // Set the text as the to-do title
      listItem.innerText = item.title;

      // Initial styling based on completion status
      updateList(listItem, toggle, emoji, item.completed);

      // Toggle the completed status when the button is clicked
      toggle.addEventListener("click", () => {
        item.completed = !item.completed;
        updateList(listItem, toggle, emoji, item.completed);
      });

      // Append elements to the wrapper div
      wrapper.appendChild(listItem);
      wrapper.appendChild(emoji);
      wrapper.appendChild(toggle);

      // Append the wrapper to the <ul>
      element.appendChild(wrapper);
    });
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
};

// Function to update list items based on completion status
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

// Call the function to fetch and display the to-do list
toDoList();
