var main = function(){
	//$('.login-form').hide();

$('.btn-login').click(function(){
	$('.signUp-form').hide();
	$('.login-form').show();



});
$('.btn-signUp').click(function(){
	$('.signUp-form').show();
	$('.login-form').hide();



});



}

$(document).ready(main);