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
				section = dv.router.getPrevSectionName();
			} else if (section == 'next') {
				section = dv.router.getNextSectionName();
			}

			dv.router.navigate(section);
		}


		, initialize: function () {
			var viewObj = this;

			console.log(dv.router, 'dv.router');
			// Update the UI when routed to a new section (ie..when the url changes)
			dv.router.on('route:updateSection', function (event, $section, sectionView) {
				console.log('updapapdpd');
				viewObj.$el.find('li.active').removeClass('active');

				$('.nav-' + sectionView.name, viewObj.$el).parent().addClass('active');
			});
		}
	});
});