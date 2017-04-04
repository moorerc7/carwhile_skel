// strict mode
'use strict';

// Sticky Nav Feature
$(document).ready(function () {
	if ($(window).scrollTop() !== 0) {
		$('.header_v2').addClass('sticky');
	}

	$(window).on('scroll' || 'touchmove', function() {
		$('.header_v2').addClass('sticky');
		if ($(this).scrollTop() == 0) {
			$('.header_v2').removeClass('sticky');
		}
	});
});

// window size test
$(document).ready(function() {
	if (window.matchMedia("(min-width: 400px)").matches) {
		console.log('I should add sticky now');
	} else {
		console.log('dont add sticky');
	} 
})