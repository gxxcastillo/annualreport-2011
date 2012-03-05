define(['backbone', 'handlebars'], function (backbone, Handlebars) {
	return Backbone.View.extend({

		tagName: 'a'

		// Default classname for each block, it will get overriden by instantiation
		, className: 'block'

		, template: Handlebars.compile($('#blockTemplate').html())

		, render: function() {
			var tplSource = Handlebars.compile($('#blockTemplate').html());

			$(this.el).html(this.template(this.model));
			return this;
		}

		, initialize: function () {
			this.render();
		}
	});
});