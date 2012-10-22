$(function() {

	var z = prompt('enter a number');
	z = parseInt(z);
	var y = square(z);
	console.log('the square of ' + z + ' is ' + y);

	var a = volume(3, 5, 7);
	var b = volume(4, 6, 2);
	var c = volume(2, 3, 6);

	console.log('the volume of a is ' + a);
	console.log('the volume of b is ' + b);
	console.log('the volume of b is ' + c);

});

function square(x)
{
	var s = x * x;
	return s;
}

function volume(l, w, h)
{
	return l * w * h;
}