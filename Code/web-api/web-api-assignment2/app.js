async function fetchTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
      const todos = await response.json();

      const todoList = document.getElementById('to-do-list');

      todos.forEach(todo => {
          const listItem = document.createElement('li');
          listItem.textContent = todo.title;

          if (todo.completed) {
              listItem.style.textDecoration = 'line-through';
              listItem.style.color = 'red';
          }

          todoList.appendChild(listItem);
      });
  }

fetchTodos()
