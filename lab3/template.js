$(function() {

	$('#b1').click(popup);

});

function popup()
{
	//alert('you just pressed the button');
	var t = $('#t1').val();
	console.log('you typed in ' + t);

	var n = parseInt(t);
	var z = cube(n);
	$('#i2').text(z);

	if(z > 100) 
	{
		$('#i2').css('color', 'red');
		$('#i2').css('font-size', '20px');
	}
	else
	{
		$('#i2').css('color', 'blue');
		$('#i2').css('font-size', '8px');
	}

	for(var i = 0; i < z; i++)
		console.log('counting: ' + i);
}

function cube(x) 
{
	return x * x * x;
}

