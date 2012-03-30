define(['backbone', 'NavItem', 'Section', 'Sections'], function (Backbone, NavItem, Section, Sections) {

	var annualReportData = {
		title: 'Kiva Annual Report 2011'

		// Render all the sections on page load
		, renderAll: false

		// Can be "client" or "server".
		, renderer: 'client'


		, animate: true

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
		, defaultSection: 'borrowers'
		/*
		, sections: [
	    	{
			    id: 'borrowers'
	    		, title: 'Borrowers'
			    , order: 1
	    	}
	    	,
			{
				id: 'lenders'
	    		, title: 'Lenders'
				, order: 2
			}
	    	, {
				id: 'site'
	    		, title: 'Web Site'
				, order: 3
	    	}
	    	, {
				id: 'partners'
	    		, title: 'Partners'
				, order: 4
	    	}
	    	, {
				id: 'ecosystem'
	    		, title: 'Kiva Ecosystem'
				, order: 5
			}
	    	, {
				id: 'stories'
	    		, title: 'Stories From the Field'
				, order: 6
	    	}
	    	, {
				id: 'press'
	    		, title: 'Press & Promotions'
				, order: 7
	    	}
	    	, {
				id: 'finances'
	    		, title: 'Financial Health'
				, order: 8
	    	}

	    ]
	    */
	};

	return Backbone.Model.extend({

		initialize: function () {
			var sections = [];

			// Create the section Models
			_.each(dv.sectionList, function (sectionData, index) {
				sections[index] = new Section(sectionData);
			});

			this.title = annualReportData.title;
			this.meta = annualReportData.meta;
			this.renderAll = annualReportData.renderAll;
			this.renderer = annualReportData.renderer;
			this.animate = annualReportData.animate;
			this.defaultSection = annualReportData.defaultSection;

			// Create the collection
			this.sections = new Sections(sections, {
				// Make sure the sections are in order
				comparator: function (section) {
					return section.get('order');
				}
			});
		}
	});
});