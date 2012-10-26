$(function() {

	//when you click the thing with the id animal, run the script add animal
	$('#add_animal').click(add_animal);

});

function add_animal()
{
	var animal = {};
		animal.name = $('#animal_name').val();
		animal.color = $('#animal_color').val();
		animal.image = $('#animal_image').val();
		insert_animal(animal);
}

function insert_animal(animal)
{
	//create div
	var d = $('<div>');
	//add properties
		d.addClass('animal');
		d.css('background-color', animal.color);
		d.text(animal.name);

		//create img, add src, append to div
		var i = $('<img>');
			i.attr('src', animal.image);
		d.append(i);

		//add div above animals div
	$('#animals').prepend(d);	
}
