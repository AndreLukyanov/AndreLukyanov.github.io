jQuery(document).ready(function() {

  jQuery('.hero__row').slick({
        dots: false,
        arrows: false,
        speed: 1500,
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1
      });

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




      var $wrapper = $('.advantages'),
      $allTabs = $wrapper.find('.advantages__box'),
      $tabMenu = $wrapper.find('.advantages__inner'),
      $tabColor = $wrapper.find('.advantages__name');
      

      $allTabs.not(':first-of-type').hide();  
      $tabMenu.filter(':first-of-type').find(':first').width('100%')

      $tabMenu.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      });

      $allTabs.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      });

      $tabMenu.on('click', function() {

        var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
        

        $getWrapper.find($tabMenu).removeClass('active'),
        $getWrapper.find($tabColor).removeClass('active');
        $(this).addClass('active');
        

        
        $getWrapper.find('.advantages__name');
        $(this).find($tabColor).addClass('active');
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
      });


      $(".advantages__hexagon").on('click', function() {
        $(".advantages__inner").addClass("activer");
      });

      


      jQuery('.work').slick({
        dots: false,
        arrows: true,
        speed: 1500,
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive:[{
          breakpoint: 961,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 644,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 461,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });



});