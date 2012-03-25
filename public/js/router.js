define(['jquery', 'backbone', 'dv'], function ($, Backbone, dv) {

	/**
	 * Backbone.Router provides methods for routing client-side pages, and connecting them to actions and events.
	 * router.navigate does not support the history API's stateObject
	 */
	return Backbone.Router.extend({
		routes: {
			'': 'home'
			, '/': 'home'
			, ':section': 'section'
			, '*action': 'defaultAction'
		}


		, home: function () {
			console.log('hit the home');
			this.navigate('borrowers');
		}


		, section: function (section) {
			console.log('update Section Called: ' + section);
			if (_.indexOf(sections, section) > -1) {
				this.getSection(section);
			}
		}


		, defaultAction: function () {
			console.log('no route');
			this.home();
		}


		, initialize: function () {
			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}

		}
	});
});