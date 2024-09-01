const sidebar = document.querySelector('.sidebar')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
menu.addEventListener('click', ()=>{
    sidebar.style.display = 'block'
    close.style.opacity = 1
})
close.addEventListener('click', ()=> {
    sidebar.style.display = 'none'
    close.style.opacity = 0
})