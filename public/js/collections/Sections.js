require(['jquery', 'underscore', 'backbone', 'dv', 'SectionModel'], function ($, _, Backbone, dv, SectionModel) {
	return Backbone.Collection.extend({
		model: SectionModel

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
	});
});