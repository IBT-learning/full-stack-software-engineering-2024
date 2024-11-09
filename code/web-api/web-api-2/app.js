// Function to fetch to-do data for a given user ID and display it
async function fetchToDos(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await response.json();
        const toDoList = document.getElementById('to-do-list');

        // Clear previous to-dos
        toDoList.innerHTML = '';

        // Populate the list with new to-dos
        todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.title;

            // Style completed items
            if (todo.completed) {
                listItem.classList.add('completed');
            }

            // Add click event to toggle completed class
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            toDoList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching to-dos:', error);
    }
}

// Initial fetch for user ID 1
fetchToDos(1);

// Add an event listener to the input to change user ID and fetch new data
document.getElementById('userId').addEventListener('change', (event) => {
    const userId = event.target.value;
    if (userId >= 1 && userId <= 10) {
        fetchToDos(userId);
    }
});
