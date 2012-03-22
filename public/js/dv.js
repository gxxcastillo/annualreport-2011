define(['jquery', 'underscore', 'jquery.masonry', 'jquery.colorbox'], function ($, _) {
	'use strict';

	var $obj = $({})

	, dv = {
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

	return dv;
});