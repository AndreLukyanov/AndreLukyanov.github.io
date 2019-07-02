

jQuery(".list").on("click","a.list__link", function (event) {
    event.preventDefault();
    var id  = jQuery(this).attr('href'),
    top = jQuery(id).offset().top;
    jQuery('body,html').animate({scrollTop: jQuery(id).offset().top}, 1500);
  });

var jQueryhamburger = jQuery(".hamburger");
      jQueryhamburger.on("click", function(e) {
      jQueryhamburger.toggleClass("is-active");
    });

      jQuery(".list__link").click(function(){
        jQuery(".list").removeClass("visible");
        jQuery(".hamburger").removeClass("is-active");
      });

var goalDay = '2020/07/01 00:00:00'

   var timerId = 0;
   timerId = setInterval(function() {
     var t = Date.parse(goalDay) - Date.parse(new Date());
     if (t < 0) {
       $(".days").text("0");
       $(".hours").text("0");
       $(".minutes").text("0");
       $(".seconds").text("0");
       clearInterval(timerId);
     } else {
       var seconds = Math.floor((t / 1000) % 60);
       var minutes = Math.floor((t / 1000 / 60) % 60);
       var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
       var days = Math.floor(t / (1000 * 60 * 60 * 24));
       $(".days").text(days);
       $(".hours").text(hours);
       $(".minutes").text(minutes);
       $(".seconds").text(seconds);
     }
   }, 1000);


   var message = jQuery('.message');
      function form__send(){
        message.addClass('message_active');
        setTimeout(function() {message.removeClass('message_active')}, 3000);
      }

      document.getElementById('form1').addEventListener('submit', function(evt){
        var http = new XMLHttpRequest(), ff = this;
        evt.preventDefault();
        http.open("POST", "mail.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("&name1=" + ff.name1.value + "&phone1=" + ff.phone1.value);
        http.onreadystatechange = function() {
          if (http.readyState == 4 && http.status == 200) {
            form__send();
            ff.name1.value='';
            ff.phone1.value='';
          }
        }
        http.onerror = function() {
          alert('Извините, данные не были переданы');
        }
      }, false);

      document.getElementById('form2').addEventListener('submit', function(evt){
        var http = new XMLHttpRequest(), ff = this;
        evt.preventDefault();
        http.open("POST", "mail.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("&name2=" + ff.name2.value + "&phone2=" + ff.phone2.value);
        http.onreadystatechange = function() {
          if (http.readyState == 4 && http.status == 200) {
            form__send();
            ff.name2.value='';
            ff.phone2.value='';
          }
        }
        http.onerror = function() {
          alert('Извините, данные не были переданы');
        }
      }, false);

      document.getElementById('form3').addEventListener('submit', function(evt){
        var http = new XMLHttpRequest(), ff = this;
        evt.preventDefault();
        http.open("POST", "mail.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("&name3=" + ff.name3.value + "&phone3=" + ff.phone3.value);
        http.onreadystatechange = function() {
          if (http.readyState == 4 && http.status == 200) {
            form__send();
            jQuery.magnificPopup.close();
            ff.name3.value='';
            ff.phone3.value='';
          }
        }
        http.onerror = function() {
          alert('Извините, данные не были переданы');
        }
      }, false);


jQuery('.open').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

jQuery('.open-two').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

jQuery('.services__button').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
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

var myMenu = document.querySelector(".list");
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




