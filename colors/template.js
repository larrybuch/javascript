var selected_color = null;

$(function(){

	$('#add').click(add_colors);
	//have to use on function because boxes are loaded dynamically
	$('#colors').on('hover', '.color', change_bg);
	$('#colors').on('dblclick', '.color', delete_color);
	$('#colors').on('click', '.color', toggle_select_color);
	$('#left').click(left);
	$('#right').click(right);

});

function add_colors()
{
	//get value
	var colors = $('#colors_string').val();
	//split colors
	colors = colors.split(', ');
	//add colors by looping array # length times
	for(var i = 0; i < colors.length; i++)
		//if 0 is less than array length do this
	{
		//create div
		var color = $('<div>');
		//add class
		color.addClass('color');
		//change background color to i (0 position)
		color.css('background-color', colors[i]);
		$('#colors').append(color);
	}
}
//hover over bg, green
function change_bg()
{
	//hover over THIS box, what's it's bg color? get the color
	var color = $(this).css('background-color');
	//find the text box color_string, and change the css background color
	//to color defined in previous step
	$('#colors_string').css('background-color', color);
}

function delete_color()
{
	//Delete this color, double click (this is pretty easy)
	$(this).remove();
}

function toggle_select_color()
{
	//if these two things are different, do this code.
	if(selected_color != this)
	//selected color = null, remove it's class 
	{
		$(selected_color).removeClass('selected');
		//redefine selected color
		selected_color = this;
		//take selected color and add class (black border class)
		$(selected_color).addClass('selected');
	}
	//remove selection
	else
	{
		$(selected_color).removeClass('selected');		
		selected_color = null;
	}
}

//move it left 
function left()
{
	//is there a color selected? 
	if(selected_color != null)
	{
		//find previous div
		var previous = $(selected_color).prev();
		//take previous and move it before the selected color
		previous.before(selected_color);
	}
}

function right()
{
	//is there a color selected?
	if(selected_color != null)
	{
		//find the next div
		var next = $(selected_color).next();
		//take next and move it after seleced color
		next.after(selected_color);
	}
}
