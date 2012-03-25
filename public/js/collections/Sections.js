define(['backbone', 'Section'], function (Backbone, Section) {
	return Backbone.Collection.extend({

		model: Section


		, attributes: {
			active: ''
			, rendered: []
		}


		, url: '/'


		, setActiveSection: function (sectionName) {
		}
	});
});