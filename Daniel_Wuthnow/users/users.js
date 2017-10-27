$(document).ready(function(){
	// alert('hello!');
	$('form').submit(function(){
		let firstName = $('#firstName').val();
		let lastName = $('#lastName').val();
		let email = $('#eMail').val();
		let pNumber = $('#pNumber').val();

		var html_str = '';
		html_str += '<tr>'
		html_str += 	`<td>${firstName}</td>`
		html_str += 	`<td>${lastName}</td>`
		html_str += 	`<td>${email}</td>`
		html_str += 	`<td>${pNumber}</td>`
		html_str += '</tr>'
		$('table').append(html_str);
		return false
	});

});