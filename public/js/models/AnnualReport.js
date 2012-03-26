define(['backbone', 'NavItem', 'Section', 'Sections'], function (Backbone, NavItem, Section, Sections) {

	var annualReportData = {
		title: 'dataviz'

		// Render all the sections on page load
		, renderAll: true

		// Can be "client" or "server".
		, renderer: 'client'

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
		, defaultSection: 'borrowers'
		, sections: [
	    	{
			    id: 'borrowers'
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
	    				, userName: 'Sean'
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
				id: 'lenders'
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
				id: 'site'
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
				id: 'partners'
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
				id: 'ecosystem'
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
				id: 'stories'
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
				id: 'press'
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
				id: 'finances'
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

		initialize: function () {
			var navItemsData = annualReportData.navItems
			, sectionsData = annualReportData.sections
			, sections = [];

			// Set up the sections
			_.each(sectionsData, function (sectionData, index) {
				sections[index] = new Section(sectionData);
			});

			this.title = annualReportData.title;
			this.meta = annualReportData.meta;
			this.renderAll = annualReportData.renderAll;
			this.renderer = annualReportData.renderer;
			this.defaultSection = annualReportData.defaultSection;
			this.sections = new Sections(sections);
		}
	});
});