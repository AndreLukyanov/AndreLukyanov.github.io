jQuery(document).ready(function() {

	jQuery(".navigation").on("click","a.navigation__button_link", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-61}, 1500);
	});

	jQuery(".phone").on("click","a.phone__online_link", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
		top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: jQuery(id).offset().top-61}, 1500);
	});

	jQuery('.list__link').on('click', function() {
			var text = jQuery(this).parent().find('.list__link').text();
			jQuery('.form__hiden').val(text);
		});

 
		jQuery(function() {
 
    	var dd = new DropDown( $('#selection') );
 
    	jQuery(document).click(function() {
        	
        	jQuery('.select').removeClass('active');
    	});
 
		});


		function DropDown(el) {
			this.form__select = el;
			this.placeholder = this.form__select.children('.form__span');
			this.opts = this.form__select.find('ul.list > li > a');
			this.val = '';
			this.index = -1;
			this.initEvents();
		}
		DropDown.prototype = {
			initEvents : function() {
				var obj = this;

				obj.form__select.on('click', function(event){
					jQuery(this).toggleClass('active');
					return false;
				});

				obj.opts.on('click',function(){
					var opt = jQuery(this);
					obj.val = opt.text();
					obj.index = opt.index();
					obj.placeholder.text(obj.val);
				});
			},
			getValue : function() {
				return this.val;
			},
			getIndex : function() {
				return this.index;
			}
		}

	jQuery('.tabs__container > div').hide();
	jQuery('.tabs__container > div:first-of-type').show();
	jQuery('.tabs__link').click(function(e){
		e.preventDefault();
		var jQuerythis = jQuery(this),
		tabgroup = '#'+jQuerythis.parents('.tabs__list').data('tabgroup'),
		others = jQuerythis.closest('li').siblings().children('a'),
		target = jQuerythis.attr('href');
		others.removeClass('active');
		jQuerythis.addClass('active');
		jQuery(tabgroup).children('div').hide();
		jQuery(target).show();
		
	});

	var jQueryhamburger = jQuery(".hamburger");
      jQueryhamburger.on("click", function(e) {
      jQueryhamburger.toggleClass("is-active");
    });


      jQuery(".navigation__close").click(function(){
      	jQuery(".navigation").removeClass("visible");
      	jQuery(".hamburger").removeClass("is-active");
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

	jQuery('.partners').slick({
		dots: true,
		arrows: false,
		speed: 1500,
		autoplay: true,
		slidesToScroll: 5,
		slidesToShow: 5,
		responsive:[{
			breakpoint: 961,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 801,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 561,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false
			}
		}]
	});

	jQuery('.slide').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		speed: 3000,
		slidesToScroll: 1,
		slidesToShow: 1
	});





    jQuery('input,textarea').focus(function(){
    	jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
    	jQuery(this).attr('placeholder','');
    });
    jQuery('input,textarea').blur(function(){
    	jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
    });


    var jQuerytextss = jQuery('.hidden_one'),
    jQuerybox = jQuery('.form__hide_one');

    jQuerybox.on('click change', function() {
    	var values = [];

    	jQuerybox.filter(':checked').each(function() {
    		values.push(this.value);
    	});

    	jQuerytextss.val(values.join(','));

    });


    var jQuerytexts = jQuery('.hidden_two'),
    jQueryboxx = jQuery('.form__hide_two');

    jQueryboxx.on('click change', function() {
    	var values = [];
    	
    	jQueryboxx.filter(':checked').each(function() {
    		values.push(this.value);
    	});
    	
    	jQuerytexts.val(values.join(','));

    });





jQuery('.news').slick({
		dots: true,
		arrows: true,
		slidesToScroll: 4,
		slidesToShow: 4,
		responsive:[{
						breakpoint: 961,
						settings: {
							slidesToShow: 4
						}
					}, {
						breakpoint: 801,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					}, {
						breakpoint: 561,
						settings: {
							arrows: false,
							slidesToShow: 1,
							slidesToScroll: 1
						}, 
					}]
	});

		
ymaps.ready(init);
var myMap,
myPlacemark1,
myPlacemark2,
myPlacemark3,
myPlacemark4,
myPlacemark5,
myPlacemark6,
myPlacemark7,
myPlacemark8,
myPlacemark9,
myPlacemark10,
myPlacemark11,
myPlacemark12,
myPlacemark13;

function init(){     
	myMap = new ymaps.Map("map_home", {
		center: [59.9644, 30.3131],
		zoom: 15,
		controls: []
	});

      /*myMap.behaviors.disable([
        'drag',
        'scrollZoom'
        ]);*/

        myPit = new ymaps.GeoObjectCollection({}, {
        	iconLayout: 'default#image',
        	iconImageHref: '/wp-content/themes/property/img/m1.png',
        	iconImageSize: [46, 61],
        	iconImageOffset: [-22, -64]
        });

        myPlacemark1 = new ymaps.Placemark([59.9635, 30.3217], { 
        	balloonContentHeader: 'Санкт-Петербург!',
        	balloonContentBody: 'Главный офис',
        	balloonContentFooter: 'Телефон 3333',
        	hintContent: 'Нажми!' 
        });

        

        myPit.add(myPlacemark1);
        myMap.geoObjects.add(myPit);


      }





		 var message = jQuery('.message');
      function form__send(){
      	message.addClass('message_active');
      	jQuery('.contact__input').removeClass('active');
      	jQuery('.contact__textarea').removeClass('active');
      	setTimeout(function() {message.removeClass('message_active')}, 3000);
      }

      document.getElementById('form').addEventListener('submit', function(evt){
      	var http = new XMLHttpRequest(), ff = this;
      	evt.preventDefault();
      	http.open("POST", "/wp-content/themes/property/mail.php", true);
      	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      	http.send("&hide=" + ff.hide.value + "&name=" + ff.name.value + "&phone=" + ff.phone.value + "&email=" + ff.email.value + "&dispatch=" + ff.dispatch.value + "&treatment=" + ff.treatment.value);
      	http.onreadystatechange = function() {
      		if (http.readyState == 4 && http.status == 200) {
      			form__send();
      			ff.hide.value='';
      			ff.name.value='';
      			ff.phone.value='';
      			ff.email.value='';
      			ff.dispatch.value='';
      			ff.treatment.value='';
      		}
      	}
      	http.onerror = function() {
      		alert('Извините, данные не были переданы');
      	}
      }, false);

      


      


     

});












