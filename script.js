


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
