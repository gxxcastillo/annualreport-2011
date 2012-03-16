define(['backbone', 'hogan'], function (backbone, hogan) {
	return Backbone.View.extend({

		tagName: 'a'

		// Default classname for each block, it will get overriden by instantiation
		, className: 'block'


		, template: function (data) {
			if (! this.tpl) {
				this.tpl = hogan.compile($('#blockTemplate').html());
			}

			return this.tpl.render(data);
		}


		, render: function(viewData) {
			this.$el.html(this.template(viewData));
		}

		, initialize: function (viewData) {
			this.render(viewData);
		}
	});
});