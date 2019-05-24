jQuery(document).ready(function() {



	jQuery('input,textarea').focus(function(){
		jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
		jQuery(this).attr('placeholder','');
	});
	jQuery('input,textarea').blur(function(){
		jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
	});

	/*var jQueryhamburger = jQuery(".hamburger");
      jQueryhamburger.on("click", function(e) {
      jQueryhamburger.toggleClass("is-active");
    });*/

    jQuery(".close").click(function(){
    	jQuery(".navigation").removeClass("visible");
    	jQuery(".hamburger").removeClass("is-active");
    });

	jQuery(".hiro").on("click","a.hiro__btn", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top}, 1500);
	});

	jQuery('').magnificPopup({
  	removalDelay: 300,
  	mainClass: 'mfp-fade'
  });

  jQuery('.slider__link').magnificPopup({
  	removalDelay: 300,
  	mainClass: 'mfp-fade'
  });

  jQuery('.sliders').slick({
		dots: true,
		arrows: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		responsive: [
    {
      breakpoint: 1171,
      settings: {
        arrows: false
      }
    }
		]
		
	});

	 jQuery('.packaging').slick({
		dots: true,
		arrows: true,
		slidesToScroll: 1,
		slidesToShow: 1
		
	});

	 jQuery('.logos').slick({
		dots: true,
		arrows: true,
		slidesToScroll: 1,
		slidesToShow: 1
		
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

  jQuery(".navigation").on("click","a.navigation__link_down", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top}, 1500);
	});

	jQuery(".about").on("click","a.about__link_down", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top}, 1500);
	});

	$(".subs__label").on("click", function() {
		$(this).toggleClass("active");
	});

	$(".subs__label").click(function(event){
		$(".active").removeClass("active");
		$(this).toggleClass("active");
	});

  		var message = jQuery('.message');
      function form__send(){
      	message.addClass('message_active');
      	setTimeout(function() {message.removeClass('message_active')}, 3000);
      }

      document.getElementById('form').addEventListener('submit', function(evt){
      	var http = new XMLHttpRequest(), ff = this;
      	evt.preventDefault();
      	http.open("POST", "mail.php", true);
      	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      	http.send("&name=" + ff.name.value + "&phone=" + ff.phone.value + "&email=" + ff.email.value + "&company=" + ff.company.value);
      	http.onreadystatechange = function() {
      		if (http.readyState == 4 && http.status == 200) {
      			form__send();
      			ff.name.value='';
      			ff.phone.value='';
      			ff.email.value='';
      			ff.company.value='';
      		}
      	}
      	http.onerror = function() {
      		alert('Извините, данные не были переданы');
      	}
      }, false);


});