$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 70 ){
            $(".nav").css("background", "#D3D3D3");
        }
        else if ($(this).scrollTop()<69){
           $(".nav").css("background", "#ffffff");
        }
    });
});

