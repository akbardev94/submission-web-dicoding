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

// Scroll To Top

//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}