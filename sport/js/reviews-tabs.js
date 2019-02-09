$(function() {
    $('.reviews__link_one').on('click', function(e) {
        e.preventDefault();
        $('.reviews__text_one').each(function() {
            $(this).css('display', 'none');
        });
        $('.reviews__text_two').each(function() {
            $(this).css('display', 'block');
        });
        $('.reviews__text_three').each(function() {
            $(this).css('display', 'none');
        });
    });
});

$(function() {
    $('.reviews__link_two').on('click', function(e) {
        e.preventDefault();
       
        $('.reviews__text_one').each(function() {
            $(this).css('display', 'block');
        });
        $('.reviews__text_two').each(function() {
            $(this).css('display', 'none');
        });
        $('.reviews__text_three').each(function() {
            $(this).css('display', 'none');
        });
    });
});

$(function() {
    $('.reviews__link_three').on('click', function(e) {
        e.preventDefault();
       
        $('.reviews__text_three').each(function() {
            $(this).css('display', 'block');
        });
        $('.reviews__text_two').each(function() {
            $(this).css('display', 'none');
        });
        $('.reviews__text_one').each(function() {
            $(this).css('display', 'none');
        });
    });
});