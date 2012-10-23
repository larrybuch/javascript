$(function() {

var response = prompt ('Do you want to create (a)nimals, (c)olors, (p)eople or (q)uit?')

var animals = [];
var colors = [];
var people = [];
	
while(response != 'q')
{

	if(response == 'a') 
	{
		var amount = prompt ('How many?');
		amount = parseInt(amount);

		//turn amount into number
		//use number to run animal_enter that number of times, then move on to next question
		//For loop?

		for (var i = 0; i < amount; i++)

		var animal_enter = prompt ('Enter your animals');
		animals.push(animal_enter);

		console.log(animals);
	}
	else if (response == 'c')
	{
		amount = prompt ('How many?');
		amount = parseInt(amount);

		//here I need to take the parsed number and display that many animal_enter prompts
		for (var i = 0; i < amount; i++)

		var color_enter = prompt ('Enter your colors');
		colors.push(color_enter);

		console.log(colors);

	}
	else if (response == 'p')
	{
		amount = prompt ('How many?');
		amount = parseInt(amount);

		//here I need to take the parsed number and display that many animal_enter prompts
		for (var i = 0; i < amount; i++)

		var people_enter = prompt ('Enter your people');
		people.push(people_enter);

		console.log(people);

	}

	var remove = prompt ('Do you want to delete something? (y)es or (n)o');

	if(remove != 'n') 
	{
		var question = prompt ('What do you want to delete? (a)nimal, (c)olors, or (p)eople?');

		if (question == 'a')
		{
			console.log(animals);
			var remove_ent = prompt ('What animals would you like to remove?');

			//here I need to take the entered animals and delete them from the array

			remove_ent = animals.splice(remove_ent);
			console.log(animals);
			console.log(remove_ent + ' has been deleted.')
		}	


		else if (question == 'c')
		{
			console.log(colors);
			var remove_col = prompt ('What colors would you like to remove?');

			//here I need to take the entered animals and delete them from the array

			remove_col = animals.splice(remove_col);
			console.log(animals);
			console.log(remove_col + ' has been deleted.')

		}


		else if (people == 'p')
		{
			console.log(people);
			var remove_peo = prompt ('What people would you like to remove?');

			//here I need to take the entered animals and delete them from the array

			remove_peo = animals.splice(remove_peo);
			console.log(people);
			console.log(remove_peo + ' has been deleted.')
		}
	}

response = prompt ('What do you want to create now: (a)nimals, (c)olors, (p)eople or (q)uit?');

}



console.log ('Here are your animals. ' + animals)
console.log ('Here are your colors. ' + colors)
console.log ('Here are your people. ' + people)


});


// Do you want to create (a)nimals, (c)olors, or (p)eople or do you want to (q)uit?

// three arrays []

// color - how many?
// 3
// Enter your color
//    - add that to the color array
// Enter your color
//    - add that to the color array
// Enter your color
//    - add that to color array


// What do you want to create now?
// Enter your animal
//     - add to array
// Enter animal
//     - add to array

// _______

// Do you want to delete something? (or QUIT)
// Yes or No

// What? (animal, color or person)
// Color

// Show all colors they've typed in
// Type in what they want to delete
// Green

// Delete green

// ________

// Here are your arrays
// Colors
// Animals
// People



// WHILE LOOP and FOR LOOP