const apiUrl = 'https://jsonplaceholder.typicode.com/todos?'

const todoList = document.getElementById('to-do-list')
const userId = document.getElementById('user-Id')

// api call to get all users data
// variable data is the return Promise
let data = [];
const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    data = await response.json()
    useData(data)
  }  
  catch (error) {
    window.alert(`error loading page: ${error}`)
  }
}

// New api call to get user data by their Id
// NewData variable is the return Promise
// overwrites previous data when user select each user Id
const fetchNewData = async (url, Id) => {
  try {
    const res = await fetch (`${url}userId=${Id}`)
    const newData = await  res.json()
    data = newData
    useData(newData)
  } 
  catch (error) {
    window.alert(`error loading Page: ${error}`)
  }
}

// Event listener on select Element
// when user select each userId, the Todo for each user is called
// when user select all userId, the todo for all users is called
userId.addEventListener('change', ()=> {
    selectedUser = userId.value
    eachUserTodo()
    if(selectedUser == 11) {
    allUserTodo()
    }
})

// the Promise return value is used to iterate all users Todos
// function useData uses the data from the two api call
function useData(userData) {
    userData.forEach(todo => {
    createElement(todo)
  })
}

// creates a list element to be dynamically displayed on the webpage
function createElement(todo) {
    const todoText = document.createElement('li');
    const button = document.createElement('button');
    todoText.innerText = todo.title
    button.textContent = 'mark as completed'
    button.classList.add('undo-button')
    todoList.appendChild(todoText)
    todoText.appendChild(button)

// show button if user want to mark the todo as checked
    todoText.addEventListener('mouseenter', ()=> {
        button.style.opacity = 1
    })

// on click mark the todo as checked or unchecked
    todoText.addEventListener('click', ()=> {
        const buttonChecked = todoText.classList.toggle('completed-todo')
        if (buttonChecked) {
            button.textContent = 'undo';
        } else {
           button.textContent = 'mark as completed'
        }
    }) 

// hide the button when mouse leave the todo text area
    button.addEventListener('mouseout', () => {
        setTimeout(() => {
            button.style.opacity = 0
        }, 1000)
    })
}

// call both api fetch function for all users and each userId
const allUserTodo = () => {fetchData(apiUrl)}
const eachUserTodo = () => {fetchNewData(apiUrl, selectedUser)}
