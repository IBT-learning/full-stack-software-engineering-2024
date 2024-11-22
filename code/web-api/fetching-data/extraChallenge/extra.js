const inPut = document.getElementById("inpt")

const getData = async(userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    const output = await res.json()
    console.log(output);
 
 
 const list = document.getElementById("to-do-list");
 list.innerHTML = "";
 const checkBoxes = [];
 const todoCompleted = []
 
 
 output.forEach(toDo => {
     const element = document.createElement("li");
     element.innerText = toDo.title;
     
     //creating a token for each todo
     const checkBox = document.createElement("input")
     checkBox.type = "checkbox"
     checkBoxes.push(checkBox)
     
     checkBox.addEventListener("change", () => {
     if (checkBox.checked){
         element.style.textDecoration = "line-through";
         element.style.color = "red";
     }
     else{
         element.style.textDecoration = "none";
         element.style.color = "";
     }
     
     })
 
     list.appendChild(element);
     element.appendChild(checkBox);
      
 });
    
    const button = document.getElementById("reset")

    button.addEventListener("click", () =>{
        document.body.classList.toggle("reset")
        

        if(document.body.classList.contains("reset")){
            todoCompleted.length = 0; 
            checkBoxes.forEach(checkBox => {
                todoCompleted.push(checkBox.checked);

                checkBox.checked = false; // resets checkbox
                checkBox.parentElement.style.cssText = ""; 
                
            })
            
            button.innerText = "Restore" 
        }
        
        else {
            // Restore the previous state
            checkBoxes.forEach((checkBox, index) => {
                checkBox.checked = todoCompleted[index] || false; // restores previously checked state
                checkBox.parentElement.style.textDecoration = checkBox.checked ? "line-through" : "none"; // restores style
                checkBox.parentElement.style.color = checkBox.checked ? "red" : ""; // restores color                
            });

            button.innerText = "Reset";
        }
    })

    
    inPut.addEventListener("change", () => {
        const userId = inPut.value;
        getData(userId)  
    })
    
 }
 
 getData(1);

// Extra challenges (optional)
// Check off more items
// Can you add a token (a button, icon, small image, etc) to each to-do line that listens for click events, and styles that item as complete when clicked? (Note that we have no way of making this change permanent, and it should reset when you refresh the page.)

// If you are really itching for a big challenge, you could also try creating a way to "uncomplete" an item, or reset that one that has already been marked as complete. An even bigger challenge would be to do both actions with a single button that toggles a class!

// Change users
// Can you add an input field (maybe a <select> with <options>, or maybe a <input type="number"> with the min and max set to 1-10) that we can use to change which user's to-do items we want to see? There are ten users in the database, and each one has a different set of 20 items. Changing this input field would trigger a new fetch to get a new set of items.

// If you do this, try listening for a change event rather than adding a submit button.

// Refreshers
// Try styling the page so it looks nice! Keep your CSS muscles flexed!
// Change users
// Can you add an input field (maybe a <select> with <options>, or maybe a <input type="number"> with the min and max set to 1-10) that we can use to change which user's to-do items we want to see? There are ten users in the database, and each one has a different set of 20 items. Changing this input field would trigger a new fetch to get a new set of items.

// If you do this, try listening for a change event rather than adding a submit button.

// Refreshers
// Try styling the page so it looks nice! Keep your CSS muscles flexed!
 