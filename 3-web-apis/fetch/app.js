// fetch returns a Promise object
// we can get the value out using resolvers...

// fetch("https://jsonplaceholder.typicode.com/todos/5")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// ... or handle the response with an async function
const getResponseJson = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  console.log(res);
  const json = await res.json();
  console.log(json);
};
// getResponseJson();

/* 
    ? Show all pokemon!
*/

const contents = document.getElementById("contents");
const startUrl = "https://pokeapi.co/api/v2/pokemon?limit=5";

const getPokemon = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  contents.innerHTML = "";
  makeButtons(data);
  data.results.forEach((monster) => {
    showPokemon(monster);
  });
};

const makeButtons = (data) => {
  if (data.previous) {
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
      getPokemon(data.previous);
    });
    contents.appendChild(backButton);
  }
  if (data.next) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", () => {
      getPokemon(data.next);
    });
    contents.appendChild(nextButton);
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
