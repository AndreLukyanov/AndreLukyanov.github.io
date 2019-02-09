$(document).ready(function() {

  !function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

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

      var myMenu = document.querySelector(".navigation");
      var oppMenu = document.querySelector(".hamburger");
      myMenu.addEventListener("transitionend", OnTransitionEnd, false);
      oppMenu.addEventListener("click", toggleClassMenu, false);

      jQuery(".navigation__link").click(function(){
        jQuery(".navigation").removeClass("visible");
        jQuery(".hamburger").removeClass("is-active");
      });

  jQuery('.button_block').magnificPopup({
  	removalDelay: 300,
  	mainClass: 'mfp-fade'
  });

  jQuery('.reviews').slick({
    dots: true,
    arrows: true,
    speed: 1000
  });

  jQuery(".consultation__caption").click(function(){
    jQuery(".consultation").toggleClass("close_none");
    jQuery(".consultation__close").toggleClass("close_block");
  });

  jQuery(".consultation__close").click(function(){
    jQuery(".consultation").removeClass("close_none");
    jQuery(".consultation__close").toggleClass("close_block");
  });

  jQuery(window).bind('scroll', function() {
    var navHeight = $('.header').height();
    if (jQuery(window).scrollTop() > navHeight) {
      jQuery('.nav__row').addClass('fixed');
    }
    else {
      jQuery('.nav__row').removeClass('fixed');
    }
  });

  $(".navigation").on("click","a.navigation__link", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: $(id).offset().top-61}, 1500);
  });

  $(".price").on("click","a.button_price", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: $(id).offset().top-61}, 1500);
  });

  /*setTimeout(function(){ 
      $.magnificPopup.open({
        items: {src: '.news'},
        type: 'inline',
      });  
    }, 10000);*/


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


  jQuery('input,textarea').focus(function(){
    jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
    jQuery(this).attr('placeholder','');
  });
  jQuery('input,textarea').blur(function(){
    jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
  });


  // Анимация при скролле
  jQuery('.animated_1').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_2').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_3').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_4').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_5').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_6').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_7').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_8').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });
  jQuery('.animated_9').viewportChecker({
    classToAdd: 'animated_visible',
    offset: 50
  });

  // Анимация при загрузке
  function show_magic() {
    jQuery('.hero__block').addClass('animated_visible');
    jQuery('.button button_block').addClass('animated_visible')
  }
  function show_magic() {
    jQuery('.work').addClass('animated_visible');
  }
  function show_magic() {
    jQuery('.services').addClass('animated_visible');
  }
  function show_magic() {
    jQuery('.bonuses').addClass('animated_visible');
  }
  setTimeout(show_magic, 600);
  function show_magic_top() {
    jQuery('.animated_header').addClass('animated_visible')
  }
  setTimeout(show_magic_top, 100);


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
  http.send("&name=" + f.name.value + "&email=" + f.email.value + "&phone=" + f.phone.value + "&question=" + f.question.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      form__send();
      jQuery.magnificPopup.close();
      f.name.value='';
      f.email.value='';
      f.phone.value='';
      f.question.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

  document.getElementById('consultation__form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("&message=" + f.message.value + "&namek=" + f.namek.value + "&phonek=" + f.phonek.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      form__send();
      f.message.value='';
      f.namek.value='';
      f.phonek.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

  document.getElementById('application').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("&namea=" + f.namea.value + "&emaila=" + f.emaila.value + "&phonea=" + f.phonea.value + "&messagea=" + f.messagea.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      form__send();
      f.namea.value='';
      f.emaila.value='';
      f.phonea.value='';
      f.messagea.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

});









