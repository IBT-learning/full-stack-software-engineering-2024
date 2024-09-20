/* 
    ? Document Object Model (DOM)
    * an object containing the structure and content of the html page
*/

console.log(document);

/*
 * document: outlines the html rendered
 * window: handles browser-specific functions
 * navigator: handles language and globalization / localization
 * history: handles browser session history
 */

console.log(window);
console.log(navigator.language);
console.log(history);
// setTimeout(() => history.back(), 2000);

// ! Create an element and add it to the DOM

// 1. use .createElement() method to create new element object

const header = document.createElement("h1");

// 2. use .textContent property (or others) to add content to element

// header.textContent = "Document Object Model Lesson";
// header.innerText = "Document <span>Object</span> Model Lesson"; // displays raw HTML without rendering it
header.innerHTML = "Document <span>Object</span> Model Lesson"; // renders the HTML

console.log(header);

// 3. append the element to its parent element

console.log(document.body);
document.body.appendChild(header);

// ! Interacting with elements already on the page

/* 
    ? Accessing Elements
    We can access elements in a BUNCH of ways
    Different kinds of selectors (all methods we call on the document)
        * getElementById -> HTMLElement
        * getElementsByClassName -> HTMLCollection
            * iterable like arrays (you can loop over them)
            * do not have array methods
        * getElementsByTagName -> HTMLCollection
        * querySelector -> HTMLElement
        * querySelectorAll -> NodeList
*/

// goal: add a class to the span in the header
// first step, select the element
const span = document.querySelector("span"); // querySelector takes any valid CSS selector as a string

// next, make whatever change you're trying to make
span.classList.add("gray");

/* 
    goal: add a new topic to the end of the ul

    steps:
    * create the topic
    * give it content
    * select the ul
    * append the topic to the ul

*/

const newTopic = document.createElement("li");
newTopic.textContent = "DOM";
newTopic.classList.add("topic");

const topicWrapper = document.getElementById("topic-list");

topicWrapper.appendChild(newTopic);
// topicWrapper.append(newTopic); // this also works but is less safe, because it can add strings, etc

// goal: select all of the topics and give them a new class

// const topicList = document.getElementsByTagName("li"); // this is weird, don't do it
const topicList = document.querySelectorAll(".topic");
// const topicList = document.getElementsByClassName("topic");
console.log(topicList);

for (item of topicList) {
  item.classList.add("purple");
}

// goal: select the fancy id, add new styles to it

const fancyTopic = document.getElementById("fancy");
fancyTopic.style.color = "blue";
fancyTopic.style.backgroundColor = "#eee";
// fancyTopic.style.textDecoration = "line-through";
console.log(fancyTopic.style);
