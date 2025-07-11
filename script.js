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


// Close menu when any nav link is clicked
document.querySelectorAll('.nav_menu li a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu_bar.classList.remove('active');
  });
});
