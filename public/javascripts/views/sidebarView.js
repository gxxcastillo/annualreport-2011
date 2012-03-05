define(['jquery', 'underscore', 'backbone', 'handlebars', 'dv']
, function ($, _ ,Backbone, Handlebars, dv ,undefined) {
	'use strict';

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
				// Update the url
				history.pushState(results, section, section);

				// Announce that we've got new content
				dv.publish('success.get.section.dv', results);
			});

 		    this.$el.find('li.active').removeClass('active');
 		    $target.parent().addClass('active');
		}

		, initialize: function () {
		}
	});
});