var image = '<img src="images/mario.png" alt="">'

// Create the game layout

for( var i = 0; i < 35; i++) {
  
  $('.game').append('<div id="box-' + i + '" class="grid-box">' + image + '</div>');
  
}

// Assign the player position active

$('#box-0').addClass('active');

var playerPosition = 0;

// Set up key listener


$(document).keydown(function(event) {
  
  switch(event.which) {
    case 37: //left
      console.log('Left');
      if(playerPosition % 7 !== 0){
        
        playerPosition = playerPosition - 1;
        
        $('.grid-box').removeClass('active');
        
        $('#box-' + playerPosition).addClass('active');
         }
    break;
    
    case 38: //up
      console.log('Up');
      if(playerPosition > 6 ){
        
        playerPosition = playerPosition - 7;
        
        $('.grid-box').removeClass('active');
        
        $('#box-' + playerPosition).addClass('active');
         }
    break;
      
    case 39: //right
      console.log('Right');
      
      if((playerPosition - 6) % 7 !== 0 ){
        
        playerPosition = playerPosition + 1;
        
        $('.grid-box').removeClass('active');
        $('.grid-box img').removeClass('right');
        
        $('#box-' + playerPosition).addClass('active');
        $('#box-' + playerPosition + ' img').addClass('right');
         }
    break;
      
    case 40: //down
      console.log('Down');
      if(playerPosition < 28 ){
        
        playerPosition = playerPosition + 7;
        
        $('.grid-box').removeClass('active');
        
        $('#box-' + playerPosition).addClass('active');
         }
    break;
  }
  
});