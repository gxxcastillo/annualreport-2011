define(['backbone', 'dv', 'hogan', 'text!views/blockView.dataMetric.hogan', 'text!views/blockView.sectionTitle.hogan', 'text!views/blockView.text.hogan'], function (backbone, dv, hogan, dataMetricTpl, sectionTitleTpl, textTpl) {
	var tpl;

	return Backbone.View.extend({

		// Default classname for each block, it will get overriden by instantiation
		className: 'block'


		, template: function (data) {
			if (! this.tpl) {
				this.tpl = hogan.compile(tpl);
			}

			return this.tpl.render(data);
		}


		, render: function(viewData) {
			var cssClass = viewData.name + 'Block ' + viewData.cssClass;

			this.$el.addClass(cssClass);
			this.$el.html(this.template(viewData));
		}

		, initialize: function (viewData) {
			switch (viewData.name) {
				case 'sectionTitle':
					tpl = sectionTitleTpl;
					break;
				case 'dataMetric':
					tpl = dataMetricTpl;
					break;
				case 'text':
					tpl = textTpl;
					break;
				default:
					tpl = '';
			}
			this.render(viewData);
		}
	});
});