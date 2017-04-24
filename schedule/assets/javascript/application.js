// strict mode
'use strict';

/*--------------------------------------HEADER---------------------------------------*/

// STICKY NAV FEATURE
$(document).ready(function() {
	if (window.matchMedia("(min-width: 750px)").matches) {
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
});

// DROPDOWN MENU LINKING
$(document).ready(function() {
	var dropDown = $('header').find('.dropdown_select');
	$(dropDown).on('change', function() {
		console.log('the click worked');
		// ABOVE LINE IS FOR TESTING BESURE TO REMOVE ONCE DONE
		if (dropDown.val() == 'what-we-do') {
			dropDown.val('blank_option');
			window.location.href = "../what-we-do.html";
			// window.location.replace('what-we-do.html');
		} else if (dropDown.val() == 'who-we-are') {
			dropDown.val('blank_option');
			window.location.href = "../who-we-are.html";
			// window.location.replace('who-we-are.html');
		} else if (dropDown.val() == 'contact-us') {
			dropDown.val('blank_option');
			window.location.href = "../contact-us.html";
			// window.location.replace('contact-us.html');
		}
	});
})

/*--------------------------------------SCHEDULE HOME PAGE---------------------------------------*/

$(document).ready(function() {
	$('#services_slider').change( function() {
		console.log('SLIDER VALUE CHANGED!');
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		var cleaningList = $('.services_list_cleaning');
		var maintenanceList = $('.services_list_maintenance');
		if ($(this).val() == 0) {
			cleaningList.toggleClass('hide');
			maintenanceList.toggleClass('hide');
		} else if ($(this).val() == 1) {
			cleaningList.toggleClass('hide');
			maintenanceList.toggleClass('hide');
		}
	});
});