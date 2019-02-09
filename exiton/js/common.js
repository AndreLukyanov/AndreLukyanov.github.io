jQuery(document).ready(function() {




		
	$(window).scroll(function() {
	 
	if($(this).scrollTop() != 0) {
	 
	$('.btn').fadeIn();
	 
	} else {
	 
	$('.btn').fadeOut();
	 
	}
	 
	});
	 
	$('.btn').click(function() {
	 
	$('body,html').animate({scrollTop:0}, 800);
	 
	});


	var jQueryhamburger = jQuery(".hamburger");
      jQueryhamburger.on("click", function(e) {
      jQueryhamburger.toggleClass("is-active");
    });







	jQuery('.products').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		speed: 2000,
		slidesToScroll: 3,
		slidesToShow: 3,
		responsive:[{
						breakpoint: 1201,
						settings: {
							arrows: false
						}
					}, {
						breakpoint: 961,
						settings: {
							slidesToScroll: 2,
							slidesToShow: 2,
							arrows: false
						}
					}, {
						breakpoint: 561,
						settings: {
							slidesToScroll: 1,
							slidesToShow: 1,
							dots: false,
							arrows: true
						}, 
					}]
		
	});

	jQuery('.slider').slick({
		autoplay: true,
		dots: false,
		arrows: true,
		speed: 2000,
		slidesToScroll: 1,
		slidesToShow: 4,
		responsive:[{
						breakpoint: 1201,
						settings: {
							arrows: true
						}
					}, {
						breakpoint: 961,
						settings: {
							slidesToShow: 3,
							arrows: true
						}
					}, {
						breakpoint: 781,
						settings: {
							slidesToShow: 2,
							arrows: true
						}
						}, {
						breakpoint: 561,
						settings: {
							slidesToShow: 1,
							arrows: true
						}, 
					}]
	});

	jQuery('.slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		},
		zoom: {
    	enabled: true, 
    	duration: 300, // duration of the effect, in milliseconds
    	easing: 'ease-in-out', // CSS transition easing function
    	opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
  	}
  }
	});

	jQuery('.products').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		},
		zoom: {
    	enabled: true, 
    	duration: 300, // duration of the effect, in milliseconds
    	easing: 'ease-in-out', // CSS transition easing function
    	opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
  	}
  }
	});




	jQuery('.button_footer').magnificPopup({
  	removalDelay: 300,
  	mainClass: 'mfp-fade'
  });


  jQuery('input,textarea').focus(function(){
    jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
    jQuery(this).attr('placeholder','');
  });
  jQuery('input,textarea').blur(function(){
    jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
  });


  




  var message = $('.message');
	function form__send(){
		message.addClass('message_active');
		setTimeout(function() {message.removeClass('message_active')}, 3000);
	}

	document.getElementById('form').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "mail.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&email=" + f.email.value + "&message=" + f.message.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				form__send();
				jQuery.magnificPopup.close();
				f.email.value='';
				f.message.value='';
			}
		}
		http.onerror = function() {
			alert('Извините, данные не были переданы');
		}
	}, false);





	$(window).on("load resize ", function() {
		var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
		$('.tbl-header').css({'padding-right':scrollWidth});
	}).resize();




	
$(".table").slice(0, 4).show();
		$("#carica-altri").on('click', function (e) {

			if ($(".table:hidden").length == 0) {
				$("#carica-altri").css('display', 'none');
              } // fine prodotti, nascondi pulsante
              
              e.preventDefault();
              $(".table:hidden").slice(0, 4).slideDown();
              if ($(".table:hidden").length == 0) {
              	$("#carica-altri").fadeOut('slow');
              }

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


 
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6.413648243462092,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":267.9854800594439,"line_linked":{"opacity":1}},"bubble":{"distance":341.0724291665649,"size":40,"duration":3.167101127975246,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

});