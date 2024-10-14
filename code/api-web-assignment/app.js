//  Web API Assignment #1: Dark mode, Light mode

// selecting the elements
const header=document.getElementById('banner')
const darkButton=document.getElementById('dark-btn')
const LightButton=document.getElementById('light-btn')


// Adding an event listener to dark mode
darkButton.addEventListener('click',()=>{
    header.innerText='Dark Mode'
    header.style.color='white'
    document.body.style.backgroundColor='black'
})

LightButton.addEventListener('click',()=>{
    header.innerText='Light Mode'
    header.style.color='black'
    document.body.style.backgroundColor='white'
})