/*var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        
        this.classList.toggle("active");

        
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}*/

$(document).ready(function(){
    $('.btn_one').on('click', function(){
        $('.content_one').toggle('slow', 'linear'); 
    });

    $('.btn_two').on('click', function(){
        $('.content_two').toggle('slow', 'linear'); 
    });

    $('.btn_three').on('click', function(){
        $('.content_three').toggle('slow', 'linear'); 
    });

    $('.btn_four').on('click', function(){
        $('.content_four').toggle('slow', 'linear'); 
    });
    

});

