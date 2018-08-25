
$('#hamburger').click(function(){

	$('header nav').toggleClass('open');
	
});

$('a.gallery').featherlightGallery({
		previousIcon: '«',
		nextIcon: '»',
		galleryFadeIn: 300,
		openSpeed: 300,
		iframeWidth: 800,
		iframeHeight: 600
	});

$('.single-item').slick({
	autoplay: true,
	autoplaySpeed: 4000,
	fade: true,
	speed: 1000,
	infinite: true,
	arrows: false
});

$("#link-cws").click(function(){
	$('html, body').animate({
		scrollTop:$('.coursework-samples').offset().top
		},2000);
  
} );

$("#link-new-skills").click(function(){
	$('html, body').animate({
		scrollTop:$('.my-new-skills').offset().top
		},2000);
  
} );

$("#link-contact").click(function(){
	$('html, body').animate({
		scrollTop:$('.contact-me').offset().top
		},2000);
  
} );


// $('a.gallery').featherlight({ iframeWidth: 500,
// 	iframeHeight: 300});



// Lightbox for Coursework samples - Featherlight?
// Rollover/hover effect for coursework

// Links for navigation to different sections of the page

// ?? Turn ‘My new skills’ section into a slider/ Jay quotes into a slider





// $('#answer1, #answer2, #answer3').slideUp();

// $('#question1').click(
// 	function() {
// 		$('#answer1').slideToggle();
// 		$('#arrow1').toggleClass('turn-arrow');
// 		$('#answer2, #answer3').slideUp();
// 	}
// );

// $('#question2').click(function() {
// 	$('#answer2').slideToggle();
// 	$('#arrow2').toggleClass('turn-arrow');
// 	$('#answer1, #answer3').slideUp();
// });

// $('#question3').click(function() {
// 	$('#answer3').slideToggle();
// 	$('#arrow3').toggleClass('turn-arrow');
// 	$('#answer1, #answer2').slideUp();
// });
