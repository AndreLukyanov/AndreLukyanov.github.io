jQuery(document).ready(function() {
	var jQueryhamburger = jQuery(".hamburger");
			jQueryhamburger.on("click", function(e) {
			jQueryhamburger.toggleClass("is-active");
			jQueryhamburger.toggleClass("fix");
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


			jQuery('input,textarea').focus(function(){
				jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
				jQuery(this).attr('placeholder','');
			});
			jQuery('input,textarea').blur(function(){
				jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
			});


			jQuery(".hiro").on("click","a.hiro__link", function (event) {
				event.preventDefault();
				var id  = jQuery(this).attr('href'),
				top = jQuery(id).offset().top;
				jQuery('body,html').animate({scrollTop: jQuery(id).offset().top}, 1500);
			});


});