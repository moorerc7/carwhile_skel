// strict mode
'use strict';

/*--------------------------------------HEADER---------------------------------------*/

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
	$('.header_v2').on('click', '.menu_button_label', function() {
		console.log('button works!');
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		$(this).closest('.header_v2').find('.nav_panel_mobile').toggleClass('expand');
		$(this).closest('body').toggleClass('expand');
	});
})

/*--------------------------------------LOGIN PAGE---------------------------------------*/

// SWITCH BETWEEN LOGIN AND SIGN UP FORMS
$(document).ready(function() {
	$('.login_tabs_container').on('click', 'label', function() {
		console.log('LOGIN / SIGNUP BUTTON WORKS');
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		$(this).parent('li').toggleClass('is_active');
		$(this).parent('li').siblings().toggleClass('is_active');
	})
})