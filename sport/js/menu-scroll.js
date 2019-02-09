jQuery(function($) {
          $(window).scroll(function(){
              if($(this).scrollTop()>30){
                  $('.header__center').addClass('fixed');
              }
              else if ($(this).scrollTop()<30){
                  $('.header__center').removeClass('fixed');
              }
          });
      });