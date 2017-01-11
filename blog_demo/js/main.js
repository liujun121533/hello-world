;$(function()
{
	'use strict';

	var sidebar = $('#sidebar'),
		mask = $('.mask'),
		back2top = $('.back2top'),
		sidebar_trigger = $('#sidebar_trigger');

    function ShowSidebar()
    {
		mask.fadeIn('slow/400/fast', function() {	
		});
		sidebar.animate({'right': 0});
	}

	function HideSidebar()
	{
		mask.fadeOut('slow/400/fast', function() {
			
		});
		sidebar.animate({'right': -sidebar.width()});

	}

	sidebar_trigger.on('click',ShowSidebar)
	mask.on('click',HideSidebar)
	// $(window).on('scroll',HideSidebar)
	back2top.on('click', function(event) {
		$('html,body').animate({
		scrollTop: 0
	    }, 800)
	});

	$(window).on('scroll', function() {

		if ($(window).scrollTop() > $(window).height()) {
			back2top.fadeIn();
			// sidebar.fadeOut();
			// mask.fadeOut();
		}
		else
			back2top.fadeOut();
		//back2top.fadeOut();
	})

	$(window).trigger('scroll');

})

