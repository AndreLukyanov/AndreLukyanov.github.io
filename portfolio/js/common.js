jQuery(document).ready(function() {

	var jQueryhamburger = jQuery(".hamburger");
			jQueryhamburger.on("click", function(e) {
			jQueryhamburger.toggleClass("is-active");
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

			var myMenu = document.querySelector(".nav");
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


			$(".contact").click(function() {
				$(".emerge").toggleClass("active");
				$(".contact").toggleClass("none");
			});

			

			$(".emerge__text").click(function() {
				$(".emerge").toggleClass("active");
				$(".contact").toggleClass("none");
			});


			

			$('.button_up').click(function() {

				$('body,html').animate({scrollTop:0}, 800);

			});

			$(window).scroll(function () {
				if ($(this).scrollTop() > 0) {
					$('.contact').fadeIn();
				} else {
					$('.contact').fadeOut();
				}
			});




			$(".andr").on("click", function() {
				$(this).toggleClass("active");
			});

			$(".act").click(function(event){
				$(".activer").removeClass("activer");
				$(this).toggleClass("activer");
			});


			jQuery(".nav").on("click","a.nav__link_close", function (event) {
				event.preventDefault();
				var id  = jQuery(this).attr('href'),
				top = jQuery(id).offset().top;
				jQuery('body,html').animate({scrollTop: jQuery(id).offset().top}, 1500);
			});


			jQuery(".header").on("click","a.scroll", function (event) {
				event.preventDefault();
				var id  = jQuery(this).attr('href'),
				top = jQuery(id).offset().top;
				jQuery('body,html').animate({scrollTop: jQuery(id).offset().top}, 1500);
			});

			jQuery(".nav__link_close").click(function(){
      	jQuery(".nav").removeClass("visible");
      	jQuery(".hamburger").removeClass("is-active");
      });


      /*===Кнопка Загрузить Ещё===*/


			var list = $(".work__box");
      var numToShow = 2;
      var button = $("#button_load");
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, numToShow).show();

      button.click(function(){
          var showing = list.filter(':visible').length;
          list.slice(showing - 1, showing + numToShow).fadeIn();
          var nowShowing = list.filter(':visible').length;
          if (nowShowing >= numInList) {
            button.hide();
          }
      });


      /*====================Галерея====================*/
			
      jQuery('.work').magnificPopup({
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
			


			/*===Конец Галереи===*/


			var message = $('.message');
      function form__send(){
        message.addClass('message_active');
        setTimeout(function() {message.removeClass('message_active')}, 3000);
      }


			document.getElementById('form_one').addEventListener('submit', function(evt){
				var http = new XMLHttpRequest(), f = this;
				evt.preventDefault();
				http.open("POST", "mail.php", true);
				http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				http.send("&email=" + f.email.value + "&messages=" + f.messages.value);
				http.onreadystatechange = function() {
					if (http.readyState == 4 && http.status == 200) {
						form__send();
						$(".emerge").toggleClass("active");
						$(".contact").toggleClass("none");
						f.email.value='';
						f.messages.value='';
					}
				}
				http.onerror = function() {
					alert('Извините, данные не были переданы');
				}
			}, false);


			

			



});