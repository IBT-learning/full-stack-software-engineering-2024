const yesButton = document.getElementById('yes-button')
const noButton = document.getElementById('no-button')
const htmlVotes = document.getElementById('html')
const jsVotes = document.getElementById('js')
const nameInput = document.getElementById('name-button')

yesButton.addEventListener('click', ()=> {
    jsVotes.innerText = Number(jsVotes.innerText) + 1;
})

noButton.addEventListener('click', ()=> {
    htmlVotes.innerText = Number(htmlVotes.innerText) + 1;
})

if (nameInput.value){
    
}





