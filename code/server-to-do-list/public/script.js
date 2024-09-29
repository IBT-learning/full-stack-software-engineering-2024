document.getElementById('add-todo').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;

    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task.');
    }
});

fetch('/todos')
    .then(response => response.json())
    .then(data => {
        
    });
