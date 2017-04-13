// strict mode
'use strict';
// LOAD GOOGLE MAP FOR SERVICE AREA

function initMap() {
    var dcCenter = {lat: 38.8895563, lng: -77.0352546};
    var map = new google.maps.Map(document.getElementById('map'), {
      streetViewControl: false,
      mapTypeControl: false,
      zoom: 11,
      center: dcCenter
    });
    var ctaLayer = new google.maps.KmlLayer({
      url: 'https://raw.githubusercontent.com/moorerc7/carwhile_skel/master/assets/files/service_map2.kml',
      map: map
    });
}


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

/*--------------------------------------HOME PAGE---------------------------------------*/

// VIEW AND EXIT COVERAGE AREA LIGHTBOX
$(document).ready(function() {
	$('.coverage_banner').on('click', 'button', function() {
		var hiddenLightbox = $(this).closest('article').next('article')
		console.log('COVERAGE BUTTON WORKS!');
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		hiddenLightbox.addClass('show');
		hiddenLightbox.find('#map').addClass('show_map');
		initMap();
		// google.maps.event.trigger(map, 'resize');
	});

	$('.coverage_lightbox_bg').on('click', '.lightbox_exit_label', function() {
		console.log('LIGHTBOX EXIT BUTTON WORKS!');
		// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		$(this).siblings('#map').removeClass('show_map');
		$(this).closest('article').removeClass('show');
	});
});

/*--------------------------------------LOGIN PAGE---------------------------------------*/

// SWITCH BETWEEN LOGIN AND SIGN UP FORMS
$(document).ready(function() {
	$('.login_tabs_container').on('click', '.login_label', function() {
		var loginTab = $(this).parent('li');
		var loginForm = $('.log_in_form');
		var siblingTab = $(this).parent('li').siblings();
		var signupForm = $('.sign_up_form');
		if (loginTab.hasClass('is_active') && !loginForm.hasClass('hidden_form')) {
			console.log('LOGIN POSITIVE IF STATEMENT WORKS!');
			// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		} else {
			console.log('LOGIN ELSE STATEMENT WORKS!');
			// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
			loginTab.toggleClass('is_active');
			loginForm.toggleClass('hidden_form');
			siblingTab.toggleClass('is_active');
			signupForm.toggleClass('hidden_form');
		}
	});

	$('.login_tabs_container').on('click', '.signup_label', function() {
		var signupTab = $(this).parent('li');
		var signupForm = $('.sign_up_form');
		var siblingTab = $(this).parent('li').siblings();
		var loginForm = $('.log_in_form');
		if (signupTab.hasClass('is_active') && !signupForm.hasClass('hidden_form')) {
			console.log('SIGNUP IF STATEMENT WORKS!');
			// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
		} else {
			console.log('SIGNUP ELSE STATEMENT WORKS!');
			// ABOVE LINE IS FOR TESTING BE SURE TO REMOVE ONCE DONE
			signupTab.toggleClass('is_active');
			signupForm.toggleClass('hidden_form');
			siblingTab.toggleClass('is_active');
			loginForm.toggleClass('hidden_form');
		}
	});
});