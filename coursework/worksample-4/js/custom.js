/*
Creat a function to count up a tennis score. When one player wins, change the board title to display the winner.
*/

var scoresArray = ['Love','15','30','40','Game'];

var scorePlayer1 = 0;
var scorePlayer2 = 0;


$('#p1-point').click(function(){
	player1game();
});
$('#p2-point').click(function(){
	player2game();
});

function player1game() {
	scorePlayer1++;

	console.log( scorePlayer1 );
	
	if (scorePlayer1 == 5 && scorePlayer2 == 3) {
	
	}

	else if (scorePlayer1 == 3 && scorePlayer2 == 3) {
		// $('#p1score').text( scoresArray[ scorePlayer1 ] );
		console.log('Yes');
		$('#p1score, #p2score').text( 'Deuce');
	} else {
		$('#p1score').text( scoresArray[ scorePlayer1 ] );
	}
}

function player2game() {
	scorePlayer2++;

	console.log( scorePlayer2 );

	$('#p2score').text( scoresArray[ scorePlayer2 ] );
}
