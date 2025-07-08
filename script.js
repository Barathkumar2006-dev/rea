const nav_bar = document.querySelector('.toggle')

const nav_menu = document.querySelector('.nav_menu')

nav_bar.addEventListener('click',()=>{
  nav_bar.classList.toggle('active')
  nav_menu.classList.toggle('active')
})

document.querySelectorAll('.nav_menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Stop default anchor behavior
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Smooth scroll manually
    targetSection?.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu if open
    document.querySelector('.nav_menu').classList.remove('active');
    document.querySelector('.toggle').classList.remove('active');
  });
});
