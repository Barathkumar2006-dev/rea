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
  const mainTextSection = document.querySelector('.main_text');

  // Toggle menu on hamburger click
  toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('active'); // assume 'active' class shows the sidebar
  });

  // Auto-close when scrolling past the hero section
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(mainTextSection);
});

