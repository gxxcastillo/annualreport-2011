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

			// Update the url
			dv.router.navigate(event.target.getAttribute('href').substr(1), {trigger: true});
		}

		, initialize: function () {
			var viewObj = this;

			// Update the UI when routed to a new section
			$(function () {
				dv.router.on('router:showSection', function (section) {
					viewObj.$el.find('li.active').removeClass('active');
					$('.' + section, viewObj).parent().addClass('active');
				});
			});
		}
	});
});