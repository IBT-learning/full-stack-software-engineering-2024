/*
    ? Document Object Model (DOM)
    * an object containing the structure and content of the html
*/
console.log(document.children)


/*
    * document: outlines the html rendered
    * window: handles browser-specific functions
    * navigator: handles language and globalization / loalization
    * history: handles browser session history
*/

console.log(window)
console.log(navigator)
console.log(history)

//setTimeout(() => history.back(), 2000 )

// ! Create an element and add it to the DOM

// 1. use .createElement() method to create new element object

const header = document.createElement("h1")

// 2. use .textContent property (or others) to add content to element
header.textContent = "Document Object Model Lesson"
header.innerHTML = "Document <span>Object</span> Model Lesson"; // displays raw html
//header.innerText = "Document <span>Object</span> Model Lesson"; // renders them as text
console.log(header)

// 3. append the element to its parent element

document.body.appendChild(header)

// ! Interacting with elements already on the page

/*  
    ? Accessing Elements
    Elements can be accessed in different ways
    Different kinds of selectors (all methods we call on the query selector)
        * getElementById -> HTMLElement
        * getElementsByClassName -> HTMLCollection
            * Iterable like arrays (you can loop over them)
            * do not have array methods
        * getElementsByTagName -> HTMLCollection // You wouldn't need this
        * querySelector -> HTMLElement
        * querySelectorAll -> NodeList

*/

// goal: add a class to the span in the header
// first step, select the element

const span = document.querySelector("span") // querySelector takes any valid CSS selector

console.log(span)

// next, make whatever change you are trying to make
span.classList.add("gray")

/* goal: add a new topic to the end of the ul

    steps:
    * create the topic
    * give it content
    * select the ul
    * append the topic to the ul
    
*/

const newTopic = document.createElement("li")
newTopic.textContent = "DOM"
newTopic.classList.add("topic")

const topicList = document.getElementById("topic-list")

topicList.appendChild(newTopic)

// goal: select all of the topics and give them a new class
const topicWrapper = document.querySelectorAll(".topic")
//const topicWrapper = document.getElementsByClassName("topic")
console.log(topicWrapper)

for (item of topicWrapper){
     item.classList.add("purple")
}


// goal: select the fancy id, add new styles to it

const fancyTopic = document.getElementById("fancy")
fancyTopic.style.color = "blue"
fancyTopic.style.backgroundColor = "#eee"
console.log(fancyTopic.style)
































