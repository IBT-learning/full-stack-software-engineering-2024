//Make a to-do list with data from a remote API
// Note: all of the to-do items in this database are lorem ipsum, their content does not matter for this exercise

// Create an HTML file, with <ul id=to-do-list></ul> in the body.
// In a JS file, create an async function, and fetch all of the to-dos at this url: https://jsonplaceholder.typicode.com/todos?userId=1
// note: there are 10 users in this database, you could choose any userId between 1 and 10 for the url
// For each to-do item in the data
// create an <li> element
// set the text as the todo text
// append it to the <ul> on the page
// If the item has a completed status of true, change the style in some way to make it look done. You could use text-decoration: line-through, or change the color, or anything you like that makes it look different.
// note: you could do this by adding a class from a linked css sheet, but I don't think it's necessary!
const getData = async() => {
   const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=4")
   const output = await res.json()
   console.log(output);


const list = document.getElementById("to-do-list");

output.forEach(toDo => {
    const element = document.createElement("li");
    element.innerText = toDo.title;

    if (toDo.completed){
        element.style.textDecoration = "line-through";
        element.style.color = "red";
    }

    else{
        element.style.textDecoration = "none";
        element.style.color = "";
    }
    list.appendChild(element);
});

}
getData();

