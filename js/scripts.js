
$("#scrollHome").fadeOut(0);

$('#hamburger').click(function(){

	$('header nav').toggleClass('open');
	
});

$(window).on( 'scroll', function(){
	console.log( $(window).scrollTop() );
	  
	if( $(window).scrollTop() > $('.top-photo').offset().top ){
	     $("#scrollHome").fadeIn(1000);
	}else{
	     $("#scrollHome").fadeOut(1000);
    }
	  
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

function scrollToTop() {
	$('html, body').animate({
		scrollTop:$('#header').offset().top
		}, 2000);
}


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