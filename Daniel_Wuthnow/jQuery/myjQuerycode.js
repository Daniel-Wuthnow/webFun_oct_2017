$(document).ready(function(){

	$('.clicker').click(function(){
		$('.clicker').css('background','yellow');
		console.log('test');
	});

	$('.gone').click(function(){
		$('#mytarget').hide('slow');
	});

	$('#hello').click(function(){
		$('#mytarget').show('slow');
	});

	$('.hiByeBut').click(function(){
		$('.hiBye').toggle();
	});

	$('.test').click(function(){
		$('#downunder').slideDown();
	});

	$('.up').click(function(){
		$('#downunder').slideUp();
	});

	$('.slideTog').click(function(){
		$('#potato').slideToggle();
	});

	$('.fadin').click(function(){
		$('#bakedpotato').fadeIn('slow');
	});

	$('.fadout').click(function(){
		$('#bakedpotato').fadeOut('slow');
	});

	$('.adclas').click(function(){
		$('#classadd').addClass('selected');
	});

	$('.befor').click(function(){
		$('#spaml').before('<span>Daniel </span>');
	});

	$('.afte').click(function(){
		$('#spamf').after('<span> Wuthnow</span>');
	});

	$('.appen').click(function(){
		$('#spamA').append('<span> Wuthnow</span>');
	});

	$('.code').click(function(){
		$('#spamH').html('<span> Wuthnow</span>');
	});

	$('.atr').click(function(){
		$('#cheese').attr('width', '500');
	});

	$('#wealth').click(function(){
		$('input').val('bob hope');
	});
	$('#text').click(function(){
		$('p').text('I AM BACK!!!!!');
	});
	$('#nerd').click(function(){
		$('p').data('I AM BACK!!!!!');
		console.log("im a string")
	});


})

