// strict mode
'use strict';

// // Sticky Nav Feature first try
// $(document).ready(function () {
// 	if ($(window).scrollTop() !== 0) {
// 		$('.header_v2').addClass('sticky');
// 	}

// 	$(window).on('scroll' || 'touchmove', function() {
// 		$('.header_v2').addClass('sticky');
// 		if ($(this).scrollTop() == 0) {
// 			$('.header_v2').removeClass('sticky');
// 		}
// 	});
// });

// Sticky nav feature
$(document).ready(function() {
	if (window.matchMedia("(min-width: 550px)").matches) {
		console.log('I should add sticky now');
		if ($(window).scrollTop() !== 0) {
			$('.header_v2').addClass('sticky');
		}
		$(window).on('scroll' || 'touchmove', function() {
			$('.header_v2').addClass('sticky');
			if ($(this).scrollTop() == 0) {
				$('.header_v2').removeClass('sticky');
			}
		});
	} else {
		console.log('dont add sticky');
	} 
});