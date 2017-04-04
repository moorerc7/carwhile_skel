// strict mode
'use strict';

// Sticky Nav Feature
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

// Sticky nav try 2
document.addEventListener("touchmove", ScrollStart, false);
document.addEventListener("scroll", Scroll, false);

function ScrollStart() {
    $('.header_v2').addClass('sticky');
    console.log('scrollStart working');
}

function Scroll() {
	$('.header_v2').addClass('sticky');
    console.log('scroll working for start');	
	if ($(this).scrollTop() == 0) {
		$('.header_v2').removeClass('sticky');
		console.log('scroll end working');
	}
}