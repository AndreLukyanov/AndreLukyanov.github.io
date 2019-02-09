$(".hamburger").click(function() {
  $(this).hide();
  $('.cross').show();
  $(".humburger__menu").slideToggle();
});
$(".cross").click(function() {
  $(this).hide();
  $('.hamburger').show();
  $(".humburger__menu").slideToggle();
});
$(".humburger__link").on('click', function(){
		$('.humburger__menu').toggle('linear');
		$('.hamburger').show();
		$('.cross').hide();
});
