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


		/**
		 * The route for navigating to a section.
		 */
		, showSection: function (section) {
			this.getSection(section);
		}


		/**
		 * @todo this should probably go in some dv ajax module
		 *
		 * Does an ajax request for a section.
		 */
		, getSection: function (section) {
			$.getJSON('/' + section + '?raw=1', function (results) {
				// @todo not sure if this is the best way to pass the section name to view
				results.name = section;

				dv.publish('get.section.dv', results);
			});
		}


		, defaultAction: function () {
			console.log('no route');
			this.navigate('borrowers', {trigger: true});
		}


		, initialize: function () {
			// Wait for domReady, IE history fallback relies on an iframe.
			// @todo use Modernizr to detct history support, if has native history support, no need to wait for domready
			$(Backbone.history.start({pushState: true /*, silent: true */}));
		}
	});
});