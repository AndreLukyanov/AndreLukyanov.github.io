$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['home', 'about', 'work', 'services', 'process-work', 'contacts'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Главная', 'О нас', 'О нашей работе' , 'Услуги' , 'Процесс работы' , 'Контакты'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .button_write',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	new WOW().init();

	$(".navigation__link").click(function(){
		$(".navigation").removeClass("visible");
		$(".hamburger").removeClass("is-active");
	});


  function leaveInput(el) {
    if (el.value.length > 0) {
      if (!el.classList.contains('active')) {
        el.classList.add('active');
      }
    } else {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    }
  }

  var inputs = document.getElementsByClassName("up");
  for (var i = 0; i < inputs.length; i++) {
    var el = inputs[i];
    el.addEventListener("blur", function() {
      leaveInput(this);
    });
  }


  	$(".button_footer").click(function(){
  		$(".footer").addClass('footer_active');
  	});

  	$(".footer__block").click(function(){
  		$(".footer").removeClass('footer_active');
  	});

  	var elem = document.getElementById("remove");
  	elem.parentNode.removeChild(elem);

  	/*$(window).bind('resize', function(){ 
	    if ($(window).width() < 560) {
	    	var elems = document.getElementById("remove");
  			elem.parentNode.appendChild(elems);
	    }
    });*/

  

  var message = $('.message');
      function form__send(){
      	message.addClass('message_active');
      	$('.contact__input').removeClass('active');
      	$('.contact__textarea').removeClass('active');
      	setTimeout(function() {message.removeClass('message_active')}, 3000);
      }

	document.getElementById('form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("&name=" + f.name.value + "&email=" + f.email.value + "&comment=" + f.comment.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      form__send();
      f.name.value='';
      f.email.value='';
      f.comment.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);


	document.getElementById('popup__form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("&names=" + f.names.value + "&surname=" + f.surname.value + "&phone=" + f.phone.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      form__send();
      jQuery.magnificPopup.close();
      f.names.value='';
      f.surname.value='';
      f.phone.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

	var jQuerhamburger = jQuery(".hamburger");
	jQuerhamburger.on("click", function(e) {
		jQuerhamburger.toggleClass("is-active");
	});

	$(".hamburger").click(function(){
		$(".hamburger-inner").toggleClass("hamburger_white");
		$("#fp-nav ul").toggleClass("opacity");
		$(".popup__toggle").toggleClass("popup__close");
	});

	$(".navigation__link").click(function(){
		$(".hamburger-inner").toggleClass("hamburger_white");
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

	$('.popup__toggle').magnificPopup({
		 removalDelay: 300,
		 mainClass: 'mfp-fade'
	});

	$('input,textarea').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });

});