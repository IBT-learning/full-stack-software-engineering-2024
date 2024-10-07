const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=7")   //fetch returns a promise, so await waits for the promise to resolve/for the request to complete in order to return a response--- hence returns an http response object
    const json = await response.json()  //the json() method passed to the http response object, with the variable name response, also returns a promise so the await waits for the promise to be resolved and parsed as json
    

/*
    - select the unordered list in the html body
    - create a list element, which is the unordered list's child
    - set the todo text for the list element
    - append it to the unordered list
    - repeat till the entire list is added/appended to the unoredered list---requires a function
*/

const unorderedList = document.getElementById("to-do-list")

/*
    WHAT THIS FUNCTION IS DOING
    - takes an argument which is an element in the array, which is an object
    - creates a list item
    - gets the title of the object out, which is the todo, and adds it as the created list's innertext
    - adds the title to the list item text
    - appends the list item to the unordered list
*/

const getToDoTitles = (jsonElement) => {
    const orderedList = document.createElement("li")
    orderedList.innerText = jsonElement.title
    unorderedList.appendChild(orderedList)

    if (jsonElement.completed === true) {
        orderedList.style.color = "red"
    }
}

/*
- my parsed json is an array
- i want to loop over every element in the array, which is an object
- on every object, i want to get the titles out, which are the todos
*/

json.forEach(getToDoTitles);

unorderedList.appendChild(document.createElement("hr")) //for distinction with the alternative method


// OR

json.forEach((jsonArrayElement) => {
    const orderedList = document.createElement("li")
    orderedList.innerText = jsonArrayElement.title
    unorderedList.appendChild(orderedList)

    if (jsonArrayElement.completed === true) {
        orderedList.style.textDecoration = "line-through"
    }
});
    
}  

fetchTodos()

