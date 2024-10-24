const dataApi = 'https://jsonplaceholder.typicode.com/todos?'
const todoList = document.getElementById('to-do-list');

// get Api data
const getUserTodo = async (url) => {
    const res = await fetch(url);
    const data = await res.json()
    todoList.innerHTML;
    createTodo(data)
}
// create list element, loop over the data array 
// and use DOM to set it on the webpage 
const createTodo = (data) => {
    data.forEach(todo => {
       const todoText = document.createElement('li');
       todoText.innerText = todo.title;
       todoList.appendChild(todoText);

       todoText.addEventListener('click', ()=> {
        if (todo.completed) {
            todoText.classList.add('completed-todo')
           } 
       })
    });
}
// call the asyn function to fetch user data
getUserTodo(dataApi);

// Extra Challenges on another file...
