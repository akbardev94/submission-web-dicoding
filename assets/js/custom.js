//Responsive Bars
const menuToggle = document.querySelector('.menu-toggle input');
const navToggle = document.querySelector('nav ul')  

menuToggle.addEventListener('click', function() {
  navToggle.classList.toggle('menu')
});

// Sidebar About
function showNav() {
  document.getElementById('about').style.width = "20rem";
}

window.addEventListener('click', function(e){   
if (!document.getElementById('about').contains(e.target) && !document.getElementById('navLink').contains(e.target)){

  document.getElementById('about').style.display = "none";
}
});

function closeNav() {
  document.getElementById("about").style.width = "0";
}