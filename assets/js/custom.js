// Smooth Scroll
$(document).ready(function(){
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("body").animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
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

// Testimony
