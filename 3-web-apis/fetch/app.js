const content = document.getElementById ("contents")
const startUrl = "https://pokeapi.co/api/v2/pokemon?limit=5"

const jsonResponse = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos/3")
    const json = await res.json()
    console.log(json)
}
jsonResponse()

const pokemonApi = async (url) => {
    const res = await fetch (url)
    const json = await res.json()
    console.log(json.results)

    json.results.forEach((pokemon) => {
        apiImages(pokemon)
    })
}

const makeButtons = () => {
    const back = document.createElement("button")
    back.innerText = "Back"
    content.appendChild(back)
}


const apiImages = async (pokemonInfo) => {
    const res = await fetch(pokemonInfo.url)
    const pokeJson = await res.json()
    console.log(pokeJson)

    const header = document.createElement("h3")
    header.innerText = pokemonInfo.name
    content.appendChild(header)

    const images = document.createElement("img")
    images.src = pokeJson.sprites.front_default
    content.appendChild(images)
    console.log(pokeJson.sprites.front_default)
}
pokemonApi(startUrl)