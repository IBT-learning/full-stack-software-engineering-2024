const userSelect = document.getElementById('choose-user');

//Populate users in the select input field
const populateUserSelect = () => {
    for (let i =1; i <= 10; i++){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `User ${i}`;
        userSelect.appendChild(option);
    }
};

//Fetch to do from api
const fetchData = async (userId) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    
    
        const data = await response.json();
        const toDoList = document.getElementById("to-do-list");
        toDoList.innerHTML='';
    
        data.forEach(todo =>{
            createToDoElement(todo);
           
        });
    }catch (error){
        console.error("There is a problem with fetch", error);
    }
};

const createToDoElement = (todo) =>{
    const toDoList = document.getElementById("to-do-list");
    const li = document.createElement('li');
    li.innerText = todo.title;
    
    //Apply classes
    li.classList.add(todo.completed ? 'complete':'uncomplete');
 
    //create button
    const toggle = document.createElement('button');
    toggle.innerText = todo.completed ? 'Uncomplete': 'Complete';
    toggle.style.marginLeft = '10px';

    //event listener for click/toggle complete or uncomplete
    toggle.addEventListener('click', ()=>{
        todo.completed = !todo.completed;
            li.classList.toggle('complete');
            li.classList.toggle('uncomplete');
            toggle.innerText = todo.completed ? 'Uncomplete' : 'Complete';
      
});



// Append the button to the list  item
li.appendChild(toggle);

//Append the list item to the to do list
toDoList.appendChild(li);

};

userSelect.addEventListener('change', () =>{
    fetchData(userSelect.value);
});

populateUserSelect();
fetchData(userSelect.value);