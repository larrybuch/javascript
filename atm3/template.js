var balance1 = 1000;
var balance2 = 1000;

$(function() {

$('#d1').click(deposit1);
$('#w1').click(withdraw1);

$('#d2').click(deposit2);
$('#w2').click(withdraw2);

});

function deposit1()
{
	var amount1 = $('#a1').val();
	var	t = parseInt(amount1);
	balance1 = balance1 + t;
	$('span').text('$' + balance1);

	if(balance1 >0){
		$('#balance1').css('background', 'white');
	}
}

function withdraw1()
{
	var amount1 = $('#a1').val();
	var	t = parseInt(amount1);
	balance1 = balance1 - t;
	$('span').text('$' + balance1);

	if(balance1 < 0){
		$('#balance1').css('background', 'red');
	}

}


function deposit2()
{
	var amount2 = $('#a2').val();
	var	t = parseInt(amount2);
	balance2 = balance2 + t;
	$('span').text('$' + balance2);

	if(balance2 >0){
		$('#balance2').css('background', 'white');
	}
}

function withdraw2()
{
	var amount2 = $('#a2').val();
	var	t = parseInt(amount2);
	balance2 = balance2 - t;
	$('span').text('$' + balance2);

	if(balance2 < 0){
		$('#balance2').css('background', 'red');
	}

}





