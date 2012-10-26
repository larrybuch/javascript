$(function() {

	$('.a').hover(color_the_box, off);
	$('#add').click(add_node);
	$('#addcolors').click(add_colors);
	// NEED ON FUNCTION BECAUSE BOXES LOADED DYNAMICALLY
	$('#boxes').on('hover', '.box', make_pretty);

});

function make_pretty()
{

	$(this).toggleClass('green');
}

function add_colors() 
{
	var count = $('#count').val();
		count = parseInt(count);

	for(var i = 0; i < count; i++)
	{
		var box = $('<div>');
			box.text(i);
			box.addClass('box');

		$('#boxes').append(box);
	}
}

function add_node()
{
	var element = $('#element').val();
	var node = $('<' + element + '>');
	var css = $('#css').val();
	var text = $('#value').val();

	node.text(text);

	$('#elements').prepend(node);
}



function color_the_box()
{
	//Use this to select THIS node
	var color = $(this).text();
	$(this).css('background-color', color);
}

function off()
{
	//Use this to select THIS node
	var color = $(this).text();
	$(this).css('background-color', 'white');
}

