define(['backbone', 'dv', 'hogan', 'text!templates/blockView.dataMetric.hogan', 'text!templates/blockView.sectionTitle.hogan', 'text!templates/blockView.text.hogan', 'text!templates/blockView.profile.hogan', 'text!templates/blockView.highlight.hogan', 'text!templates/blockView.dataGraph.hogan', 'text!templates/blockView.hover.hogan', 'text!templates/blockView.vTable.hogan', 'text!templates/blockView.hTable.hogan']
, function (Backbone, dv, hogan, dataMetricTpl, sectionTitleTpl, textTpl, profileTpl, highlightTpl, dataGraphTpl, hoverTpl, vTableTpl, hTableTpl) {

	function getSectionTitleData (viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, title: viewData.title
		}
	}


	function getDataMetricData (viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, bv1: viewData.value
			, bv2: viewData.unit
			, bv3: viewData.label
			, bv4: viewData.context
		}
	}


	function getProfileData (viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, img: viewData.imgUrl
			, bv1: viewData.username
			, bv2: viewData.label

		}
	}


	function getHighlightData (viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, link: viewData.link
			, bv0: viewData.imgUrl
			, bv1: viewData.context
			, bv2: viewData.datum
			, bv3: viewData.descriptor
			, bv4: viewData.descriptor
		}
	}


	function getDataGraphData (viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, bv0: viewData.context
		}
	}

	function getHoverData (viewData) {
		return {
			name: viewData.name
			, cssClass: 'g1 h3'
			, img: 'http://flagurl.jpg'
			, bv0: 'Nicaragua'
			, dataset: [
				{
					bv1: 'Some label'
					, bv2: 'Some value'
				}
				, {
					bv1: 'Some label'
					, bv2: 'Some value'
				}
				, {
					bv1: 'Some label'
					, bv2: 'Some value'
					, cssClass: 'someClass'
				}
				, {
					bv1: 'Some stuff'
					, cssClass: 'someClass'
				}
				, {
					bv2: 'Blah Blah'
				}
			]
		}
	}


	function getHTableData (viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, c0: viewData.label
			, datapoints: viewData.datapoints
		}
	}


	function getVTableData (viewData) {

	}


	function getTextData (viewData) {
		/*
		switch (viewData.variant) {
			case: '':
				break;
			case: '':
				break
		}
		*/
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, valuelist: {
				bv0: viewData.valuelist
			}
			, bv0: viewData.value
			, bv1: viewData.label
			, bv2: viewData.context
		}
	}


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
			return hogan.compile(this.tpl).render(data);
		}


		, render: function() {
			var viewData = this.viewData
			, className = viewData.name + 'Block ' + viewData.cssClass;

			if (viewData.lightbox || viewData.link) {
				className += ' clickable';

				// "data" will either be set to the url or undefined
				this.$el.data('link-dv', viewData.link);

				viewData.isLightbox = true;
				viewData.lightboxGroup = 'lbGroup_' + this.cid;


			} else {
				// @todo, is it better to have it here, or to check for "clickable" class and return from the handler?
				// Disable the "handleBlockClick()"
				this.handleBlockClick = function () {};
			}

			this.$el.addClass(className);
			this.$el.html(this.template(viewData));

			dv.trigger('render.blockView.dv', this.$el);
		}

		, initialize: function (viewData) {
			switch (viewData.name) {
				case 'sectionTitle':
					this.viewData = getSectionTitleData(viewData);
					this.tpl = sectionTitleTpl;
					break;
				case 'dataMetric':
					this.viewData = getDataMetricData(viewData);
					this.tpl = dataMetricTpl;
					break;
				case 'profile':
					this.viewData = getProfileData(viewData);
					this.tpl = profileTpl;
					break;
				case 'highlight':
					this.viewData = getHighlightData(viewData);
					this.tpl = highlightTpl;
					break;
				case 'dataGraph':
					this.viewData = getDataGraphData(viewData);
					this.tpl = dataGraphTpl;
					break;
				case 'hover':
					this.viewData = getHoverData(viewData);
					this.tpl = hoverTpl;
					break;
				case 'hTable':
					this.viewData = getHTableData(viewData);
					this.tpl = hTableTpl;
					break;
				case 'vTable':
					this.viewData = getVTableData(viewData);
					this.tpl = vTableTpl;
					break;
				case 'text':
					this.viewData = getTextData(viewData);
					this.tpl = textTpl;
					break;
				default:
					this.tpl = '';
			}

			this.render();
		}
	});
});