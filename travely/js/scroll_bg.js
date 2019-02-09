$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 70 ){
            $(".nav").css("box-shadow", "0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.12)");
        }
        else if ($(this).scrollTop()<69){
           $(".nav").css("box-shadow", "none");
        }
    });
});