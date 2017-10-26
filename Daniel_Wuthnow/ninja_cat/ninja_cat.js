$(document).ready(function(){
	$('img').click(function() {
		console.log('test');

	//gets the attrubute for cat images
  		var newpic = $(this).attr('data-alt-src');
  	//makes temp the ninja pics
  		var temp = $(this).attr('src');
  		$(this).attr('src', newpic)
  		$(this).attr('data-alt-src', temp)
	});
});