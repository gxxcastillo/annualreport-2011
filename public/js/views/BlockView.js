define(['backbone', 'dv', 'hogan', 'text!templates/blockView.dataMetric.hogan', 'text!templates/blockView.sectionTitle.hogan', 'text!templates/blockView.text.hogan', 'text!templates/blockView.profile.hogan', 'text!templates/blockView.highlight.hogan', 'text!templates/blockView.dataGraph.hogan', 'text!templates/blockView.hover.hogan', 'text!templates/blockView.vTable.hogan', 'text!templates/blockView.hTable.hogan', 'text!templates/blockView.map.hogan']
, function (Backbone, dv, hogan, dataMetricTpl, sectionTitleTpl, textTpl, profileTpl, highlightTpl, dataGraphTpl, hoverTpl, vTableTpl, hTableTpl, mapTpl) {

	function getSectionTitleData(viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, title: viewData.title
		}
	}


	function getDataMetricData(viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, bv1: viewData.value
			, bv2: viewData.unit
			, bv3: viewData.label
			, bv4: viewData.caption
		}
	}


	function getMapData(viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
		}
	}


	function getProfileData(viewData) {
		return {
			name: viewData.name
			, cssClass: viewData.cssClass
			, img: viewData.imgUrl
			, bv1: viewData.username
			, bv2: viewData.label

		}
	}


	function getHighlightData(viewData) {
		var newData = {
			name: viewData.name
			, cssClass: viewData.cssClass
			, link: viewData.link
			, bv0: viewData.imgUrl
			, bv1: viewData.caption
			, bv2: viewData.subject
			, bv3: viewData.description

		};

		// Is this a lightbox?
		if (viewData.lightbox) {
			newData.isLightbox = true;
			newData.lightbox = [];
			_.each(viewData.lightbox, function (url) {
				newData.lightbox.push({bv4: url, bv2: viewData.label, bv6: viewData.id});
			});
		}

		return newData;
	}


	function getDataGraphData(viewData) {
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
		var newData = {
			name: viewData.name
			, cssClass: viewData.cssClass
			, bv1: viewData.label
		};

		if (_.isArray(viewData.value)) {
			newData.valuelist = true;
		}

		newData.bv0 = viewData.value;

		return newData;
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
				$('a[rel="' + this.viewData.lightbox[0].bv6 + '"]').colorbox({open: true, iframe: true, current: '', width: 853, height: 480});
			}
		}


		, template: function (data) {
			return hogan.compile(this.tpl).render(data);
		}


		, render: function() {
			var viewData = this.viewData
			, className = viewData.name + 'Block ' + viewData.cssClass;

			// Is this block "clickable"?
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
				case 'highlight':
					this.viewData = getHighlightData(viewData);
					this.tpl = highlightTpl;
					break;
				case 'dataGraph':
					this.viewData = getDataGraphData(viewData);
					this.tpl = dataGraphTpl;
					break;
				case 'map':
					this.viewData = getMapData(viewData);
					this.tpl = mapTpl;
					break;
				case 'text':
					this.viewData = getTextData(viewData);
					this.tpl = textTpl;
					break;
				/*
				case 'profile':
					this.viewData = getProfileData(viewData);
					this.tpl = profileTpl;
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
*/
				default:
					this.tpl = '';
			}

			if (!this.tpl) {
				return
			}
			this.render();
		}
	});
});