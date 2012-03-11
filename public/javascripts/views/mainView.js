define(['jquery', 'underscore', 'backbone', 'dv', 'sectionView']
, function ($, _ ,Backbone, dv, sectionView, undefined) {

	return Backbone.View.extend({

		el: '#main'


		, render: function (event, viewData) {
			// Create a new section
			var newSection = new sectionView(viewData);

			// Add the new section
			if (!viewData || viewData.success) {
				this.$el.append(newSection.$el);
			} else {
				this.$el.html('error: unable to retrieve data');
			}
		}


		, initialize: function () {
			this.render();
			dv.subscribe('get.section.dv', $.proxy(this.render, this));
		}
	});
});