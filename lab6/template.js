$(function(){
	
	$('#clear').click(changeText);
	$('#normal').dblclick(changeText);
	$('#big').hover(changeText);
	$('#small').hover(changeText);
	$('#reverse').hover(changeText, resetOutput);
	$('#black').click(changeBody);
	$('#yellow').click(changeBody);

	function changeText() 
	{
		var text = $('#inputSection input').val();
		var divId = $(this).attr('id');

			if (divId == 'clear') 
			{
				$('body').removeClass();
				$('#inputSection input').val('');
			}

			if (divId == 'normal' || divId == 'big' || divId == 'small') 
			{
				inputText(text, divId);
			}

			if (divId == 'reverse') 
			{	
				text = text.split('').reverse().join('');
				inputText(text, divId);
			}
	};

	function resetOutput ()
	{
		var text = $('#inputSection input').val();
		inputText(text, "reverse");
	}

	function changeBody() 
	{
		$('body').removeClass().addClass($(this).text().toLowerCase());
	}

	function inputText(text, id)
	{
		$('body').removeClass();
		var newClass = id === 'normal' ? '' : id;
		$('#output p').text(text).toggleClass(newClass);

	}

});
