jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>70){
            $('.header__top').addClass('fixed');
        }
        else if ($(this).scrollTop()<70){
            $('.header__top').removeClass('fixed');
        }
    });
});