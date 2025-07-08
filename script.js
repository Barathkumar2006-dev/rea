const nav_bar = document.querySelector('.toggle')

const nav_menu = document.querySelector('.nav_menu')

nav_bar.addEventListener('click',()=>{
  nav_bar.classList.toggle('active')
  nav_menu.classList.toggle('active')
})

document.querySelectorAll('.nav_menu a').forEach(link => {
  link.addEventListener('click', () => {
    // Close menu after click
    document.querySelector('.nav_menu').classList.remove('active');
    document.querySelector('.toggle').classList.remove('active');

    // Scroll position fix
    setTimeout(() => {
      window.scrollTo(window.scrollX, window.scrollY); // lock current scroll
    }, 1);
  });
});



