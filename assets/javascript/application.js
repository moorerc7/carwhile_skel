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

// STICKY NAV FEATURE
$(document).ready(function() {
	if (window.matchMedia("(min-width: 550px)").matches) {
		console.log('I should add sticky now');
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
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
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
	} 
});

// MENU EXPAND FEATURE
$(document).ready(function() {
	// var navPanel = $(this).closest('.header_v2').find('.nav_panel_mobile');

	$('.header_v2').on('click', '.menu_button_label', function() {
		console.log('button works!');
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		$(this).closest('.header_v2').find('.nav_panel_mobile').toggleClass('expand');
		$(this).closest('body').toggleClass('expand');
	});
	// PREVENT SCROLLING ON IPHONE
	// $(window).on('touchmove', function(e) {
	// 	if ( $(this).closest('.header_v2').find('.nav_panel_mobile').hasClass('expand')) {
	// 		e.preventDefault();
	// 		alert('preventDefault is firing!');
	// 	}
	// });
})