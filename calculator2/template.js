var digit = null;
var num1 = 0;
var numbers = [0];

$(function() {

$('#b1').click(val);
$('#b2').click(val);
$('#b3').click(val);
$('#b4').click(val);
$('#b5').click(val);
$('#b6').click(val);
$('#b7').click(val);
$('#b8').click(val);
$('#b9').click(val);
$('#b0').click(val);

$('#bdec').click(dec);

$('#badd').click(number);
$('#bsub').click(number);
$('#bmul').click(number);

$('#bequ').click(equal);

});


function val () {
	digit = this.value;
	$('#answer').append(digit);
	console.log(digit);
}

function dec () {
	$('#answer').append('.');
}

function number () {
	var num1 = $('#answer').text();
		num1 = parseFloat(num1);

	var opp = this.value;

		$('#answer').text('');
		numbers.push(num1);
		numbers.push(opp);

		console.log(numbers);
}

function equal () {
	var num2 = $('#answer').text();
		num2 = parseFloat(num2);

	var selection = numbers.length - 2;
		console.log(selection);

	var operator = numbers.length - 1;
	var dothis = numbers[operator];
		console.log(dothis);

	var num1 = numbers[selection];

	if (dothis == '+') {
	var total = num1 + num2;
	}

	else if (dothis == '-') {
	var total = num1 - num2;
	}

	else if (dothis == '*') {
	var total = num1 * num2;
	}

$('#answer').text(total);

}




