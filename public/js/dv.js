// Exposing dv as a Global, mainly to allow for easing testing on the command line
// @todo revisit exposig dv as a Global
var dv;

define(['jquery', 'underscore'], function ($, _) {
	'use strict';

	var $obj = $({});

	// @todo ewe
	window.dv = {
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

	return window.dv;
});