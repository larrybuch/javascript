/*

Search Flickr
Get Results
Add timer ... ?

*/

var i;

$(function() {

	$('#add').click(search_flickr);

});

function search_flickr(){	
	//get text out of text box
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7fd76f4cd36a0c263664af8c0c0741e7&text=' + search + '&per_page=10&page=&format=json&jsoncallback=?', flickrResults);
}

function flickrResults (data) {
	$.each(data.photos.photo, getPhoto);
	i = setInterval(getPhoto, 100);
}

function display_more () {
	
}

function getPhoto (index, item) {
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
		div.addClass('photo');
	var img = $('<img>');
		//adding variable src into img src
		img.attr('src', src);
		div.prepend(img);
		$('#photos').prepend(div);
}





//Get Photos
//Start Counter and add photo every second



// var counter = 0;

// $(function() {

// 	//setTimeout(display_text, 3000);
// 	setInterval(display_more, 10);

// });

// function display_more ()
// {
// 	var d = $('<div>');
// 	$('#test').prepend(d);
// 	d.addClass('funky');
// 	counter++;

// 	var color1 = counter % 256;	
// 	var color2 = (counter * 5) % 256;
// 	var color3 = (counter * counter) % 256;

// 	var color_string = 'rgb('+ color1 +', '+ color2 +', '+ color3 +')';
// 	d.css('background-color', color_string)
// }

// function display_text ()
// {
// 	$('#test').text('Hello World.')
// }