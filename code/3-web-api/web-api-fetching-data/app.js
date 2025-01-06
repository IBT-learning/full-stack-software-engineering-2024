async function fetchTodos(userId = 1) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await response.json();

        const toDoList = document.getElementById('to-do-list');
        toDoList.innerHTML = '';  

        todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.title;

            const toggleButton = document.createElement('button');
            toggleButton.textContent = '✓';
            toggleButton.className = 'toggle-complete';

            toggleButton.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            listItem.appendChild(toggleButton);
            toDoList.appendChild(listItem);

            if (todo.completed) {
                listItem.classList.add('completed');
            }
        });
    } catch (error) {
        console.error('Error fetching to-dos:', error);
    }
}

// Event listener for user select input
document.getElementById('user-select').addEventListener('change', (event) => {
    const userId = event.target.value;
    fetchTodos(userId);
});

// Initial fetch for user 1
fetchTodos();
