const nav_bar = document.querySelector('.toggle')

const nav_menu = document.querySelector('.nav_menu')

nav_bar.addEventListener('click',()=>{
  nav_bar.classList.toggle('active')
  nav_menu.classList.toggle('active')
})


menubar.addEventListener('click',()=>{
  nav_bar.classList.toggle('active')
  nav_menu.classList.toggle('active')
})
// Disable scroll restoration so the browser doesn't jump to previous scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

