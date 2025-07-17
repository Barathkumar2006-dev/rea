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

const menubar = document.querySelector('.menubar') // Make sure this exists in your HTML

function toggleMenu() {
  nav_bar.classList.toggle('active')
  nav_menu.classList.toggle('active')
}

function closeMenu() {
  nav_bar.classList.remove('active')
  nav_menu.classList.remove('active')
}

nav_bar.addEventListener('click', toggleMenu)
menubar?.addEventListener('click', toggleMenu) // Optional chaining to avoid error if null

// Close on scroll
window.addEventListener('scroll', closeMenu)