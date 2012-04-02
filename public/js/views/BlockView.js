define(['backbone', 'dv', 'hogan', 'text!templates/blockView.dataMetric.hogan', 'text!templates/blockView.sectionTitle.hogan', 'text!templates/blockView.text.hogan', 'text!templates/blockView.profile.hogan', 'text!templates/blockView.highlight.hogan', 'text!templates/blockView.dataGraph.hogan', 'text!templates/blockView.hover.hogan', 'text!templates/blockView.vTable.hogan', 'text!templates/blockView.hTable.hogan', 'text!templates/blockView.map.hogan', 'text!templates/blockView.wrapper.hogan']
, function (Backbone, dv, hogan, dataMetricTpl, sectionTitleTpl, textTpl, profileTpl, highlightTpl, dataGraphTpl, hoverTpl, vTableTpl, hTableTpl, mapTpl, wrapperTpl) {

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
			, singIt: viewData.singIt
			, bv0: viewData.imgUrl
			, bv1: viewData.caption
			, bv2: viewData.subject
			, bv3: viewData.description
		}

		, isLightbox
		, isVideo
		, isSlideshow;

		// Is this block clickable?
		if (viewData.lightbox || viewData.link) {
			newData.isClickable = true;

			if (viewData.lightbox) {
				isVideo = viewData.lightbox[0].indexOf('youtube') > -1;
				isSlideshow = viewData.lightbox.length > 1;
				isLightbox = true;
			}

			if (isSlideshow) {
				newData.lightboxGroup = 'lbGroup_' + this.cid;
			}

			if (isVideo) {
				newData.isIframe = true;
				newData.isPlayable = true;
			}

			newData.isLightbox = isLightbox;
			newData.lightbox = [];
			_.each(viewData.lightbox, function (url) {
				newData.lightbox.push({href: url, title: viewData.label});
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


	function getWrapperData (viewInstance, viewData) {
		return viewData;
	}


	var BlockView = Backbone.View.extend({

		// Default classname for each block, it will get overriden by instantiation
		className: 'block'


		, events: {
			'click': 'handleBlockClick'
		}

		, handleBlockClick: function () {
			var viewData = this.viewData

			if (viewData.link) {
				window.open(viewData.link, '_blank');
			} else if (viewData.isLightbox) {
				// @todo make this more robust
				this.$('.lightboxContent a').colorbox({open: true, iframe: viewData.isIframe, width: 853, height: 480});
			}
		}


		, template: function (data) {
			return hogan.compile(this.tpl).render(data);
		}


		, render: function() {
			var viewData = this.viewData
			, className = viewData.name + 'Block ' + viewData.cssClass;

			// Is this block "clickable"?
			if (viewData.isClickable) {
				className += ' clickable';
			}

			if (viewData.isPlayable) {
				className += ' playable';
			}

			// @todo, is it better to have it here, or to check for "clickable" class and return from the handler?
			// Disable the "handleBlockClick()"
			if (!(viewData.isPlayable || viewData.isClickable)) {
				this.handleBlockClick = function () {};
			}

			this.$el.addClass(className);
			this.$el.html(this.template(viewData));

			if (viewData.blocks) {
				var blocks = [];

				_.each(viewData.blocks, function (block) {
					blocks.push((new BlockView(block)).el);
				});
				this.$el.find('.subBlocks').append(blocks);
			}
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
				case 'wrapper':
					this.viewData = getWrapperData(this, viewData);
					this.tpl = wrapperTpl;
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

	return BlockView;
});