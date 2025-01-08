const toDoList = document.getElementById("to-do-list");

const getToDoList = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
    const data = await res.json();
    // console.log(data);

    //loop through todo item and create li element
    data.forEach((todo) => {
        const liElement = document.createElement("li");
        liElement.textContent = todo.title;
        toDoList.appendChild(liElement);  
    
    //If todo is completed, style it accordingly
    if (todo.completed) {
       liElement.style.textDecoration = "line-through";
       liElement.style.color = "red";
    }

    //Check off more items on the list
    //Use a button element to checkoff items
    const button = document.createElement('button');
    button.textContent = 'Complete'; 

    button.addEventListener('click', () => {
        liElement.style.textDecoration = 'line-through'; // Add line-through style
        liElement.style.color = 'gray'; // Change the color to gray
    });
    //append button to li element
    liElement.appendChild(button);
    });
};
getToDoList();

