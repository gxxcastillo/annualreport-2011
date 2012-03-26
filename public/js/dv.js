// Exposing dv as a Global, mainly to allow for easing testing on the command line
// @todo revisit exposig dv as a Global
var dv;

define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
	'use strict';

	var $obj = $({}) // used for jQuery events

	, dv = {
		url: {
			host: window.location.host
		}
	}

	// @todo - For testing (jQuery events vs. Backbone events)
	, usejQueryEvents = true;

	if (usejQueryEvents) {
		_.extend(dv, {
			trigger: function () {
				$obj.trigger.apply($obj, arguments);
			}


			, on: function () {
				$obj.on.apply($obj, arguments);
			}


			, off: function () {
				$obj.off.apply($obj, arguments);
			}
		});
	} else {
		_.extend(dv, Backbone.Events)
	}

	window.dv = dv;
	return dv;
});