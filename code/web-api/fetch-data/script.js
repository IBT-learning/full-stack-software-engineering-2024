async function fetchTodos(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const todos = await response.json();
        const todoList = document.getElementById('to-do-list');
        todoList.innerHTML = ''; // Clear existing to-do items

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;

            if (todo.completed) {
                li.classList.add('completed');
            }

            // Optional: Add a button to mark as complete/incomplete
            const button = document.createElement('button');
            button.textContent = todo.completed ? 'Uncomplete' : 'Complete';
            button.classList.add('complete-btn');
            if (todo.completed) {
                button.classList.add('completed');
            }
            button.addEventListener('click', () => {
                li.classList.toggle('completed');
                button.classList.toggle('completed');
                button.textContent = li.classList.contains('completed') ? 'Uncomplete' : 'Complete';
            });

            li.appendChild(button);
            todoList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching the to-do items:', error);
    }
}

// Fetch initial to-dos for user 1
fetchTodos(1);

// Listen for changes to the user select dropdown
document.getElementById('userSelect').addEventListener('change', function() {
    const userId = this.value;
    fetchTodos(userId);
});
