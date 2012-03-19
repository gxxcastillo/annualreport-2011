define(['jquery', 'underscore', 'backbone', 'dv', 'sectionView']
, function ($, _ ,Backbone, dv, sectionView, undefined) {

	return Backbone.View.extend({

		el: '#main'


		, render: function (event, viewData) {
			// Create a new section
			var newSection = new sectionView(viewData);

			// Add the new section
			if (!viewData || viewData.success) {
				this.$el.append(newSection.$el);
			} else {
				this.$el.html('error: unable to retrieve data');
			}
		}


		, scrollToBottom: function () {
			$('html body').animate({scrollTop: $('#main').height()});
		}


		, handleNewSection: function (event, viewData) {
			this.scrollToBottom();
			this.render(event, viewData);
		}


		, initialize: function () {
			// @todo - we currently only render content that we request from the server
			// this.render();

			dv.subscribe('get.section.dv', $.proxy(this.handleNewSection, this));
		}
	});
});