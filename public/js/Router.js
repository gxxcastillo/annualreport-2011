/**
 * Backbone Router
 * http://documentcloud.github.com/backbone/#Router
 *
 * Does the role of Router as well as Controller.
 * In Backbone, the views are the "controllers".
 *
 * @todo Find a better home for the app controller (Most of the code in the Router's initialize() method)
 *
 */
define(['jquery', 'underscore', 'backbone', 'dv'], function ($, _, Backbone, dv) {

	/**
	 * Backbone.Router provides methods for routing client-side pages, and connecting them to actions and events.
	 * router.navigate does not support the history API's stateObject
	 */
	return Backbone.Router.extend({

		// Set up our routes.
		routes: {
			'': 'home'
			, '/': 'home'
			, ':section': 'showSection'
			, '*action': 'defaultAction'
		}


		/**
		 * Tells the sections collection to update.  In turn, the controller will set appropriate section as "active"
		 *
		 * @params {String} sectionId
		 */
		, showSection: function (sectionId) {
			this.sections.setActiveById(sectionId, 'route');
		}


		/**
		 * @params {String} sectionId
		 */
		, redirect: function (sectionId) {
			this.navigate(sectionId);
			this.showSection(sectionId);
		}


		/**
		 * Redirects to the "defaultSection"
		 */
		, home: function () {
			this.redirect(this.defaultSection);
		}


		/**
		 * Handles unrecognized paths
		 */
		, defaultAction: function () {
			console.log('no route');
			this.home();
		}


		, initialize: function (options) {

			var router = this

			, appModel = options.appModel

			// Store a local reference to the sections collection
			, sections = this.sections = appModel.get('sections')

			// Store a local reference to the views that need updating
			, appView = this.appView = options.appView
			, mainView  = this.mainView = appView.mainView
			, sidebarView = this.sidebarView = appView.sidebarView;


			// Set the default Section
			this.defaultSection = appModel.get('defaultSection');


			// Bind to the sections "isLoaded" event, once loaded we can tell the view to append it.
			sections.on('change:isLoaded', function (sectionModel) {
				mainView.appendSection(sectionModel);
			});

			sections.on('change:isRendered', function (sectionModel, value) {
				var $sectionTitleBlocks;

				if (sectionModel.isActive()) {
					$sectionTitleBlocks = $('#main > section .sectionTitleBlock');

					// Scroll to the section that was just added
					mainView.scrollTo(sectionModel.id);

					// Remove any existing waypoints that are attached to the sectionTitles
					$sectionTitleBlocks.waypoint('remove');

					// Bind the waypoints
					$sectionTitleBlocks.waypoint(function (event, direction) {

						if (appModel.get('blockWaypointActivation')) {
							return;
						}

						var sectionId = event.target.parentNode.id;

						if (direction === 'down') {
							sections.setActiveById(sectionId, 'waypoint');
						} else {
							// If scrolling up, we want to activate the "previous" element instead
							sectionId = sections.prev(sections.get(sectionId));
							if (sectionId) {
								sections.setActiveById(sectionId, 'waypoint');
							}
						}
					}, {offset: '60%'});
				}
			});


			// Bind to the section Model's "isActive" change event
			sections.on('change:isActive', function (sectionModel, value) {
				var lastAlteredBy = sectionModel.get('lastAlteredBy');

				// We only care about the element that is being set active
				if (value === true) {

					// Change the url
					router.navigate(sectionModel.id);

					// Update the view
					appView.update();

					// Update the sidebar
					sidebarView.update(sectionModel);

					// Scroll to the section (But only the section's already "rendered")
					// We don't want to scroll if the change was triggered by waypoints (the user is already scrolling)
					if (sectionModel.isRendered() && lastAlteredBy !== 'waypoint') {
						mainView.scrollTo(sectionModel.id);
					}
				}
			});


			// Bind the key events to allow for browsing via the keyboard
			// Capture the j, J, k, or K keys
			$(document).keyup(function (e) {
				// Avoid collision with lightbox left/right key events
				if (appModel.get('lightboxIsOpen')) {
					console.log('open');
					return;
				}

				if (e.keyCode == 37) {
					// Capture the left arrow key
					sections.setPrevActive('key');
				} else if (e.keyCode == 39) {
					// Capture the right arrow key
					sections.setNextActive('key');
				} else {
					return;
				}

				// Make sure to prevent default AFTER confirming the corresponding keys were pressed
				e.preventDefault();
			});

			// Capture the left/right key presses
			$(document).keypress(function (e) {
				if (_.indexOf([74, 106], e.keyCode) > -1) {
					// Capture the 'J' and 'j', keys
					sections.setPrevActive('key');
				} else if (_.indexOf([75, 107], e.keyCode) > -1) {
					// Capture 'K' and 'k' keys
					sections.setNextActive('key');
				} else {
					return;
				}

				// Make sure to prevent default AFTER confirming the corresponding keys were pressed
				e.preventDefault();
			});

			// Instantiate backbone's routes + the history "pollyfill"
			// Since it sets the routes, it should be called last, after all the initialization has taken place
			// (Keep this in mind if ever moving this stuff into a separate Controller)
			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}
		}
	});
});