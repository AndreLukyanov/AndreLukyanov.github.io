jQuery(function($) {
          $(window).scroll(function(){
              if($(this).scrollTop()>70){
                  $('.scroll').addClass('fixed');
              }
              else if ($(this).scrollTop()<70){
                  $('.scroll').removeClass('fixed');
              }
          });
      });

