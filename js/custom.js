$(document).ready(function() {


	// BIND NAVIGATION TO SCROLL
	$(window).scroll(function(){
		$('#topmenu').toggleClass('scrolled', $(this).scrollTop() > 5);
		$('#topmenu-dropdown').toggleClass('scrolled', $(this).scrollTop() > 5);
		$('#responsive-nav').toggleClass('scrolled', $(this).scrollTop() > 5);
	});


	// MENU -> SUBMENU
	$('#navigation #submenu').hover(function() {
		$('#topmenu-dropdown').addClass('show');
		$('#topmenu-dropdown .close-trigger').mouseover(function() {
			$('#topmenu-dropdown').removeClass('show');
		});
	});


	// RESPONSIVE MENU
	$('#responsive-button').click(function() {
		$('#responsive-nav').toggleClass('show');
	});


	// SLIDESHOW
	function onBefore() {
		//$('#slideshow_text').html("Scrolling image:<br>" + this.src); 
		$('#slideshow-text').removeClass('show');
	} 
	function onAfter() { 
	    $('#slideshow-text').html('<h2>' + this.title + '</h2>' + '<hr />' + '<h5>' + this.alt + '</h5>' +
	    							'<br /><a href="#" class="btn btn-danger btn-lg">LET\'S START WORKING</a>');
	    $('#slideshow-text').addClass('show');
	}
	$('#slideshow').cycle({ 
	    fx:     'fade', 
	    timeout: 7000, 
	    before:  onBefore, 
	    after:   onAfter,
		slideResize: true,
		containerResize: false,
		width: '100%',
		fit: 1
	    //delay: -1000 
	});


});