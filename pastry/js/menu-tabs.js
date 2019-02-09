$(function() {
    $('.button_one').on('click', function(e) {
        e.preventDefault();
        $('.card__two').each(function() {
            $(this).css('z-index', '4');
        });
        $('.card__one').each(function() {
            $(this).css('display', 'none');
        });
    });

    $('.button_two').on('click', function(e) {
        e.preventDefault();
        $('.card__three').each(function() {
            $(this).css('z-index', '5');
        });
        $('.card__two').each(function() {
            $(this).css('display', 'none');
        });
    });

    $('.button_three').on('click', function(e) {
        e.preventDefault();
        $('.card__one').each(function() {
            $(this).css('display', 'block');
            $(this).css('z-index', '7');
        });
        $('.card__two').each(function() {
            $(this).css('display', 'block');
            $(this).css('z-index', '6');
        });
        $('.card__three').each(function() {
            $(this).css('display', 'block');
            $(this).css('z-index', '1');
        });
    });
});

