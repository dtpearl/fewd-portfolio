

var total = 0;

function addToTotal () {

	var newEntry = $('#newEntry').val();

	var newEntryNumber = parseFloat(newEntry);

	total = total + newEntryNumber;

	console.log(total);

	$('#total').text( '$' +total.toFixed(2));
	
	var htmlToAdd = '<tr><td>Item</td><td>$'+ newEntryNumber.toFixed(2) +'</td></tr>';

	$('#entries').append( htmlToAdd);
}


$(document).keypress(function(e) {

	if(e.which == 13) {
		e.preventDefault();
		//alert('You pressed enter!');
		addToTotal();
		$('#newEntry').val('');

	}

});