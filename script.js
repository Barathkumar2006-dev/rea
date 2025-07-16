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

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle');
  const navMenu = document.querySelector('.nav_menu');
  const heroSection = document.querySelector('.main_text');
  const serviceSection = document.querySelector('#service');

  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });

  window.addEventListener('scroll', function () {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    const serviceTop = serviceSection.getBoundingClientRect().top;

    if (heroBottom < 0 && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      console.log('Sidebar auto-closed after scroll');
    }
  });
});
