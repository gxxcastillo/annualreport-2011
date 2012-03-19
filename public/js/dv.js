define(['jquery', 'underscore', 'jquery.masonry', 'jquery.colorbox'], function ($, _) {
	'use strict';

	var $obj = $({});

	var $container = $('#main');

	// Enable jquery.masonry
	$container.masonry({
		itemSelector: '.block:not(.block .block, .hoverBlock)'
		, columnWidth: 256
	});

	// Add colorbox clicks
	$container.on('click.colorbox', '.lightbox', function (e) {
		$.colorbox({href: '../img/990541.jpg'});
	});

	var dv = {
		url: {
			host: window.location.host
		}


		, publish: function () {
			$obj.trigger.apply($obj, arguments);
		}


		, subscribe: function () {
			$obj.on.apply($obj, arguments);
		}


		, unsubscribe: function () {
			$obj.off.apply($obj, arguments);
		}
	};

	dv.subscribe('render.blockView.dv', function ($event, $section) {
		$container.masonry('appended', $($section), true);
	});

	return dv;
});