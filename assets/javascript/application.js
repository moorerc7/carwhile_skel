// strict mode
'use strict';

// Sticky Nav Feature
$(document).ready(function () {
	if ($(window).scrollTop() !== 0) {
		$('.header_v2').addClass('sticky');
	}

	$(window).on('touchmove', function() {
		$('.header_v2').addClass('sticky');
		console.log('working');
		if ($(this).scrollTop() == 0) {
			$('.header_v2').removeClass('sticky');
		}
	});
});


