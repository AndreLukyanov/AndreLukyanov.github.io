$(document).ready(function(){

	var jQueryhamburger = jQuery(".hamburger");
      jQueryhamburger.on("click", function(e) {
      jQueryhamburger.toggleClass("is-active");
    });

	jQuery('.hiro').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		speed: 3000
	});

	jQuery('.partners').slick({
		dots: false,
		arrows: true,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 3000,
		responsive: [
    {
      breakpoint: 781,
      settings: {
      	slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 561,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
	});

	function toggleClassMenu() {
		myMenu.classList.add("menu__animatable"); 
		if(!myMenu.classList.contains("visible")) {   
			myMenu.classList.add("visible");
		} else {
			myMenu.classList.remove("visible");   
		} 
	}

	function OnTransitionEnd() {
		myMenu.classList.remove("menu__animatable");
	}

	var myMenu = document.querySelector(".navigation");
	var oppMenu = document.querySelector(".hamburger");
	myMenu.addEventListener("transitionend", OnTransitionEnd, false);
	oppMenu.addEventListener("click", toggleClassMenu, false);
});