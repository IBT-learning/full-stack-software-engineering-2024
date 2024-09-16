document.addEventListener('DOMContentLoaded', async () => {
    //iterate  over the html document
    const toDoList = document.getElementById('to-do-list');
    //use async function to fetch the data
    async function fetchTodos() {
    //fetch the data on the json file    
            const response = await fetch('http://localhost:4000/get');
            const todos = await response.json();

            todos.forEach(todo => {
    //add an additional element            
                const li = document.createElement('li');
                li.textContent = todo.title;
    //style the elemts on the todo list
                if (todo.completed) {
                    li.style.textDecoration = 'line-through';
                }
    //add the new list of elements to the to do List
                toDoList.appendChild(li);
            });
        
    }
    //call the elements
    fetchTodos();
});