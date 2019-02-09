jQuery(document).ready(function() {

	jQuery(".nav").on("click","a.navigation__link", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-117}, 1500);
	});

	jQuery(".hero").on("click","a.button_down", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-117}, 1500);
	});

	jQuery(".list").on("click","a.list__link", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-117}, 1500);
	});

	jQuery(".goods").on("click","a.button_goods", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-117}, 1500);
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
		http.send("&name=" + f.name.value + "&phone=" + f.phone.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				form__send();
				f.name.value='';
				f.phone.value='';
			}
		}
		http.onerror = function() {
			alert('Извините, данные не были переданы');
		}
	}, false);

	document.getElementById('footer__form').addEventListener('submit', function(evt){
		var http = new XMLHttpRequest(), f = this;
		evt.preventDefault();
		http.open("POST", "mail.php", true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.send("&names=" + f.names.value + "&phones=" + f.phones.value);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				form__send();
				f.names.value='';
				f.phones.value='';
			}
		}
		http.onerror = function() {
			alert('Извините, данные не были переданы');
		}
	}, false);


});