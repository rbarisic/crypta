isVisible = function(element) { return $(element).css('display') != "none" }


$(document).on('ready page:load',function() {

	$('#hover-button').on('click', function() {
		if (!isVisible('#hover-menu *.hidden')) {
			$('#hover-menu *.hidden').fadeIn(100);
			$('#hover-button').html('<i class="fa fa-fw fa-close"></i>');
		}
		else {
			$('#hover-menu *.hidden').fadeOut(100);
			$('#hover-button').html('<i class="fa fa-fw fa-navicon"></i>');
		}
	})
	$(window).on('click', function() {
		if( isVisible('#hover-menu') && !$('#hover-menu').is(':hover')) {
			$('#hover-menu *.hidden').fadeOut(100);
			$('#hover-button').html('<i class="fa fa-fw fa-navicon"></i>');
		}
	});
});