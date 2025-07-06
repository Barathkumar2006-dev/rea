// Prevent scroll restoration when navigating away
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



// Close sidebar after clicking nav link and prevent jump
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      hidebar(); // your custom function to close sidebar
    }
  });
});


function showbar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
  document.querySelector(".main_bar").style.zIndex = "1";

}

function hidebar(){
   const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
   document.getElementById(".main_bar").style.zIndex = "1000";
}
