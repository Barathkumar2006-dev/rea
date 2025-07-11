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

document.addEventListener('click', (e) => {
  if (!menu_bar.contains(e.target) && !toggle.contains(e.target)) {
    toggle.classList.remove('active');
    menu_bar.classList.remove('active');
  }
});

