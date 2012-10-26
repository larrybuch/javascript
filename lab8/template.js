var counter = 0;

$(function() {

	//setTimeout(display_text, 3000);
	setInterval(display_more, 1000);

});

function display_more ()
{
	var d = $('<div>');
	$('#test').prepend(d);
	d.addClass('funky');
	d.text(counter);
	counter++;

	var color1 = counter % 256;	
	var color2 = (counter * 5) % 256;
	var color3 = (counter * counter) % 256;

	var color_string = 'rgb('+ color1 +', '+ color2 +', '+ color3 +')';
	d.css('background-color', color_string)
}

function display_text ()
{
	$('#test').text('Hello World.')
}