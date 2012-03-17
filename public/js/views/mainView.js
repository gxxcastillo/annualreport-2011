define(['jquery', 'underscore', 'backbone', 'dv', 'sectionView']
, function ($, _ ,Backbone, dv, sectionView, undefined) {

	var counter = 0;

	return Backbone.View.extend({

		el: '#main'


		, render: function (event, viewData) {
			// Create a new section
			var newSection = new sectionView(viewData);

			// Add the new section
			if (!viewData || viewData.success) {
				if (counter % 2 == 0) {
					this.$el.prepend(newSection.$el);
				} else {
					this.$el.append(newSection.$el);
				}

			} else {
				this.$el.html('error: unable to retrieve data');
			}

			counter++;
		}


		, initialize: function () {
			// @todo - we currently only render content that we request from the server
			// this.render();

			dv.subscribe('get.section.dv', $.proxy(this.render, this));
		}
	});
});