define(['backbone', 'handlebars'], function (backbone, Handlebars) {
	return Backbone.View.extend({

		tagName: 'a'

		// Default classname for each block, it will get overriden by instantiation
		, className: 'block'

		, template: Handlebars.compile($('#blockTemplate').html())

		, render: function(viewData) {
			this.$el.html(this.template(viewData));
		}

		, initialize: function (viewData) {
			this.render(viewData);
		}
	});
});