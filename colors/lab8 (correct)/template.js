$(function() {

$('#add_colors').click(add_colors);

});

function add_colors ()
{
	//get colors
	var colors = $('#input').val();

	//make array
		colors.split(', ');

	//figure out how many colors
		

	console.log(colors.length);
}