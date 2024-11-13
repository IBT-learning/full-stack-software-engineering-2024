const apiUrl = 'http://localhost:4000/newtodo'

const todoList = document.getElementById('to-do-list')
const userId = document.getElementById('user-Id')

// The first api call to get all users todos from the server
// return a promise object stored in the data variable
const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    let data = await response.json()
    useData(data)
    data = [];
  }  
  catch (error) {
    window.alert(`error loading page: ${error}`)
  }
}

// New api call to get each user todos by their Id
// return a promise object which is stored in the newData variable
const fetchNewData = async (url, Id) => {
  try {
    const res = await fetch (`${url}/search?userid=${Id}`)
    let newData = await  res.json()
    useData(newData)
    newData = [];
  } 
  catch (error) {
    window.alert(`error loading Page: ${error}`)
  }
}

// the promise object return value is used to iterate all users Todos
// function useData use the data from the two apis as a parameter
function useData(userData) {
  userData.map(todo => {
  const userTodos =  createElement(todo)
  return userTodos
})
}

// add an Event listener on select Element that listen for change in userId value
// when user select an option, the data for that user is fetched
// when user select all users option, the todo for all users is fetched
userId.addEventListener('change', ()=> {
  const user = userId.value
  console.log(user)
  if(user < 6) {
    fetchNewData(apiUrl, user)
  } 
  if (user == 6) {
    fetchData(apiUrl)
  }
})

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


