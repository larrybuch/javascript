var array = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];
var array_check = [];
var selected = null;
var counter = 0;

$(function() {

$('#small').click(createBoard);
$('#small').click(randomizeArray);
$('.card').click(selected);
$('#game').on('click', '.card', toggle_select_color);

});

function createBoard (){
	//make divs until they equal 10
	for (var i = 0; i < 10; i++) 
	{
	var d = $('<div>');
	$('#game').append(d);
	d.addClass('card');

	//add this line on click so it can't be seen in source?
	d.text(array[i]);
	}

	counter++;
	setInterval(display_clock, 1000);
}

function display_clock (){
	$('#clock').text(counter);
	counter++;
}

function toggle_select_color (){
	//if these two things are different, do this code.
	if(selected != this)
	//selected color = null, remove it's class 
	{
		$(selected).removeClass('selected');
		//redefine selected color
		selected = this;
		//take selected color and add class
		$(selected).addClass('selected');

		var s = $('.selected').text();
		//console.log(s);

		//taking selected objects and storing them in an array
		array_check.push($('.selected').text());
		var lastEl = array_check[array_check.length-2];

		console.log(lastEl);
		console.log(this);

		//checking the selected object against the last added to the array
		//adding class of match on selected
		if (s == lastEl) {
			$(this).addClass('match');
			//$(lastEl).addClass('match');
		}

		else {
			$('.selected').removeClass('match');
		}



	}
	//remove selection
	else
	{
		$(selected).removeClass('selected');		
		selected = null;
	}
} 

//store previous selected value then check it against current selection.
//if == then add class



//Randomize the Cards
function randomizeArray(array){
  var i = array.length;
  if (i == 0) return false;
  while (--i){
     var j = Math.floor(Math.random() * (i + 1));
     var tempi = array[i];
     var tempj = array[j];
     array[i] = tempj;
     array[j] = tempi;
  }
    return array;

}
  





//var match = $(this).text('');

/*  function function_name () {

	if text.selected == text.previous selected 
	then add class .match
	
	else remove class from both

} */
