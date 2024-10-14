/*
Document Object Model (DOM): an object containing the structure and content of the html page
There differecnt object in an html page:
  a. document: outlines html rendered
  b. window: handles browser-specific function
  c. navigator: handles language and globalization/localization
  history: handles browser session history
*/

// Create an element
const paragraph = document.createElement("p");
paragraph.innerText = "Little Miss"; // This shows in the console not on the webpage
console.log(paragraph);

// Creating element that shows on the webpage

// 1. Create the New Element: Use document.createElement() to create the element.
const secondHeading = document.createElement("h1");
// 2. Set Content or Attributes: Use properties like innerText, innerHTML, or setAttribute() to add content or set attributes.
secondHeading.textContent = "Document Object Model";
secondHeading.setAttribute("class", "created-heading"); //this is optional
// 3. Add the Element to the DOM: Use appendChild() or append() to add the new element to an existing element in the document.
document.body.appendChild(secondHeading);

// Change content of an element
function changeText() {
  const textChange = document.getElementById("heading");
  textChange.innerText = "My Enemy";
}
changeText();

// Change style of an html by adding a class that is from the sylesheet
const colorChange = document.querySelector("#heading");
colorChange.classList.add("red-text");
console.log(document.children);
console.log(window);

// Challenge: Add a new topic to the end of the ul
/*
  1. Create the element
  2. Set Content
  3. Set Attribute
  4. Select Container
  5. Append to DOM
*/
const newTopic = document.createElement("li");
newTopic.innerText = "React";
// newTopic.setAttribute("class", "topic"); //This is to give an element a new class that was not deckared before
newTopic.classList.add("topic"); //To add an existing class to an element
const topicWrapper = document.querySelector("ul");
topicWrapper.appendChild(newTopic);

// Challenge: Select all elements with class topic and give a new class
const topicList = document.querySelectorAll(".topic");
console.log(topicList);

console.log(topicList[0]);

for (item of topicList) {
  item.classList.add("pink-text");
}

topicList[1].classList.add("red-text");
