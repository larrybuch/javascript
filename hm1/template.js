$(function () {

	var animals = [];
	var colors = [];
	var people = [];

	var response = prompt ('(a)nimal, (p)eople or (c)olors or (q)uit?')

	while(response != 'q') 
	{
		var count = prompt('How many would you like?');
		count = parseInt(count);

		if(response == 'a')
		{
			for(var i = 0; i < count; i++)
			{
				var selection = prompt('Enter an animal.');
				animals.push(selection);
			}
		}

		else if(response == 'p')
		{
			for(var i = 0; i < count; i++)
			{
				var selection = prompt('Enter a color.');
				colors.push(selection);
			}

		}

		else if(response == 'c')
		{
			for(var i = 0; i < count; i++)
			{
				var selection = prompt('Enter a person.');
				people.push(selection);
			}

		}


		response = prompt ('(a)nimal, (p)eople or (c)olors or (q)uit?')
	}

	response = prompt('Do you hwant to remove a (c) (a) or (p) or (q)?');
	while(response != 'q')
	{
		if (response == 'a')
		{
			console.log(animals);
			var del = prompt('Which one do you want to delete?');
			var index = colors.indexOf(del);
			colors.splice(index, 1);
		}
		else if (response == 'p')
		{
			console.log(people);
			var del = prompt('Which one do you want to delete?');
			var index = people.indexOf(del);
			people.splice(index, 1);

		}
		else if (response == 'c')
		{
			console.log(animals);
			var del = prompt('Which one do you want to delete?');
			var index = animals.indexOf(del);
			animals.splice(index, 1);

		}

		response = prompt('Do you hwant to remove a (c) (a) or (p) or (q)?');
	}

	console.log('Here are your colors: ' + colors);
	console.log('Here are your people: ' + people);
	console.log('Here are your animals: ' + animals);

});