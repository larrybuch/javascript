$(function() {

$('#add').click(search_flickr);

});

function search_flickr(){	
	//get text out of text box
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7fd76f4cd36a0c263664af8c0c0741e7&tags=' + search + '&format=json&jsoncallback=?', flickrResults);
}

function flickrResults (data){
	$.each(data.photos.photo, getPhoto);
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