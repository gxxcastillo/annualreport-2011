define(['jquery', 'backbone', 'dv'], function ($, Backbone, dv) {

	/**
	 * Backbone.Router provides methods for routing client-side pages, and connecting them to actions and events.
	 * router.navigate does not support the history API's stateObject
	 */
	return Backbone.Router.extend({
		routes: {
			':section': 'showSection'
			, '*action': 'defaultAction'
		}


		, showSection: function (section) {
			$.getJSON('/' + section + '?raw=1', function (results) {
				// @todo not sure if this is the best way to pass the section name to view
				results.name = section;

				// Announce that we've got new content
				dv.publish('get.section.dv', results);
			});
		}

		, defaultAction: function () {
			console.log('no route:');
			this.navigate('borrowers');
		}


		, initialize: function () {
			//Wait for domReady, IE history fallback relies on an iframe.
			$(Backbone.history.start({pushState: true /*, silent: true */}));
		}
	});
});