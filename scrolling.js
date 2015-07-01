$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		  });
		}); 

window.onload = animatePic;

function animatePic() {
	var element = document.getElementById('face');
	element.style.transition = "opacity 2s ease-in-out .5s";
	element.style.opacity = 0;
}

function iconHover(id) {
	id.style.transition();
}

function hoverEffect(id, accent) {
	var parent = id.parentNode;
	var grandParent = parent.parentNode;
	id.style.transition = "box-shadow .4s, border .4s";
	grandParent.style.transition = "background .8s ease-out .8s";
	grandParent.style.background = id.style.borderColor;
	id.style.boxShadow = "0 0 0 10px" + " " + id.style.borderColor;
	id.style.border = "10px solid" + " " + accent;
	grandParent.getElementsByTagName("p")[0].style.visibility = "visible";
}

function regularEffect(id, color) {
	var parent = id.parentNode;
	var grandParent = parent.parentNode;
	id.style.borderColor = color;
	id.style.boxShadow = "none";
	grandParent.style.transition = "background 0.1s"
	grandParent.style.backgroundColor = "transparent";
	grandParent.getElementsByTagName("p")[0].style.visibility = "hidden";
}