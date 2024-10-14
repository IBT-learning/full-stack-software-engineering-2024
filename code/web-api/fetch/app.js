// 1- Basic Fetch Example

// fetch("https://jsonplaceholder.typicode.com/todos")
// The fetch function sends a request to the API which returns a promise.

// .then((res) => res.json())
// The first .then() takes the response (res) and calls res.json() to convert the response from a promise into JSON format.

// .then((json) => console.log(json));
// The second .then() receives the JSON data and logs it to the console.

// 2- Handling Promises using the async function

const getResponseJson = async () => {
  //   async means that this function is asynchronous—it will run in the background without blocking other code.

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  // fetch() sends a request to the server

  console.log(res);
  // console.log(res) logs the response to the console

  const json = await res.json();
  // await makes the code pause at fetch() until the promise is resolved.
  // The res.json() method is awaited as well, meaning the code waits for the JSON conversion to finish.

  console.log(json);
  // The json data is then logged to the console.
};
getResponseJson();

// 3- Pokemon Example
const contents = document.getElementById("contents");
const startUrl = "https://pokeapi.co/api/v2/pokemon?limit=5";

const getPokemon = async (url) => {
  const res = await fetch(url); // Get data from the API and store in variable called res
  const data = await res.json(); // Convert the response to JSON and store in variable called data
  contents.innerHTML = ""; // Clear the previous content
  makeButtons(data); // Create navigation buttons (if needed)
  data.results.forEach((monster) => {
    // Loop through each Pokémon
    showPokemon(monster); // Show each Pokémon
  });
};

// Explanation for above code
// 1. The getPokemon function fetches Pokémon data from the API (pokeapi.co).
// 2. It clears previous content, creates navigation buttons (Back/Next), and loops through the list of Pokémon.
// 3. For each Pokémon, it calls showPokemon(monster), which fetches detailed information about the Pokémon and displays it (name and image) on the webpage.
const makeButtons = (data) => {
  if (data.previous) {
    // If there’s a previous page
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
      getPokemon(data.previous); // Fetch previous page
    });
    contents.appendChild(backButton); // Add the button to the page
  }
  if (data.next) {
    // If there’s a next page
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", () => {
      getPokemon(data.next); // Fetch next page
    });
    contents.appendChild(nextButton); // Add the button to the page
  }
};

const showPokemon = async (pokemon) => {
  const res = await fetch(pokemon.url);
  const data = await res.json();

  const header = document.createElement("h3");
  header.innerText = pokemon.name;
  contents.appendChild(header);

  const sprite = document.createElement("img");
  sprite.src = data.sprites.front_default;
  contents.appendChild(sprite);
};

getPokemon(startUrl);
