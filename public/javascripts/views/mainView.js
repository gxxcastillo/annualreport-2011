define(['jquery', 'underscore', 'backbone', 'dv', 'sectionView']
, function ($, _ ,Backbone, dv, sectionView, undefined) {

	return Backbone.View.extend({

		el: '#main'


		, render: function (event, viewData) {
			// Create a new section
			var newSection = new sectionView(viewData);
			this.$el.append(newSection.$el);
		}


		, initialize: function () {
			this.render();
			dv.subscribe('success.get.section.dv', $.proxy(this.render, this));
		}
	});
})