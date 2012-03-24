/*
@todo sidebar view should have a model associeated with it.
That model will have the sidebar elements, as well as information as to how to display (I think?)

 */

define(['jquery', 'underscore', 'backbone', 'dv']
, function ($, _ ,Backbone, dv ,undefined) {
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

			var section = event.target.getAttribute('href').substr(1);

			if (section == 'prev') {
				section = 'borrowers';
			} else if (section == 'next') {
				section = 'fundraising';
			}

			dv.router.navigate(section, {trigger: true});
		}

		, initialize: function () {
			var viewObj = this;

			// Update the UI when routed to a new section
			$(function () {
				dv.router.on('route:showSection', function (section) {
					viewObj.$el.find('li.active').removeClass('active');
					$('.' + section, viewObj).parent().addClass('active');
				});
			});
		}
	});
});