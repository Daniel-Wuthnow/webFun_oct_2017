$(document).ready(function(){
	$('.box').hover(
		function(){
			$(this).css('background', randomcolor());
		},
		function() {
			$(this).css('background', randomcolor());	
		}
	);

	$('#reset').click(function(){
		$('.box').css('background', 'none');
	});

	$('#dance').click(function(){
		$('.box').each(function(){
			$(this).css('background', randomcolor())
		});
	});


	$('#dance').click(function(){
		setInterval(party, 200);
	})



});

function randomcolor(arr){
	var arr = ['red', 'blue', 'green', 'purple', 'lightblue', 'brown', 'teal'];
	var rancolor = arr[Math.floor(Math.random()*7)];
	return rancolor;
}

randomcolor();
	function party(){
		$('.box').each(function(){
			$(this).css('background', randomcolor())
		});
	}