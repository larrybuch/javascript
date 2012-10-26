$(function() {


$('#add').click(add);

});

function add () {
	var first_num = $('#first_num').val();
		first_num = parseInt(first_num);

	var second_num = $('#second_num').val();
		second_num = parseInt(second_num);

	var total = first_num + second_num;

		console.log(total);

		$('#total').val(total);
}