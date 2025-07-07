/// nav bar css styling 

const toggle = document.querySelector('.toggle')

const menu_bar = document.querySelector('.nav_menu')

toggle.addEventListener('click',()=>{
  toggle.classList.toggle('active')
  menu_bar.classList.toggle('active')
})