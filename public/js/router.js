define(['jquery', 'backbone', 'dv'], function ($, Backbone, dv) {

	// Store the current section
	// @todo, make currentSection non-static
	var currentSection = ''

	// @todo, this is also set on the server side, should only be set in one spot
	// Purpose of this is to set a sequential "order"
	, sections = [
		'borrowers'
		, 'lenders'
		, 'partners'
		, 'site'
		, 'ecosystem'
		, 'stories'
		, 'press'
		, 'finances'
	]

	// @todo, like the sections array, this is a matter of state.  Where should we be saving this state?
	, renderedSections = [];


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


		/**
		 * Getter & setter for the currentSection
		 */
		, activeSection: function (section) {
			if (section) {
				return currentSection = section;
			}

			return currentSection;
		}


		, renderedSections: function (section) {
			if (section) {
				if (_.indexOf(renderedSections, section) == -1) {
					renderedSections.push(section);
				}
			} else {
				return renderedSections;
			}
		}


		, isRendered: function (section) {
			return _.indexOf(renderedSections, section) > -1;
		}


		/**
		 * The route for navigating to a section.
		 *
		 * @todo. pass param for scrolling?
		 */
		, goToSection: function (section) {
			this.activeSection(section);

			// @trigger an event that tells the view to update
			dv.publish('goTo.section.dv', section);
		}


		/**
		 * @todo this should probably go in some dv ajax module
		 * @todo what should this url look like?  What should it look like if requesting multiple sections?
		 *
		 * Does an ajax request for a section.
		 */
		, getSection: function (section, doGo) {
			doGo = typeof doGo == 'undefined'
				? true
		        : doGo;

			var routerObj = this;

			// Check to see if this section has already been rendered
			// @todo - better checking if the section is being rendered
			// @todo - what if the we've requested the section and just haven't rendered it
			if (!section || (_.indexOf(renderedSections, section) > -1)) {
				return;
			}

			$.getJSON('/' + section + '?raw=1', function (results) {
				// @todo not sure if this is the best way to pass the section name to view
				results.name = section;

				dv.publish('get.section.dv', results);

				if (doGo) {
					routerObj.goToSection(section);
				}
			});
		}


		/**
		 *
		 */
		, getNextSectionName: function () {
			var i = _.indexOf(sections, currentSection);
			return sections[i+1];
		}



		/**
		 * Get the next section
		 *
		 * @params {Bool} [doGo]
		 */
		, getNextSection: function (doGo) {
			this.getSection(this.getNextSectionName(), doGo);
		}


		/**
		 *
		 */
		, getPrevSectionName: function () {
			var i = _.indexOf(sections, currentSection);
			return sections[i-1];
		}


		/**
		 * Get the previous section
		 *
		 * @params {Bool} [doGo]
		 */
		, getPrevSection: function (doGo) {
			this.getSection(this.getPrevSectionName, doGo);
		}


		/**
		 * Get all sections up to the section provided
		 *
		 * @params {String} from
		 * @params {String} [to]
		 * @params {String} [goToSection]
		 *
		 * @todo request an array of each element I am requesting
		 *
		 */
		, getSectionsUpFrom: function (from, to, goToSection) {
			to = to || currentSection;

			var fromIndex = _.indexOf(sections, from)
			, toIndex = _.indexOf(sections, to)
			, sectionsToRequest;

			// @todo add some kind of messaging?
			if (fromIndex + toIndex < 0) {
				return;
			}

			sectionsToRequest = sections.splice(fromIndex, toIndex);

			if (!_.isArray(sectionsToRequest)) {
				return;
			}

			this.getSections(sectionsToRequest);

		}


		/**
		 * @todo can this be combined with getSectionsUpFrom
		 * Get all sections that come up after the section provided
		 *
		 * @params {String} to
		 * @params {String} [from]
		 * @params {String} [goToSection]
		 */
		, getSectionsUpTo: function (to, from, goToSection) {
			from = from || currentSection;

			var toIndex = _.indexOf(sections, to)
			, fromIndex = _.indexOf(sections, from)
			, sectionsToRequest;

			// @todo add some kind of messaging
			if (toIndex + fromIndex < 0) {
				return;
			}

			sectionsToRequest = sections.splice(toIndex, fromIndex);

			if (!_.isArray(sectionsToRequest)) {
				return;
			}

			this.getSections(sectionsToRequest);
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