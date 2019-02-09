$(document).ready(function(){
	$('.button_hide').on('click', function(){
		$('.map-message').toggle('linear');
		$('.map-message__submit').toggle();
		$('.button_absolute').toggle();
	});
	$('.button_absolute').on('click', function(){
		$('.map-message').toggle('linear');
		$('.map-message__submit').toggle();
		$('.button_absolute').toggle();
	});

});