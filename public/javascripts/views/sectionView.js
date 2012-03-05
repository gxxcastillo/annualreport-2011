define(['jquery', 'underscore', 'backbone', 'handlebars', 'dv', 'jquery.isotope', 'blockView']
, function ($, _ ,Backbone, Handlebars, dv ,undefined, blockView) {

	return Backbone.View.extend({

		tagName: 'section'

		, events: {
			'click nav.primaryNav a': 'navClickHandler'
		}


		, elements: {
			'#primaryNav': '$primaryNav'
		}


		, template: Handlebars.compile($('#sectionTemplate').html())


		, navClickHandler: function (event) {
			event.preventDefault();

			var $target = $(event.target)
 		    , page = $target.data('dv-page');

			$.getJSON(dv.url.host + page);

 		    this.$primaryNav.find('li.active').removeClass('active');
 		    $target.parent().addClass('active');
		}


		, addBlock: function () {

			// Get the content to be displayed
			var modelData = {
				content: 'This is my content'
				, title: 'This is my title'
			}

			// Create a new block
	        , newBlock = new blockView({
	            model: modelData
	            , className: 'block g2'
	        });

			this.$el.append(newBlock.$el);
		}


		/**
		 * displays x number of blocks
		 */
		, render: function (viewData) {
			var $section = this.$el;

			$section.html(this.template({title: viewData.title}));

			$.each(viewData.blocks, function (i, block) {
				var newBlock = new blockView(block);
				$section.append(newBlock.el);
			});
		}


		, initialize: function (viewData) {
			if (viewData) {
				this.render(viewData);
			}
		}
	});
})