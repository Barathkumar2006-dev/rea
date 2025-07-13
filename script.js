//scroll issue solving 

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


// nav bar scripting 
const toggle = document.querySelector('.toggle')

const menu_bar = document.querySelector('.nav_menu')

toggle.addEventListener('click',()=>{
  toggle.classList.toggle('active')
  menu_bar.classList.toggle('active')
})

menu_bar.addEventListener('click',()=>{
  menu_bar.classList.toggle('active')
  menu_bar.classList.toggle('active')
})