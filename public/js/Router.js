// ---- The router is also the "Controller"  ----

define(['jquery', 'underscore', 'backbone', 'dv'], function ($, _, Backbone, dv) {

	/**
	 * Backbone.Router provides methods for routing client-side pages, and connecting them to actions and events.
	 * router.navigate does not support the history API's stateObject
	 */
	return Backbone.Router.extend({
		routes: {
			'': 'home'
			, '/': 'home'
			, ':section': 'goToSection'
			, '*action': 'defaultAction'
		}


		/**
		 * @todo add ability to get new sections from the server
		 *
		 * Tells the sections collection to update.
		 * (We use the sections collection for managing state)
		 *
		 * @params {String} sectionId
		 */
		, goToSection: function (sectionId) {
			var section = this.sections.get(sectionId);

			if (section) {
				this.sections.setActive(sectionId);
			} else {
				console.log('goToSection: failed getting section, ' + sectionId);
			}
		}


		, home: function () {
			this.navigate('borrowers');
		}


		, defaultAction: function () {
			console.log('no route');
			this.home();
		}


		, initialize: function (options) {
			// Store a local reference to the sections collection
			this.sections = options.sections;

			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}

			// Set up the various events
			this.sections.on('change:isActive', function (model, value, options) {
			});

		}
	});
});