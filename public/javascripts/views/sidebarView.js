define(['jquery', 'underscore', 'backbone', 'handlebars', 'dv']
, function ($, _ ,Backbone, Handlebars, dv ,undefined) {

	return Backbone.View.extend({

		el: '#sidebar'

		, events: {
			'click .primaryNav a': 'navClickHandler'
		}


		, elements: {
			'#primaryNav': '$primaryNav'
		}


		, navClickHandler: function (event) {
			event.preventDefault();

			var $target = $(event.target)
 		    , section = $target.data('dv-section')

			$.getJSON(section, function (results) {
				dv.publish('success.get.section.dv', results);
			});

 		    this.$el.find('li.active').removeClass('active');
 		    $target.parent().addClass('active');
		}

		, initialize: function () {
		}
	});
})