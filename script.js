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


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});


document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');

    if (targetId === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    }

    hidebar(); // close the sidebar after navigation
  });
});



