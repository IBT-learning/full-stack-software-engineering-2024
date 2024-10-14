//  Web API Assignment #1: Dark mode, Light mode - Extra challenge

const banner=document.getElementById('banner')
const switchButton=document.getElementById('switch-btn')
console.log(switchButton)


// adding the event listener for both light mode and dark mode
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if (banner.textContent=='Light Mode'){
        banner.textContent='Dark Mode'
        switchButton.innerText='Light Mode'
    } else{
        banner.textContent='Light Mode'
        switchButton.innerText='Dark Mode'
    }
    
    
})

// refresher
document.body.style.textAlign='center'
document.body.style.margin=0
document.body.style.padding='15em 0'
banner.style.fontFamily='Verdana'
switchButton.style.fontSize='1.5rem'
switchButton.style.padding='0.5rem'