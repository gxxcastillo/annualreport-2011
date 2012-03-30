// ---- The router is also the "Controller" for now ----
// @todo break some of this out into a Controller

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
		 * @todo add ability to get new sections from the server
		 *
		 * Tells the sections collection to update.
		 * (We use the sections collection for managing state)
		 *
		 * @params {String} sectionId
		 */
		, showSection: function (sectionId) {
			this.sections.setActiveById(sectionId, 'route');
		}


		, redirect: function (sectionId) {
			this.navigate(sectionId);
			this.showSection(sectionId);
		}


		, home: function () {
			this.redirect(this.defaultSection);
		}


		, defaultAction: function () {
			console.log('no route');
			this.home();
		}


		, initialize: function (options) {

			var router = this

			// Store a local reference to the sections collection
			, sections = this.sections = options.annualReport.sections

			// Store a local reference to the views that need updating
			, mainView  = this.mainView = options.layoutView.mainView
			, sidebarView = this.sidebarView = options.layoutView.sidebarView;


			// Set the default Section
			this.defaultSection = options.annualReport.defaultSection;


			// Instantiate backbone's history "pollyfill"
			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}


			// Bind to the sections "isLoaded" event, once loaded we can tell the view to append it.
			sections.on('change:isLoaded', function (sectionModel, value) {
				mainView.appendSection(sectionModel);
			});


			sections.on('change:isRendered', function (sectionModel, value) {
				var $sectionTitleBlocks = $('#main > section .sectionTitleBlock');

				// Remove any existing waypoints that are attached to the sectionTitles
				//$sectionTitleBlocks.waypoint('remove');
/*
				// Bind new waypoints
				$sectionTitleBlocks.waypoint(function (event, direction) {
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

				}, {offset: '50%'});
*/
			});


			// Bind to the section Model's "isActive" change event
			sections.on('change:isActive', function (sectionModel, value) {
				var lastAlteredBy = sectionModel.get('lastAlteredBy')

				// We only care about the element that is being set active
				if (value === true) {
					// Change the url
					router.navigate(sectionModel.id);

					// Update the sidebar
					sidebarView.update(sectionModel);

					// Scroll to the section (But only the section's already "rendered")
					// We don't want to scroll if the change was triggered by waypoints (the user is already scrolling)
					if (sectionModel.get('isRendered') && lastAlteredBy !== 'waypoints') {
						mainView.scrollTo(sectionModel.id);
					}
				}
			});


			// Bind the key events to allow for browsing via the keyboard
			$(document).keydown(function (e) {

				// Return if not up or down arrow keys
				if (_.indexOf([38, 40], e.keyCode) < 0) {
					return;
				}

				e.preventDefault();

				// Get the next/prev tab
				if (e.keyCode == 38) {
					sections.setPrevActive('keydown');
				} else if (e.keyCode == 40) {
					sections.setNextActive('keydown');
				}

			});
		}
	});
});