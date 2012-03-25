require(['jquery', 'underscore', 'backbone', 'dv', 'NavItem', 'Section'], function ($, _, Backbone, dv, NavItem, Section) {

	var annualReportData = {
		title: 'dataviz'
		, meta: [
			{
				name: 'keywords'
				, content: 'blah blah blah blah blah blah'
			}
			, {
				name: 'description'
				, content: 'blah blah blah'
			}
		]
		, sectionOrder: [
			'borrowers'
			, 'lenders'
			, 'partners'
			, 'site'
			, 'ecosystem'
			, 'stories'
			, 'press'
			, 'finances'
		]
		, navItems: [
			{
				name: 'borrowers'
				, text: 'borrowers'
			}
			, {
				name: 'lenders'
				, text: 'lenders'
			}
			, {
				name: 'site'
				, text: 'web site'
			}
			, {
				name: 'partners'
				, text: 'partners'
			}
			, {
				name: 'ecosystem'
				, text: 'kiva ecosystem'
			}
			, {
				name: 'stories'
				, text: 'stories from the field'
			}
			, {
				name: 'press'
				, text: 'press & promotions'
			}
			, {
				name: 'fundraising'
				, text: 'fundraising'
			}
		]
		, sections: [
	    	{
			    name: 'borrowers'
	    		, title: 'Borrowers'
	    		, blocks: [
	    			{
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'profile'
	    				, cssClass: 'g1 h1'
	    				, img: '/img/blue.jpg'
	    				, username: 'Sean'
	    				, label: 'avg. time on site'
	    			}
	     			, {
	    				name: 'highlight'
	    				, cssClass: 'g1 h3'
	    				, img: '/img/deer.jpg'
	    				, link: ''
	    				, c1: 'Most friends recruited to Kiva'
	    				, c2: '140'
	    				, c3: 'Erin, Vancouer Canada'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'text'
	    				, label: 'the label'
	    				, cssClass: 'g1 h2'
	    				, value: ['change', 'good', 'support']
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '4.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'hTable'
	    				, cssClass: 'g2 h1'
	    				, dataset: [
	    					{
	    						label: 'Facebook'
	    						, datum: '30%'
	    					}
	    					, {
	    						label: 'Twitter'
	    						, datum: '10%'
	    					}
	    					, {
	    						label: 'Email'
	    						, datum: '40%'
	    					}
	    					, {
	    						label: 'Kiva Cards'
	    						, datum: '20%'
	    					}
	    				]
	    				, label: 'Popular ways to invite friends to Kiva (Shares per month)'
	    			}
	    			, {
	    				name: 'profile'
	    				, cssClass: 'g1 h1'
	    				, img: '/img/blue.jpg'
	    				, username: 'Sean'
	    				, label: 'avg. time on site'
	    			}
	     			, {
	    				name: 'highlight'
	    				, cssClass: 'g1 h3'
	    				, img: '/img/deer.jpg'
	    				, link: ''
	    				, c1: 'Most friends recruited to Kiva'
	    				, c2: '140'
	    				, c3: 'Erin, Vancouer Canada'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'text'
	    				, label: 'the label'
	    				, cssClass: 'g1 h2'
	    				, value: ['change', 'good', 'support']
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    		]
	    	}
	    	, {
				name: 'lenders'
	    		, title: 'Lenders'
	    		, blocks: [
	    			{
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'text'
	    				, label: 'the label'
	    				, cssClass: 'g1 h2'
	    				, value: ['change', 'good', 'support']
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'text'
	    				, label: 'the label'
	    				, cssClass: 'g1 h2'
	    				, value: ['change', 'good', 'support']
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'highlight'
	    				, cssClass: 'g1 h3'
	    				, img: '/img/deer.jpg'
	    				, context: 'Most friends recruited to Kiva'
	    				, datum: '140'
	    				, descriptor: 'Erin, Vancouer Canada'
	    				, link: '#'
	    			}
	    		]
	    	}
	    	, {
				name: 'site'
	    		, title: 'Web Site'
	    		, blocks: [
	    			{
	    				name: 'hTable'
	    				, cssClass: 'g2 h1'
	    				, dataset: [
	    					{
	    						label: 'Facebook'
	    						, datum: '30%'
	    					}
	    					, {
	    						label: 'Twitter'
	    						, datum: '10%'
	    					}
	    					, {
	    						label: 'Email'
	    						, datum: '40%'
	    					}
	    					, {
	    						label: 'Kiva Cards'
	    						, datum: '20%'
	    					}
	    				]
	    				, label: 'Popular ways to invite friends to Kiva (Shares per month)'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	     			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g2 h2'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    		]
	    	}
	    	, {
				name: 'partners'
	    		, title: 'Partners'
	    		, blocks: [
	    			{
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	     			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g3 h5'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    		]
	    	}
	    	, {
				name: 'ecosystem'
	    		, title: 'Kiva Ecosystem'
	    		, blocks: [
	    			{
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    					, cssClass: 'g1 h2'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	     			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g2 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h4'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h5'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    		]
	    	}
	    	, {
				name: 'stories'
	    		, title: 'Stories From the Field'
	    		, blocks: [
	    			{
	    				name: 'highlight'
	    				, cssClass: 'g2 h2'
	    				, img: '/img/stache.jpg'
	    //	only use when clicking adds a link			, link: 'http://google.com'
	    				, lightbox: [
	    					{
	    						href: '/img/blue.jpg'
	    						, title: 'blue.jpg'
	    					}
	    					, {
	    						href: '/img/deer.jpg'
	    						, title: 'deer.jpg'
	    					}
	    					, {
	    						href: '/img/fish.jpg'
	    						, title: 'fish.jpg'
	    					}
	    				]
	    				, c2: 'Photo highlights'
	    				, c3: 'Best Kiva photos from 2011'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	     			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g2 h2'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    		]
	    	}
	    	, {
				name: 'press'
	    		, title: 'Press & Promotions'
	    		, blocks: [
	    			{
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	     			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g2 h2'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    		]
	    	}
	    	, {
				name: 'finances'
	    		, title: 'Financial Health'
	    		, blocks: [
	    			{
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h3'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	     			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g2 h2'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    			, {
	    				name: 'dataMetric'
	    				, cssClass: 'g1 h1'
	    				, value: '5.5'
	    				, unit: 'Mins'
	    				, label: 'avg. time on site'
	    				, context: 'vs. 2010 5.1 mins'
	    			}
	    		]
	    	}
	    ]
	};


	return Backbone.Model.extend({

		/**
		 * Getter & setter for the currentSection
		 */
		activeSection: function (section) {
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
		 */
		, getSectionsUpTo: function (to, from) {
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

		, initialize: function () {
			var navItemsData = annualReportData.navItems
			, sectionsData = annualReportData.sections
			, navItems = []
			, sections = [];

			// Set up the navigation
			_.each(navItemsData, function (itemData, index) {
				navItems[index] = new NavItem(itemData);
			});

			// Set up the sections
			_.each(sectionsData, function (sectionData, index) {
				sections[index] = new Section(sectionData);
			});

			this.title = annualReportData.title;
			this.meta = annualReportData.meta;
			this.sections = sections;
			this.navItems = navItems;
		}
	});
});