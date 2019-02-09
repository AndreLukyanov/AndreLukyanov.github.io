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

	jQuery(".hero").on("click","a.hero__btn", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-117}, 1500);
	});

	jQuery(".result").on("click","a.result__btn", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-157}, 1500);
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
  http.send("&name=" + f.name.value + "&phone=" + f.phone.value + "&email=" + f.email.value + "&mesages=" + f.mesages.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      form__send();
      f.name.value='';
      f.phone.value='';
      f.email.value='';
      f.mesages.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

});