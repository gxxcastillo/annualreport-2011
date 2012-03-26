// ---- The router is also the "Controller" for now ----

define(['jquery', 'underscore', 'backbone', 'dv'], function ($, _, Backbone, dv) {
	// @todo %hack% in order to manually fire a "change:isActive" event on page load
	var initialPageLoad = true;

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
			var section = this.sections.get(sectionId);

			if (section) {
				this.sections.setActive(sectionId);

				// @todo %hack% WHY WONT THIS TRIGGER??
				var sec = this.sections;
				window.setTimeout(function () {
					sec.trigger('change:isActive', [sec.getActive(), true]);
				}, 700);

			} else {
				console.log('showSection: failed getting section, ' + sectionId);
				this.defaultAction();
			}
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

			var routerObj = this

			// Store a local reference to the sections collection
			, sections = this.sections = options.annualReport.sections

			// Store a local reference to the views that need updating
			, mainView  = this.mainView = options.layoutView.mainView
			, sidebarView = this.sidebarView = options.layoutView.sidebarView;

			// Set the default Section
			this.defaultSection = options.annualReport.defaultSection;

			if (Modernizr.history) {
				Backbone.history.start({pushState: true /*, silent: true */});
			} else {
				// Wait for domReady (Non-history fallback relies on an iframe)
				$(Backbone.history.start({pushState: true /*, silent: true */}));
			}

			// Set up the various events
			sections.on('change:isActive', function (model, value) {
				// We only care about the element that is being set active
				if (value == true) {
					routerObj.navigate(model.id);

					sidebarView.render(model.id);

					mainView.scrollTo(model.id);
				}
			});

			if (! options.annualReport.renderAll) {
				// If we are rendering all sections on page load, this will never fire

				dv.on('render.sectionView', function (id) {
					sections.get(id).isRendered = true;
				});
			} else {
				// @todo - this is lame, we are just assuming the all rendered.
				// Since at this point the views all rendered, its too late to bind to any event they fire while rendering

				_.each(sections.models, function (section) {
					sections.get(section.id).isRendered = true;
				});
			}

			// Bind the key events to allow for browsing via the keyboard
			$(document).keydown(function (e) {
				var goTo;

				// Return if not up or down arrow keys
				if (_.indexOf([38, 40], e.keyCode) < 0) {
					return;
				}

				e.preventDefault();

				// Get the next/prev tab
				if (e.keyCode == 38) {
					sections.setPrevActive();
				} else if (e.keyCode == 40) {
					sections.setNextActive();
				}

			});
		}
	});
});