define(['backbone', 'SectionModel', 'SectionsCollection'], function (Backbone, SectionModel, SectionsCollection) {

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
	};

	// Return the AnnualReport model
	return Backbone.Model.extend({

		defaults: {
			blockWaypointActivation: false
		}

		, initialize: function () {
			var sections = [];

			// Create the section Models and append to array
			_.each(dv.sectionList, function (sectionData, index) {
				sections[index] = new SectionModel(sectionData);
			});

			// Add attributes to the AnnualReport Model
			this.set({
				// @todo create a "Document or DOM" object to house some of this stuff
				title: annualReportData.title
				, meta: annualReportData.meta
				, renderAll: annualReportData.renderAll
				, renderer: annualReportData.renderer
				, animate: annualReportData.animate
				, defaultSection: annualReportData.defaultSection

				// Create the collection from the section models
				, sections: new SectionsCollection(sections, {
						// Make sure the sections are in order
						comparator: function (section) {
							return section.get('order');
						}
					}
				)
			});
		}
	});
});