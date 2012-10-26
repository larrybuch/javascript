$(function() {

$('#add').click(add);
$('#subtract').click(subtract);
$('#divide').click(divide);
$('#multiply').click(multiply);

$('#add').hover(change_background);
$('#subtract').hover(change_background);
$('#divide').hover(change_background);
$('#multiply').hover(change_background);


$('#clear').click(clear);

});

// function get_input() {
// 	var num1 = $('#num1').val();
// 		num1 = parseInt(num1);

// 	var num2 = $('#num2').val();
// 		num2 = parseInt(num2);
// }

function change_background () {
	if (this.id == 'add'){
		$('#answer').css('background', 'red')
		//$('#add').css('background', 'red')
	}

	else if (this.id == 'subtract'){
		$('#answer').css('background', 'blue')
		//$('#subtract').css('background', 'blue')
	}

	else if (this.id == 'divide'){
		$('#answer').css('background', 'green')
		//$('#divide').css('background', 'green')
	}

	else if (this.id == 'multiply'){
		$('#answer').css('background', 'yellow')
		//$('#multiply').css('background', 'yellow')
	}
	
}



function add () {
	var num1 = $('#num1').val();
		num1 = parseInt(num1);

	var num2 = $('#num2').val();
		num2 = parseInt(num2);

	var d = num1 + num2;

	console.log(d);

	$('#answer').text('You just added ' + num1 + ' and ' + num2 + ' and got ' + d + '.');

	var f = $('<div>');
	var g = (num1 + '+' + num2 + '=' + d);
	$('#history').prepend(f);
	f.text(g);


}

function subtract () {
	var num1 = $('#num1').val();
		num1 = parseInt(num1);

	var num2 = $('#num2').val();
		num2 = parseInt(num2);

	var d = num1 - num2;
	
	console.log(d);

	$('#answer').text('You just subtracted ' + num1 + ' and ' + num2 + ' and got ' + d + '.');
	
	var f = $('<div>');
	var g = (num1 + '+' + num2 + '=' + d);
	$('#history').prepend(f);
	f.text(g);

}

function multiply () {
	var num1 = $('#num1').val();
		num1 = parseInt(num1);

	var num2 = $('#num2').val();
		num2 = parseInt(num2);

	var d = num1 * num2;
	
	console.log(d);

	$('#answer').text('You just multiplied ' + num1 + ' and ' + num2 + ' and got ' + d + '.');
	
	var f = $('<div>');
	var g = (num1 + '+' + num2 + '=' + d);
	$('#history').prepend(f);
	f.text(g);

}

function divide () {
	var num1 = $('#num1').val();
		num1 = parseInt(num1);

	var num2 = $('#num2').val();
		num2 = parseInt(num2);

	var d = num1 / num2;
	
	console.log(d);

	$('#answer').text('You just divided ' + num1 + ' and ' + num2 + ' and got ' + d + '.');

	var f = $('<div>');
	var g = (num1 + '+' + num2 + '=' + d);
	$('#history').prepend(f);
	f.text(g);

}

function clear () {
	$('#answer').text(' ');
	$('#num1').val('');
	$('#num2').val('');
}
