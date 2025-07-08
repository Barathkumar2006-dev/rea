const nav_bar = document.querySelector('.toggle')

const nav_menu = document.querySelector('.nav_menu')

nav_bar.addEventListener('click',()=>{
  nav_bar.classList.toggle('active')
  nav_menu.classList.toggle('active')
})

