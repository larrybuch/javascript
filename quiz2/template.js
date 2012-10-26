$(function() {

$('#make').click(make_boxes);

});

function make_boxes () {
	var number = $('#number').val();
	console.log(number);
		number = parseInt(number);

	for (var i = 0; i < number; i++) 
	{
		var d = $('<div>');
		$('#boxes').append(d);
		d.addClass('box');
		d.text(i + 1);

	}

}