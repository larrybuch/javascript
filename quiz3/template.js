$(function() {

$('#make').click(add_colors);
$('#add_colors').on('hover', '.color', change_bg)

});

function add_colors () {
	var number = $('#colors').val();
		number = number.split(', ')
		console.log(number);

		for(var i = 0; i < number.length; i++)
		//if 0 is less than array length do this
	{
		//create div
		var d = $('<div>');
		//add class
		d.addClass('color');
		//change background color to i (0 position)
		d.css('background-color', number[i]);
		$('#add_colors').prepend(d);
	}

}

function change_bg () {
	var color = $(this).css('background-color');
	//find the text box color_string, and change the css background color
	//to color defined in previous step
	$('#hover').css('background-color', color);
}

