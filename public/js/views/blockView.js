define(['backbone', 'dv', 'hogan', 'text!views/blockView.dataMetric.hogan', 'text!views/blockView.sectionTitle.hogan', 'text!views/blockView.text.hogan', 'text!views/blockView.profile.hogan', 'text!views/blockView.highlight.hogan', 'text!views/blockView.vTable.hogan', 'text!views/blockView.hTable.hogan'], function (backbone, dv, hogan, dataMetricTpl, sectionTitleTpl, textTpl, profileTpl, highlightTpl, vTableTpl, hTableTpl) {
	var tpl;

	return Backbone.View.extend({

		// Default classname for each block, it will get overriden by instantiation
		className: 'block'


		, events: {
			'click': 'handleBlockClick'
		}


		, handleBlockClick: function (e) {
			var targetEl = e.currentTarget
			, url = $.data(targetEl, 'link-dv');

			if (url) {
				window.open(url, '_blank');
			} else {
				$('a[rel="' + this.viewData.lightboxGroup + '"]').colorbox({open: true, current: ''});
			}
		}


		, template: function (data) {
			if (! this.tpl) {
				this.tpl = hogan.compile(tpl);
			}

			return this.tpl.render(data);
		}


		, render: function(viewData) {
			var cssClass = viewData.name + 'Block ' + viewData.cssClass;

			if (viewData.lightbox || viewData.link) {
				cssClass += ' clickable';

				// "data" will either be set to the url or undefined
				this.$el.data('link-dv', viewData.link);

				viewData.isLightbox = true;
				viewData.lightboxGroup = 'lbGroup_' + this.cid;


			} else {
				// @todo, is it better to have it here, or to check for "clickable" class and return from the handler?
				// Disable the "handleBlockClick()"
				this.handleBlockClick = function () {};
			}

			this.$el.addClass(cssClass);
			this.$el.html(this.template(viewData));

			dv.publish('render.blockView.dv', this.$el);
		}

		, initialize: function (viewData) {
			// @todo @temp using viewData property will need to change once we have a model
			this.viewData = viewData;

			switch (viewData.name) {
				case 'sectionTitle':
					tpl = sectionTitleTpl;
					break;
				case 'dataMetric':
					tpl = dataMetricTpl;
					break;
				case 'profile':
					tpl = profileTpl;
					break;
				case 'highlight':
					tpl = highlightTpl;
					break;
				case 'hTable':
					tpl = hTableTpl;
					break;
				case 'vTable':
					tpl = vTableTpl;
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